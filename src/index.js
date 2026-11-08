'use strict'

const fs = require('fs')
const path = require('path')
const readline = require('readline')
const { createBuilderBot } = require('./core/bot')
const { Logger } = require('./core/logger')
const { loadConfig, problems } = require('./core/config')

const root = path.resolve(__dirname, '..')
const logger = new Logger('startup')
const config = loadConfig(root)
const issues = problems(config)
if (issues.length) {
  console.error('Cannot start yet:\n - ' + issues.join('\n - ') + '\nOpen the GUI (gui.bat / npm run gui) and fill these in.')
  process.exit(1)
}
const { prepareState } = require('./state/paths')
prepareState(root, config, m => logger.info(m))

for (const dir of [config.paths.schematicsDir, config.paths.stateDir]) {
  fs.mkdirSync(path.resolve(root, dir), { recursive: true })
}

Logger.setDir(path.resolve(root, 'data')) // logs stay next to the program; saved jobs/learning live in the shared state dir
fs.mkdirSync(path.resolve(root, 'data'), { recursive: true })
process.on('uncaughtException', error => { logger.error('uncaughtException', error); Logger.incident('uncaughtException', { message: error.message, stack: error.stack }) })
process.on('unhandledRejection', error => { logger.error('unhandledRejection', error); Logger.incident('unhandledRejection', { message: String(error?.message || error), stack: error?.stack }) })

// Commands from the GUI (or typed in this console). Nothing is said in game chat.
//   build <file> <x> <y> <z> [rotation] [startLayer]
//   continue <file> <x> <y> <z> [rotation] [startLayer]
//   pause   resume   stop

function parseBuild (line) {
  // "build|continue <file with spaces> x y z [rotation] [startLayer]": the numbers are always at the end
  const tokens = line.trim().split(/\s+/)
  const cmdName = (tokens[0] || '').toLowerCase()
  const parts = tokens.slice(1)
  const nums = []
  while (parts.length > 1 && nums.length < 5 && /^-?\d+(\.\d+)?$/.test(parts[parts.length - 1])) nums.unshift(Number(parts.pop()))
  if (nums.length < 3) return null
  const [x, y, z, rotation = 0, startLayer = null] = nums
  return {
    file: parts.join(' '),
    origin: { x, y, z },
    rotation,
    startLayer: startLayer != null && Number.isFinite(Number(startLayer)) ? Number(startLayer) : null,
    continueMode: cmdName === 'continue' || (startLayer != null && Number.isFinite(Number(startLayer)))
  }
}

function attachConsoleReal (hub) {
  const rl = readline.createInterface({ input: process.stdin })
  rl.on('line', line => {
    const cmd = line.trim().split(/\s+/)[0]
    if (!cmd) return
    if (cmd === 'build' || cmd === 'continue') {
      const b = parseBuild(line)
      if (!b) return logger.warn('usage: build|continue <file> <x> <y> <z> [rotation] [startLayer]')
      logger.info(`console: ${cmd} ${b.file} at ${b.origin.x} ${b.origin.y} ${b.origin.z}${b.startLayer != null ? ` (from layer ${b.startLayer})` : ''}`)
      return hub.command({
        cmd: 'start',
        file: b.file,
        origin: b.origin,
        rotation: b.rotation,
        startLayer: b.startLayer,
        continueMode: b.continueMode,
        from: 'console'
      })
    }
    if (['pause', 'resume', 'stop'].includes(cmd)) { logger.info(`console: ${cmd}`); return hub.command({ cmd, from: 'console' }) }
    logger.warn(`unknown console command "${cmd}" (build, continue, pause, resume, stop)`)
  })
}

const { startFleet } = require('./fleet/fleet')
config.onHub = attachConsoleReal
logger.info(`Starting ${config.accounts.length} bot(s) -> ${config.server.host}:${config.server.port}`)
startFleet(config, createBuilderBot, logger).catch(error => { logger.error(`fatal fleet error: ${error.stack || error.message}`); process.exitCode = 1 })
