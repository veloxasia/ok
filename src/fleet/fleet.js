'use strict'
// Starts N builder bots (BuilderBot1..N) that build one schematic together. They share one Coordinator, one
// orientation learner and one experience file (what one bot learns, all use). Worker 1 is the leader: you
// talk to it in chat and every command is applied to all workers.
const { Coordinator } = require('./coordinator')
const { OrientationLearner, Experience } = require('../learning/learner')
const { sleep } = require('../util/async')

async function superviseOne (config, fleet, createBuilderBot, logger) {
  let attempt = 0
  while (true) {
    if (fleet?.gate) await fleet.gate()
    let bot
    try {
      const account = config.account
      const authOpts = account ? await require('../core/accounts').authOptions(account, config, config.paths.stateDir) : null
      if (authOpts?.username) config.server.username = authOpts.username
      bot = createBuilderBot(config, fleet, authOpts)
      if (fleet) fleet.currentBot = bot
    } catch (error) {
      logger.error(`${config.server.username}: login not possible: ${error.message}`)
      await sleep(Math.max(30_000, Number(config.server.reconnectDelayMs || 15000)))
      continue
    }
    const t0 = Date.now()
    try {
      await new Promise(resolve => {
        let spawned = false
        let timer = null
        const clearWatchdog = () => { if (timer) { clearTimeout(timer); timer = null } }
        const done = why => {
          clearWatchdog()
          if (why) logger.warn(`${config.server.username}: ${why}`)
          try { bot.end?.() } catch {}
          resolve()
        }
        // A login that dies with ECONNRESET or stalls after login without ever reaching 'spawn' must not leave this bot dead forever
        timer = setTimeout(() => { if (!spawned) done('did not join within 120 s: reconnecting') }, 120_000)
        bot.once('login', () => {
          if (spawned) return
          clearWatchdog()
          timer = setTimeout(() => { if (!spawned) done('logged in but did not spawn within 90 s: reconnecting') }, 90_000)
        })
        bot.once('spawn', () => {
          spawned = true
          if (fleet) fleet.lastSpawnAt = Date.now()
          clearWatchdog()
        })
        bot.on('error', error => {
          if (!spawned && /ECONNRESET|ETIMEDOUT|ECONNREFUSED|EPIPE|ENOTFOUND|Unsupported protocol version|minecraftVersion/i.test(String(error?.code || error?.message))) {
            if (/Unsupported protocol version|minecraftVersion/i.test(String(error?.message)) && !config.server.version && !config.server._detectedVersion) {
              config.server._detectedVersion = '1.21.4'
            }
            done(`login failed (${error.code || error.message}): reconnecting`)
          }
        })
        bot.once('end', () => { clearWatchdog(); resolve() })
      })
    } catch (error) { logger.error(`bot supervisor: ${error.stack || error.message}`) }
    const up = Date.now() - t0
    logger.warn(`${config.server.username}: connection lasted ${Math.round(up / 1000)}s${fleet ? `, ${[...fleet.coord.workers.values()].filter(w => w.bot?.entity).length} bots were online` : ''}`)
    if (up > 60_000) attempt = 0
    if (!config.server.autoReconnect) break
    attempt += 1
    if (global.gc) { try { global.gc() } catch {} }
    const baseDelay = up > 45_000 ? 6_000 : Math.max(10_000, Number(config.server.reconnectDelayMs || 12_000))
    const delay = Math.min(60_000, baseDelay * Math.pow(1.5, Math.min(4, Math.max(0, attempt - 1))) + (fleet ? 2500 * (fleet.index % 6) : 0))
    logger.warn(`${config.server.username}: reconnecting in ${delay}ms`)
    await sleep(delay)
  }
}

// the bots share one connection budget: each one places and sends commands slower than a lone bot would
function workerConfigFor (config, name) {
  return {
    ...config,
    server: { ...config.server, username: name },
    account: (config.accounts || []).find(a => String(a.username) === name) || null,
    building: { ...config.building, maxPlacementsPerSecond: Math.min(Number(config.building?.maxPlacementsPerSecond || 20), Number(config.fleet?.perBotPlacementsPerSecond ?? 20)) }
  }
}

// the bots ARE the accounts you added in the GUI: there are no built-in names
function workerNames (config) {
  return (config.accounts || []).map(a => String(a.username))
}

// One login at a time, `gap` ms apart (also for reconnects): servers answer faster logins from one address with
// "Connection throttled! Please wait before reconnecting."
function makeGate (gap) {
  let chain = Promise.resolve(); let last = 0
  return () => {
    const turn = chain.then(async () => { const wait = last + gap * (0.8 + Math.random() * 0.7) - Date.now(); if (wait > 0) await sleep(wait); last = Date.now() })
    chain = turn.catch(() => {})
    return turn
  }
}

