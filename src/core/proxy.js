'use strict'

const net = require('net')
const tls = require('tls')
const dns = require('dns')
const http = require('http')
const https = require('https')

// Cache detected protocol ('socks5' | 'http') per proxy host:port when type === 'auto'
const detectedProtocolCache = new Map()

/**
 * Parses proxy strings in any of these formats:
 *   1) host:port:username:password
 *      e.g. pg.stealthtunnel.net:6060:o0i6f039le1bozi:62B358D4-5ED7-E14C-A931-1D1381A738E6
 *   2) socks5://host:port:username:password or http://host:port:username:password
 *   3) socks5://username:password@host:port or http://username:password@host:port
 *   4) username:password@host:port
 *   5) host:port
 */
function parseProxy (input, preferredType = 'auto') {
  if (!input) return null
  if (typeof input === 'object' && input.host && input.port) {
    if (input.enabled === false) return null
    const host = String(input.host || '').trim()
    const port = Number(input.port)
    if (!host || !Number.isFinite(port) || port <= 0) return null
    const type = normalizeProxyType(input.type || preferredType)
    if (type === 'off' || type === 'none') return null
    return {
      type,
      host,
      port,
      username: input.username ? String(input.username).trim() : '',
      password: input.password ? String(input.password) : '',
      raw: input.raw || `${host}:${port}`
    }
  }

  let str = String(input || '').trim()
  if (!str) return null

  let explicitType = null
  const protoMatch = str.match(/^(socks5h?|socks|https?|auto):\/\//i)
  if (protoMatch) {
    const p = protoMatch[1].toLowerCase()
    explicitType = p.startsWith('socks') ? 'socks5' : (p.startsWith('http') ? 'http' : 'auto')
    str = str.slice(protoMatch[0].length).trim()
  }
  str = str.replace(/\/+$/, '')

  const type = normalizeProxyType(explicitType || preferredType)
  if (type === 'off' || type === 'none') return null

  let host = ''
  let port = 0
  let username = ''
  let password = ''

  if (str.includes('@')) {
    const atIdx = str.lastIndexOf('@')
    const authPart = str.slice(0, atIdx)
    const hostPart = str.slice(atIdx + 1)
    const cIdx = authPart.indexOf(':')
    if (cIdx >= 0) {
      username = decodeURIComponent(authPart.slice(0, cIdx))
      password = decodeURIComponent(authPart.slice(cIdx + 1))
    } else {
      username = decodeURIComponent(authPart)
    }
    const hp = hostPart.split(':')
    host = hp[0] || ''
    port = Number(hp[1])
  } else {
    const parts = str.split(':')
    if (parts.length >= 4) {
      host = parts[0].trim()
      port = Number(parts[1].trim())
      username = parts[2].trim()
      password = parts.slice(3).join(':').trim()
    } else if (parts.length === 2) {
      host = parts[0].trim()
      port = Number(parts[1].trim())
    } else if (parts.length === 3) {
      host = parts[0].trim()
      port = Number(parts[1].trim())
      username = parts[2].trim()
    }
  }

  if (!host || !Number.isFinite(port) || port <= 0 || port > 65535) {
    return null
  }

  return {
    type,
    host,
    port,
    username,
    password,
    raw: `${host}:${port}${username ? `:${username}:***` : ''}`
  }
}

function normalizeProxyType (t) {
  const s = String(t || 'auto').trim().toLowerCase()
  if (s === 'socks5' || s === 'socks' || s === 'socks5h') return 'socks5'
  if (s === 'http' || s === 'https' || s === 'connect') return 'http'
  if (s === 'off' || s === 'none' || s === 'false' || s === 'disabled') return 'off'
  return 'auto'
}

function resolveEffectiveProxy (config, account = null) {
  const accProxyRaw = account?.proxy || config?.account?.proxy
  const srvProxyCfg = config?.server?.proxy
  const srvProxyType = config?.server?.proxyType || srvProxyCfg?.type || 'auto'

  if (accProxyRaw && String(accProxyRaw).trim()) {
    const parsed = parseProxy(accProxyRaw, account?.proxyType || srvProxyType)
    if (parsed) return parsed
  }

  if (typeof srvProxyCfg === 'string' && srvProxyCfg.trim()) {
    return parseProxy(srvProxyCfg, srvProxyType)
  }
  if (srvProxyCfg && typeof srvProxyCfg === 'object') {
    if (srvProxyCfg.enabled === false || srvProxyCfg.type === 'off') return null
    if (srvProxyCfg.url || srvProxyCfg.string || srvProxyCfg.raw) {
      return parseProxy(srvProxyCfg.url || srvProxyCfg.string || srvProxyCfg.raw, srvProxyCfg.type || srvProxyType)
    }
    return parseProxy(srvProxyCfg, srvProxyType)
  }
  return null
}

function createLineReader (socket) {
  let buf = Buffer.alloc(0)
  let closed = false
  let closeErr = null
  const waiters = []

  const pump = () => {
    while (waiters.length > 0) {
      const w = waiters[0]
      if (closed || closeErr) {
        waiters.shift()
        w.reject(closeErr || new Error('Proxy socket closed unexpectedly during handshake'))
        continue
      }
      if (w.kind === 'bytes') {
        if (buf.length >= w.count) {
          waiters.shift()
          const out = buf.subarray(0, w.count)
          buf = buf.subarray(w.count)
          w.resolve(out)
          continue
        }
      } else if (w.kind === 'until') {
        const idx = buf.indexOf(w.delim)
        if (idx !== -1) {
          waiters.shift()
          const end = idx + w.delim.length
          const out = buf.subarray(0, end)
          buf = buf.subarray(end)
          w.resolve(out)
          continue
        }
      }
      break
    }
  }

  const onData = chunk => {
    buf = buf.length === 0 ? chunk : Buffer.concat([buf, chunk])
    pump()
  }
  const onError = err => {
    closeErr = err
    pump()
  }
  const onClose = () => {
    closed = true
    pump()
  }

  socket.on('data', onData)
  socket.on('error', onError)
  socket.on('close', onClose)
  socket.on('end', onClose)

  return {
    readBytes (count) {
      return new Promise((resolve, reject) => {
        waiters.push({ kind: 'bytes', count, resolve, reject })
        pump()
      })
    },
    readUntil (delim) {
      return new Promise((resolve, reject) => {
        waiters.push({ kind: 'until', delim: Buffer.from(delim), resolve, reject })
        pump()
      })
    },
    detach () {
      socket.removeListener('data', onData)
      socket.removeListener('error', onError)
      socket.removeListener('close', onClose)
      socket.removeListener('end', onClose)
      if (buf.length > 0) {
        const extra = buf
        buf = Buffer.alloc(0)
        try { socket.unshift(extra) } catch {}
      }
    }
  }
}

const SOCKS5_ERRORS = {
  1: 'general SOCKS server failure',
  2: 'connection not allowed by ruleset',
  3: 'network unreachable',
  4: 'host unreachable',
  5: 'connection refused by destination host',
  6: 'TTL expired',
  7: 'command not supported',
  8: 'address type not supported'
}

async function connectSocks5 (proxy, destHost, destPort, timeoutMs = 15000) {
  const socket = new net.Socket()
  socket.setNoDelay(true)

  let timer = null
  const timeoutPromise = new Promise((_, reject) => {
    timer = setTimeout(() => {
      try { socket.destroy() } catch {}
      reject(new Error(`SOCKS5 proxy timeout (${proxy.host}:${proxy.port} -> ${destHost}:${destPort})`))
    }, timeoutMs)
  })

  try {
    await Promise.race([
      new Promise((resolve, reject) => {
        socket.once('connect', resolve)
        socket.once('error', reject)
        socket.connect(proxy.port, proxy.host)
      }),
      timeoutPromise
    ])

    const reader = createLineReader(socket)
    const hasAuth = Boolean(proxy.username)
    const greeting = hasAuth
      ? Buffer.from([0x05, 0x02, 0x00, 0x02])
      : Buffer.from([0x05, 0x01, 0x00])
    socket.write(greeting)

    const methodResp = await Promise.race([reader.readBytes(2), timeoutPromise])
    const ver = methodResp[0]
    const method = methodResp[1]

    if (ver !== 0x05) {
      const err = new Error(`Non-SOCKS5 response from proxy (first byte=0x${ver.toString(16)})`)
      err.notSocks5 = true
      throw err
    }
    if (method === 0xff) {
      throw new Error('SOCKS5 proxy rejected all authentication methods')
    }
    if (method === 0x02) {
      const uBuf = Buffer.from(String(proxy.username || ''), 'utf8')
      const pBuf = Buffer.from(String(proxy.password || ''), 'utf8')
      if (uBuf.length > 255 || pBuf.length > 255) {
        throw new Error('SOCKS5 username or password exceeds 255 bytes')
      }
      const authReq = Buffer.concat([
        Buffer.from([0x01, uBuf.length]),
        uBuf,
        Buffer.from([pBuf.length]),
        pBuf
      ])
      socket.write(authReq)
      const authResp = await Promise.race([reader.readBytes(2), timeoutPromise])
      if (authResp[1] !== 0x00) {
        throw new Error(`SOCKS5 authentication failed (status=0x${authResp[1].toString(16)})`)
      }
    } else if (method !== 0x00) {
      throw new Error(`Unsupported SOCKS5 auth method: 0x${method.toString(16)}`)
    }

    // Build SOCKS5 CONNECT packet
    let addrPart
    const ipType = net.isIP(destHost)
    if (ipType === 4) {
      const octets = destHost.split('.').map(n => Number(n) & 0xff)
      addrPart = Buffer.from([0x01, ...octets])
    } else {
      const hostBuf = Buffer.from(String(destHost), 'utf8')
      addrPart = Buffer.concat([Buffer.from([0x03, hostBuf.length]), hostBuf])
    }
    const portBuf = Buffer.alloc(2)
    portBuf.writeUInt16BE(Number(destPort), 0)
    const connectReq = Buffer.concat([Buffer.from([0x05, 0x01, 0x00]), addrPart, portBuf])
    socket.write(connectReq)

    const head = await Promise.race([reader.readBytes(4), timeoutPromise])
    if (head[0] !== 0x05) {
      throw new Error(`Invalid SOCKS5 CONNECT reply version: 0x${head[0].toString(16)}`)
    }
    if (head[1] !== 0x00) {
      const reason = SOCKS5_ERRORS[head[1]] || `code 0x${head[1].toString(16)}`
      throw new Error(`SOCKS5 CONNECT rejected (${reason})`)
    }
    const atyp = head[3]
    if (atyp === 0x01) {
      await Promise.race([reader.readBytes(4 + 2), timeoutPromise])
    } else if (atyp === 0x04) {
      await Promise.race([reader.readBytes(16 + 2), timeoutPromise])
    } else if (atyp === 0x03) {
      const lenBuf = await Promise.race([reader.readBytes(1), timeoutPromise])
      await Promise.race([reader.readBytes(lenBuf[0] + 2), timeoutPromise])
    } else {
      throw new Error(`Unknown SOCKS5 address type in reply: 0x${atyp.toString(16)}`)
    }

    reader.detach()
    socket.setKeepAlive(true, 15000)
    return socket
  } catch (err) {
    try { socket.destroy() } catch {}
    throw err
  } finally {
    if (timer) clearTimeout(timer)
  }
}

async function connectHttpTunnel (proxy, destHost, destPort, timeoutMs = 15000) {
  const socket = new net.Socket()
  socket.setNoDelay(true)

  let timer = null
  const timeoutPromise = new Promise((_, reject) => {
    timer = setTimeout(() => {
      try { socket.destroy() } catch {}
      reject(new Error(`HTTP proxy timeout (${proxy.host}:${proxy.port} -> ${destHost}:${destPort})`))
    }, timeoutMs)
  })

  try {
    await Promise.race([
      new Promise((resolve, reject) => {
        socket.once('connect', resolve)
        socket.once('error', reject)
        socket.connect(proxy.port, proxy.host)
      }),
      timeoutPromise
    ])

    const reader = createLineReader(socket)
    const target = `${destHost}:${destPort}`
    const headers = [
      `CONNECT ${target} HTTP/1.1`,
      `Host: ${target}`,
      'Proxy-Connection: keep-alive',
      'Connection: keep-alive'
    ]
    if (proxy.username) {
      const token = Buffer.from(`${proxy.username}:${proxy.password || ''}`, 'utf8').toString('base64')
      headers.push(`Proxy-Authorization: Basic ${token}`)
    }
    headers.push('', '')
    socket.write(headers.join('\r\n'))

    const rawHeader = await Promise.race([reader.readUntil('\r\n\r\n'), timeoutMs ? timeoutPromise : null].filter(Boolean))
    const headerText = rawHeader.toString('utf8')
    const firstLine = (headerText.split(/\r?\n/)[0] || '').trim()
    const match = firstLine.match(/^HTTP\/\d\.\d\s+(\d{3})\b/i)
    if (!match) {
      const err = new Error(`Invalid HTTP CONNECT response from proxy: ${firstLine.slice(0, 80)}`)
      err.notHttp = true
      throw err
    }
    const statusCode = Number(match[1])
    if (statusCode === 407) {
      throw new Error('HTTP proxy authentication failed (407 Proxy Authentication Required)')
    }
    if (statusCode !== 200) {
      throw new Error(`HTTP proxy CONNECT rejected (${firstLine})`)
    }

    reader.detach()
    socket.setKeepAlive(true, 15000)
    return socket
  } catch (err) {
    try { socket.destroy() } catch {}
    throw err
  } finally {
    if (timer) clearTimeout(timer)
  }
}

async function connectThroughProxy (proxyInput, destHost, destPort, timeoutMs = 15000) {
  const proxy = typeof proxyInput === 'string' ? parseProxy(proxyInput) : proxyInput
  if (!proxy) throw new Error('Invalid proxy configuration')

  const cacheKey = `${proxy.host}:${proxy.port}`
  const mode = proxy.type === 'auto' ? (detectedProtocolCache.get(cacheKey) || 'auto') : proxy.type

  if (mode === 'socks5') {
    return connectSocks5(proxy, destHost, destPort, timeoutMs)
  }
  if (mode === 'http') {
    return connectHttpTunnel(proxy, destHost, destPort, timeoutMs)
  }

  // mode === 'auto': try SOCKS5 first, fallback to HTTP CONNECT
  try {
    const sock = await connectSocks5(proxy, destHost, destPort, timeoutMs)
    detectedProtocolCache.set(cacheKey, 'socks5')
    return sock
  } catch (socksErr) {
    try {
      const httpSock = await connectHttpTunnel(proxy, destHost, destPort, timeoutMs)
      detectedProtocolCache.set(cacheKey, 'http')
      return httpSock
    } catch (httpErr) {
      throw new Error(`Proxy connection failed (${proxy.host}:${proxy.port}) — SOCKS5: ${socksErr.message} | HTTP: ${httpErr.message}`)
    }
  }
}

async function resolveMinecraftSrv (host, port, timeoutMs = 2500) {
  const numPort = Number(port) || 25565
  if (numPort !== 25565 || net.isIP(host) !== 0) {
    return { host, port: numPort }
  }
  try {
    const records = await Promise.race([
      dns.promises.resolveSrv(`_minecraft._tcp.${host}`),
      new Promise((_, reject) => setTimeout(() => reject(new Error('srv timeout')), timeoutMs))
    ])
    if (Array.isArray(records) && records.length > 0 && records[0].name && records[0].port) {
      return {
        host: String(records[0].name).replace(/\.$/, ''),
        port: Number(records[0].port) || numPort
      }
    }
  } catch {}
  return { host, port: numPort }
}

class ProxyHttpsAgent extends https.Agent {
  constructor (proxy, agentOptions = {}) {
    super({ keepAlive: false, ...agentOptions })
    this.proxy = typeof proxy === 'string' ? parseProxy(proxy) : proxy
  }

  createConnection (options, callback) {
    const targetHost = options.hostname || options.host || 'localhost'
    const targetPort = Number(options.port) || 443
    connectThroughProxy(this.proxy, targetHost, targetPort, Number(options.timeout) || 15000)
      .then(rawSocket => {
        const tlsSocket = tls.connect({
          socket: rawSocket,
          servername: options.servername || targetHost,
          rejectUnauthorized: options.rejectUnauthorized !== false
        })
        callback(null, tlsSocket)
      })
      .catch(err => callback(err))
  }
}

function createMineflayerProxyOptions (proxyInput, serverHost, serverPort, logger = null) {
  const proxy = typeof proxyInput === 'string' ? parseProxy(proxyInput) : proxyInput
  if (!proxy) return {}

  const agent = new ProxyHttpsAgent(proxy)
  let loggedOnce = false

  return {
    agent,
    connect: (client) => {
      ;(async () => {
        const resolved = await resolveMinecraftSrv(serverHost, serverPort)
        if (!loggedOnce && logger) {
          loggedOnce = true
          logger.info(`proxy: tunneling through ${proxy.type.toUpperCase()} ${proxy.raw} -> ${resolved.host}:${resolved.port}`)
        }
        const socket = await connectThroughProxy(proxy, resolved.host, resolved.port, 20000)
        client.setSocket(socket)
        client.emit('connect')
      })().catch(err => {
        if (logger) logger.warn(`proxy connect failed (${proxy.raw}): ${err.message}`)
        try { client.emit('error', err) } catch {}
      })
    }
  }
}

/**
 * Performs an HTTPS GET request through the proxy (or direct if proxy is null).
 */
function httpsGetJsonViaProxy (urlStr, headers = {}, proxyInput = null, timeoutMs = 12000) {
  const proxy = typeof proxyInput === 'string' ? parseProxy(proxyInput) : proxyInput
  const url = new URL(urlStr)
  const agent = proxy ? new ProxyHttpsAgent(proxy) : undefined

  return new Promise((resolve, reject) => {
    const req = https.request({
      protocol: url.protocol,
      hostname: url.hostname,
      port: url.port || 443,
      path: url.pathname + url.search,
      method: 'GET',
      headers: {
        'User-Agent': 'MinecraftHumanBuilder/1.23',
        ...headers
      },
      agent,
      timeout: timeoutMs
    }, res => {
      const chunks = []
      res.on('data', c => chunks.push(c))
      res.on('end', () => {
        const text = Buffer.concat(chunks).toString('utf8')
        let body = null
        try { body = JSON.parse(text) } catch { body = text }
        resolve({ status: res.statusCode || 0, body, text })
      })
    })
    req.on('timeout', () => {
      req.destroy(new Error('Request timed out'))
    })
    req.on('error', reject)
    req.end()
  })
}

async function testProxyConnection (proxyInput, proxyType = 'auto', targetHost = '', targetPort = 25565) {
  const proxy = parseProxy(proxyInput, proxyType)
  if (!proxy) throw new Error('Invalid proxy format. Expected host:port:username:password (e.g. pg.stealthtunnel.net:6060:user:pass)')

  const t0 = Date.now()
  let exitIp = null
  let protocolUsed = proxy.type

  // 1) Try fetching external exit IP over HTTPS through the proxy
  try {
    const res = await httpsGetJsonViaProxy('https://api.ipify.org?format=json', {}, proxy, 10000)
    if (res.status === 200 && res.body?.ip) {
      exitIp = res.body.ip
    }
  } catch {}

  // 2) If a Minecraft server target is specified (or exitIp check failed), verify raw TCP tunnel
  const checkHost = targetHost ? String(targetHost).trim() : 'api.minecraftservices.com'
  const checkPort = targetHost ? (Number(targetPort) || 25565) : 443
  const resolved = targetHost ? await resolveMinecraftSrv(checkHost, checkPort) : { host: checkHost, port: checkPort }

  const sock = await connectThroughProxy(proxy, resolved.host, resolved.port, 12000)
  try { sock.destroy() } catch {}

  const cacheKey = `${proxy.host}:${proxy.port}`
  protocolUsed = detectedProtocolCache.get(cacheKey) || proxy.type
  const latencyMs = Date.now() - t0

  return {
    ok: true,
    proxy: proxy.raw,
    protocol: String(protocolUsed).toUpperCase(),
    exitIp: exitIp || 'verified TCP tunnel',
    target: `${resolved.host}:${resolved.port}`,
    latencyMs
  }
}

module.exports = {
  parseProxy,
  normalizeProxyType,
  resolveEffectiveProxy,
  connectSocks5,
  connectHttpTunnel,
  connectThroughProxy,
  createMineflayerProxyOptions,
  httpsGetJsonViaProxy,
  testProxyConnection,
  ProxyHttpsAgent
}
