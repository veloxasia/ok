'use strict'
// Protocol-level behaviour of a vanilla client that mineflayer leaves out. Strict servers (1.21.2+ anti-cheats) refuse
// block breaks and rubber-band players whose client never sends it:
//  - tick_end: one packet at the end of every active client tick, after that tick's movement packet.
//  - mod/voice-chat channel payloads and the sign editor prompt are ignored the way a plain vanilla client ignores them.
function hasPacket (bot, name) {
  try {
    const t = require('minecraft-data')(bot.version).protocol.play.toServer.types
    return Boolean(t[`packet_${name}`])
  } catch { return false }
}

const FLYING = new Set(['position', 'position_look', 'look', 'flying'])
const MOD_CHANNELS = ['voicechat', 'lunar:', 'feather:', 'fabric:', 'meteor', 'wurst', 'baritone']
const isMod = s => { const t = String(s || '').toLowerCase(); return MOD_CHANNELS.some(m => t.includes(m)) }

function installWireFixes (bot, config, logger) {
  const client = bot._client
  if (!client || client.__wireFixed) return { tickEnd: false }
  client.__wireFixed = true
  const cfg = config?.wire || {}
  const stats = { tickEnds: 0, signs: 0, modChannels: 0 }
  const origWrite = client.write.bind(client)
  const origEmit = client.emit.bind(client)

  try {
    client.socket?.setNoDelay?.(true)
    client.socket?.setKeepAlive?.(true, 15_000)
    client.on?.('connect', () => {
      try {
        client.socket?.setNoDelay?.(true)
        client.socket?.setKeepAlive?.(true, 15_000)
      } catch {}
    })
  } catch {}

  if (cfg.blockModChannels !== false || cfg.ignoreSignEditor !== false) {
    client.emit = function (event, ...args) {
      if (event === 'open_sign_entity') {
        stats.signs++
        try { bot.emit('mhbSign', args[0]) } catch { /* listeners are optional */ }
        if (cfg.ignoreSignEditor !== false) return false
      }
      if (event === 'custom_payload' && cfg.blockModChannels !== false) {
        try {
          const p = args[0] || {}
          if (isMod(p.channel) || isMod(p.data?.toString?.('utf8'))) { stats.modChannels++; return false }
        } catch { /* pass it on */ }
      }
      return origEmit(event, ...args)
    }
  }

  let tickEnd = false
  const arm = () => {
    if (tickEnd || cfg.tickEnd === false) return
    if (!hasPacket(bot, 'tick_end')) return
    tickEnd = true
    let sent = false
    const canSend = () => Boolean(bot.entity && !client.ended && (!client.state || client.state === 'play'))
    const send = () => {
      if (sent || !canSend()) return
      sent = true
      try { origWrite('tick_end', {}); stats.tickEnds++ } catch { /* not playing */ }
    }
    client.write = function (name, params, ...rest) {
      if (name === 'custom_payload' && cfg.blockModChannels !== false && (isMod(params?.channel) || isMod(params?.data?.toString?.('utf8')))) return
      const result = origWrite(name, params, ...rest)
      if (FLYING.has(name)) send()
      return result
    }
    // Only send standalone physicsTick tick_end when the bot is actively building, moving, or digging;
    // when standing idle, Mineflayer's periodic FLYING packets already trigger send() above without flooding Aternos!
    bot.on('physicsTick', () => {
      sent = false
      const active = Boolean(bot.builder?.running || bot.pathfinder?.isMoving?.() || bot.targetDigBlock)
      if (active) {
        queueMicrotask(() => { if (!sent && canSend()) send() })
      }
    })
    logger?.info?.('wire: sending tick_end after every client tick (protocol has it)')
  }
  bot.once('spawn', arm)
  return { stats }
}

module.exports = { installWireFixes, hasPacket }
