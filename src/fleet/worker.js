'use strict'
// One builder bot in its own process. Started by the hub (fleet.js) with MHB_WORKER_INDEX; talks to the hub
// with process.send / process.on('message').
const fs = require('fs')
const path = require('path')
const root = path.resolve(__dirname, '..', '..')
const config = require('../core/config').loadConfig(root)
require('../state/paths').prepareState(root, config)
const { Logger } = require('../core/logger')
const { createBuilderBot } = require('../core/bot')
const { OrientationLearner, Experience } = require('../learning/learner')
const { ReplicaCoordinator } = require('./replica')
const { workerNames, workerConfigFor, superviseOne } = require('./fleet')

const names = workerNames(config)
const index = Number(process.env.MHB_WORKER_INDEX || 0)
const id = names[index]
const logger = new Logger(id)
const workerConfig = workerConfigFor(config, id)
Logger.setDir(path.resolve(root, 'data')) // logs stay next to the program; saved jobs/learning live in the shared state dir
fs.mkdirSync(path.resolve(root, 'data'), { recursive: true })
process.on('uncaughtException', error => {
  if (/Unsupported protocol version|minecraftVersion/i.test(String(error?.message || ''))) {
    if (!workerConfig.server.version && !workerConfig.server._detectedVersion) workerConfig.server._detectedVersion = '1.21.4'
    logger.warn(`transient protocol ping error (${error.message}); defaulting to ${workerConfig.server._detectedVersion} on next connect`)
    return
  }
  logger.error('uncaughtException', error)
  Logger.incident('uncaughtException', { worker: id, message: error.message, stack: error.stack })
})
process.on('unhandledRejection', error => { logger.error('unhandledRejection', error); Logger.incident('unhandledRejection', { worker: id, message: String(error?.message || error), stack: error?.stack }) })
process.on('disconnect', () => process.exit(0)) // the hub is gone: so are we

const send = m => { try { if (process.connected) process.send(m) } catch {} }
const coord = new ReplicaCoordinator(names.length, { minGap: Number(config.fleet?.minGap ?? 6) }, send, id)
const loginWaiters = []

const fleet = {
  coord, id, index, count: names.length, ids: names,
  shared: { learner: new OrientationLearner(config.paths.stateDir, logger, id), experience: new Experience(config.paths.stateDir, logger, id) },
  handler: null, pending: [], say: null,
  currentBot: null, lastSpawnAt: Date.now(), lastOnlineAt: Date.now(),
  send,
  relay: m => send({ t: 'cmd', from: id, ...m }),
  hello: () => send({ t: 'hello' }),
  jobDone: () => send({ t: 'jobdone' }),
  setHandler (fn) { this.handler = fn; const queued = this.pending.splice(0); for (const m of queued) fn(m) },
  gate: () => new Promise(resolve => {
    const timer = setTimeout(resolve, 60_000) // never wait forever for the hub
    loginWaiters.push(() => { clearTimeout(timer); resolve() })
    send({ t: 'login' })
  })
}
const dispatch = m => { if (fleet.handler) fleet.handler(m); else fleet.pending.push(m) }

process.on('message', m => {
  try {
    if (m.t === 'login-ok') { const r = loginWaiters.shift(); if (r) r(); return }
    if (m.t === 'say') { fleet.say?.(m.text); return }
    if (m.t === 'cmd') { dispatch(m); return }
    coord.apply(m)
    if (m.t === 'state' && m.job) {
      dispatch({
        t: 'cmd',
        cmd: 'start',
        file: m.job.file,
        origin: m.job.origin,
        rotation: m.job.rotation,
        startLayer: m.job.startLayer ?? null,
        continueMode: Boolean(m.job.continueMode || true),
        resume: true
      })
    }
  } catch (error) { logger.warn(`hub message: ${error.message}`) }
})

setInterval(() => {
  if (fleet.currentBot?.entity) fleet.lastOnlineAt = Date.now()
  coord.beat(id)
  coord.report()
}, 500).unref?.()
// Send IPC heartbeat while the worker process is healthy and not stuck offline for >240s
setInterval(() => {
  const offlineMs = Date.now() - (fleet.lastOnlineAt || Date.now())
  if (offlineMs < 240_000) send({ t: 'ping', id })
}, 4000).unref?.()
let lastCpu = process.cpuUsage(); let lastAt = Date.now()
setInterval(() => {
  const u = process.cpuUsage(lastCpu); const dt = (Date.now() - lastAt) * 1000; lastCpu = process.cpuUsage(); lastAt = Date.now()
  const rssMb = Math.round(process.memoryUsage().rss / 1048576)
  logger.info(`HEALTH: cpu ${Math.round(((u.user + u.system) / dt) * 100)}% | rss ${rssMb} MB | ${coord.summary()}`.slice(0, 400))
  const maxWorkerRssMb = Number(config.fleet?.maxWorkerRssMb || 2800)
  const offlineMs = Date.now() - (fleet.lastOnlineAt || Date.now())
  if (rssMb > maxWorkerRssMb || offlineMs > 240_000) {
    logger.warn(`worker recycling process cleanly (rss=${rssMb}MB, offline=${Math.round(offlineMs / 1000)}s) so hub respawns fresh worker`)
    try { fleet.currentBot?.builder?.save?.().catch(() => {}) } catch {}
    setTimeout(() => process.exit(1), 250)
  }
}, 30_000).unref?.()

logger.info(`worker ${index + 1}/${names.length} started (pid ${process.pid})`)
superviseOne(workerConfig, fleet, createBuilderBot, logger).catch(error => { logger.error(`fatal: ${error.stack || error.message}`); process.exit(1) })
