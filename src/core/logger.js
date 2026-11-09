'use strict'
const fs = require('fs')
const fsAsync = require('fs/promises')
const path = require('path')

const stamp = () => new Date().toISOString()

// Every warning/error also goes to <stateDir>/errors.log (human readable) and serious failures with a full
// snapshot (position, held item, nearby blocks, task, stack) go to <stateDir>/incidents.jsonl.
// Buffered asynchronous writes prevent disk I/O from stalling the Mineflayer event loop / keepalive packets.
const sink = {
  dir: null,
  last: new Map(),
  size: 0,
  ring: [],
  taps: [],
  buffers: new Map(),
  writeCounts: new Map(),
  flushing: new Set(),
  timer: null
}

async function flushFileAsync (file) {
  if (!sink.dir || sink.flushing.has(file)) return
  const chunks = sink.buffers.get(file)
  if (!chunks || !chunks.length) return
  sink.buffers.set(file, [])
  sink.flushing.add(file)
  const text = chunks.join('')
  try {
    const target = path.join(sink.dir, file)
    const cnt = (sink.writeCounts.get(file) || 0) + 1
    sink.writeCounts.set(file, cnt)
    if (cnt % 50 === 1) {
      try {
        const st = await fsAsync.stat(target)
        if (st.size > 5_000_000) await fsAsync.rename(target, target + '.old')
      } catch {}
    }
    await fsAsync.appendFile(target, text, 'utf8')
  } catch { /* logging must never crash the bot */ } finally {
    sink.flushing.delete(file)
    if (sink.buffers.get(file)?.length) setImmediate(() => flushFileAsync(file))
  }
}

function flushAllSync () {
  if (!sink.dir) return
  for (const [file, chunks] of sink.buffers.entries()) {
    if (!chunks || !chunks.length) continue
    const text = chunks.join('')
    sink.buffers.set(file, [])
    try {
      const target = path.join(sink.dir, file)
      fs.appendFileSync(target, text)
    } catch {}
  }
}

process.once('exit', flushAllSync)

function write (file, text) {
  if (!sink.dir) return
  let arr = sink.buffers.get(file)
  if (!arr) {
    arr = []
    sink.buffers.set(file, arr)
  }
  arr.push(text)
  if (arr.length >= 64) {
    setImmediate(() => flushFileAsync(file))
  } else if (!sink.timer) {
    sink.timer = setTimeout(() => {
      sink.timer = null
      for (const f of sink.buffers.keys()) flushFileAsync(f)
    }, 150)
    sink.timer.unref?.()
  }
}

class Logger {
  constructor (prefix = 'builder') { this.prefix = prefix }

  static setDir (dir) {
    try {
      flushAllSync()
      fs.mkdirSync(dir, { recursive: true })
      sink.dir = path.resolve(dir)
    } catch { sink.dir = null }
  }

  static flushSync () {
    flushAllSync()
  }

  static incident (type, details = {}) {
    const key = `${type}|${details.message || ''}`.slice(0, 200)
    const now = Date.now()
    const prev = sink.last.get(key)
    if (prev && now - prev.t < 15_000) { prev.n++; return } // same failure again: counted, not spammed
    if (prev && prev.n) write('incidents.jsonl', JSON.stringify({ time: stamp(), type: 'repeat', of: key, extra: prev.n }) + '\n')
    sink.last.set(key, { t: now, n: 0 })
    write('incidents.jsonl', JSON.stringify({ time: stamp(), type, ...details }) + '\n')
  }

  static dir () { return sink.dir }
  static write (file, text) { write(file, text) }
  static recent (n = 60, prefix = null) { const r = prefix ? sink.ring.filter(l => l.p === prefix) : sink.ring; return r.slice(-n).map(l => l.s) }
  static tap (fn) { sink.taps.push(fn); return () => { sink.taps = sink.taps.filter(f => f !== fn) } }

  // full timeline (info + warn + error + debug) for diagnosing stalls: data/session.log
  session (level, args) {
    const text = args.map(a => (a instanceof Error ? a.stack : typeof a === 'string' ? a : JSON.stringify(a))).join(' ')
    const line = `[${stamp()}] [${this.prefix}] [${level}] ${text}`
    write('session.log', line + '\n')
    sink.ring.push({ p: this.prefix, s: line.slice(0, 400) }); if (sink.ring.length > 600) sink.ring.splice(0, 200)
    for (const fn of sink.taps) { try { fn(this.prefix, level, text) } catch { /* never throws */ } }
  }

  line (level, args) {
    this.session(level, args)
    write('errors.log', `[${stamp()}] [${this.prefix}] [${level}] ${args.map(a => (a instanceof Error ? a.stack : typeof a === 'string' ? a : JSON.stringify(a))).join(' ')}\n`)
  }

  info (...args) { console.log(`[${stamp()}] [${this.prefix}] [INFO]`, ...args); this.session('INFO', args) }
  warn (...args) { console.warn(`[${stamp()}] [${this.prefix}] [WARN]`, ...args); this.line('WARN', args) }
  error (...args) { console.error(`[${stamp()}] [${this.prefix}] [ERROR]`, ...args); this.line('ERROR', args) }
  debug (...args) {
    this.session('DEBUG', args)
    if (process.env.DEBUG_BUILDER === '1') console.log(`[${stamp()}] [${this.prefix}] [DEBUG]`, ...args)
  }
}

module.exports = { Logger }