// The process is single-threaded: if something blocks it for seconds, no bot answers the server's keep-alive and
// every connection drops. Measure it, write it down, and do not count the frozen time as "no progress".
function watchEventLoop (coord, logger, Logger) {
  let last = Date.now(); let cpu = process.cpuUsage(); let cpuAt = Date.now()
  const stats = setInterval(() => {
    const u = process.cpuUsage(cpu); const dt = (Date.now() - cpuAt) * 1000; cpu = process.cpuUsage(); cpuAt = Date.now()
    const online = [...coord.workers.values()].filter(w => w.bot?.entity).length
    logger.info(`HEALTH: cpu ${Math.round(((u.user + u.system) / dt) * 100)}% | rss ${Math.round(process.memoryUsage().rss / 1048576)} MB | ${online} bots online | ${coord.summary()}`.slice(0, 400))
  }, 30_000)
  stats.unref?.()
  const timer = setInterval(() => {
    const now = Date.now(); const lag = now - last - 500; last = now
    if (lag < 1500) return
    logger.warn(`EVENT LOOP BLOCKED for ${(lag / 1000).toFixed(1)}s (all bots froze; usually a long path search)`)
    Logger.incident('event-loop-blocked', { message: `event loop blocked ${lag} ms`, ms: lag })
    coord.lastProgressAt = now
    for (const b of coord.builders()) b.lastProgressAt = now
  }, 500)
  timer.unref?.()
  return timer
}

// default: every bot in its own process (see hub.js). `fleet.mode: "inprocess"` keeps the old shared-process mode.
async function startFleet (config, createBuilderBot, logger) {
  if ((config.fleet?.mode || 'processes') === 'inprocess') return startInProcess(config, createBuilderBot, logger)
  const os = require('os')
  const path = require('path')
  const { fork } = require('child_process')
  const { Hub } = require('./hub')
  const names = workerNames(config)
  const stateDir = path.resolve(path.join(__dirname, '..', '..'), config.paths.stateDir)
  const hub = new Hub({ logger, jobFile: path.join(stateDir, 'fleet-job.json'), resume: Boolean(config.server.resumeOnStart), loginGapMs: Number(config.fleet?.joinDelayMs ?? 6000), deadAfterMs: Number(config.fleet?.deadAfterMs ?? 90_000) })
  const totalRamMb = Math.round(os.totalmem() / 1048576)
  const cpuCount = os.cpus()?.length || 1
  const perWorkerHeapMb = totalRamMb >= 16384 ? 4096 : (totalRamMb >= 8192 ? 2048 : 1024)
  logger.info(`Starting ${names.length} builder(s), each in its own process (${names.join(', ')}) on ${cpuCount} vCPU / ${totalRamMb} MB RAM (heap ${perWorkerHeapMb} MB/bot) -> ${config.server.host}:${config.server.port}`)
  if (hub.job) logger.info(`saved job found: ${hub.job.file} at ${hub.job.origin?.x},${hub.job.origin?.y},${hub.job.origin?.z}: the workers resume it by themselves (resume on start is on)`)
  const children = new Map()
  let shuttingDown = false
  const killAllWorkers = () => {
    shuttingDown = true
    for (const ch of children.values()) {
      try { ch.kill('SIGTERM') } catch {}
    }
    children.clear()
  }
  process.once('SIGTERM', () => { killAllWorkers(); process.exit(0) })
  process.once('SIGINT', () => { killAllWorkers(); process.exit(0) })
  process.once('exit', killAllWorkers)

  if (typeof config.onHub === 'function') config.onHub(hub)
  const spawnWorker = (index, attempt = 0) => {
    if (shuttingDown) return
    const id = names[index]
    const execArgv = process.execArgv.some(a => a.startsWith('--max-old-space-size'))
      ? process.execArgv
      : [...process.execArgv, `--max-old-space-size=${perWorkerHeapMb}`]
    const child = fork(path.join(__dirname, 'worker.js'), [], {
      execArgv,
      env: { ...process.env, MHB_WORKER_INDEX: String(index) },
      stdio: 'inherit'
    })
    children.set(id, child)
    hub.attach(id, index, child)
    const started = Date.now()
    let handled = false
    const onGone = (why) => {
      if (handled || shuttingDown) return
      handled = true
      hub.detach(id); children.delete(id)
      const up = Date.now() - started
      const delay = up > 60_000 ? 3000 : Math.min(30_000, 3000 * (attempt + 1))
      logger.warn(`${id}: process ended (${why}) after ${Math.round(up / 1000)}s; starting it again in ${Math.round(delay / 1000)}s`)
      setTimeout(() => spawnWorker(index, up > 60_000 ? 0 : attempt + 1), delay)
    }
    child.on('exit', (code, signal) => onGone(`code ${code}${signal ? ` ${signal}` : ''}`))
    child.on('error', error => onGone(error.message))
  }
  names.forEach((_, index) => spawnWorker(index))
  setInterval(() => {
    if (shuttingDown) return
    for (const id of hub.deadWorkers()) {
      logger.warn(`${id}: silent for too long, restarting its process`)
      children.get(id)?.kill()
    }
  }, 10_000).unref?.()
  await new Promise(() => {}) // the hub runs until the window is closed
}

async function startInProcess (config, createBuilderBot, logger) {
  const names = workerNames(config)
  const coord = new Coordinator(names.length, { minGap: Number(config.fleet?.minGap ?? 6) })
  const shared = { learner: new OrientationLearner(config.paths.stateDir, logger), experience: new Experience(config.paths.stateDir, logger) }
  logger.info(`Starting a fleet of ${names.length} builders (${names.join(', ')}) -> ${config.server.host}:${config.server.port}`)
  const gate = makeGate(Number(config.fleet?.joinDelayMs ?? 6000))
  watchEventLoop(coord, logger, require('../core/logger').Logger)
  const runs = names.map((name, index) => (async () => {
    const workerConfig = workerConfigFor(config, name)
    return superviseOne(workerConfig, { coord, id: name, index, count: names.length, ids: names, shared, gate }, createBuilderBot, logger)
  })())
  await Promise.all(runs)
}

module.exports = { startFleet, superviseOne, workerNames, workerConfigFor }
