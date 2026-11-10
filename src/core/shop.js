'use strict'
// Real-server (DonutSMP) Shop & Auction House (/ah) engine:
// 1. /ah <tool>: opens "Auction (Page 1)", picks the best/cheapest tool in slots 0..44 (ignoring bottom bar 45..53),
//    clicks it -> "Confirm Purchase" window -> clicks slot 15 (lime_stained_glass_pane) -> waits for tool delivery.
// 2. /shop: opens "Quick Buy", scans only Quick Buy slots 0..44 (never bottom bar 45..53 where hopper/obsidian/anvil/sign/chest live).
//    If the item is not in Quick Buy yet, clicks an "Empty" slot in 0..44 -> "Orders -> Select Item" -> clicks Search sign (slot 50)
//    -> types item search on Sign 1 -> clicks matching item in slots 0..44 -> types stack amount (64 or 1) on Sign 2
//    -> returns to "Quick Buy" and left-clicks the item slot to instant-buy!
const { sleep } = require('../util/async')
const { Vec3 } = require('../util/vec3')

class ShopError extends Error {
  constructor (code, message) { super(message); this.code = code }
}

const rand = (a, b) => a + Math.random() * (b - a)
const range = (v, dflt) => (Array.isArray(v) && v.length === 2 ? v : dflt)
const pause = (v, dflt) => sleep(Math.round(rand(...range(v, dflt))))

// "§aCobblestone" / {"text":"Cobblestone"} / nested chat components -> plain lower-case text
function flattenText (value) {
  if (value == null) return ''
  let raw = typeof value === 'string' ? value : ''
  if (!raw) { try { raw = JSON.stringify(value) } catch { raw = String(value) } }
  const parts = []
  raw.replace(/"(?:text|translate)"\s*:\s*"((?:[^"\\]|\\.)*)"/g, (_, t) => { parts.push(t); return '' })
  const text = parts.length ? parts.join('') : raw
  return text.replace(/§./g, '').replace(/\\u00a7./gi, '').toLowerCase()
}

function itemText (item) {
  if (!item) return ''
  const bits = [item.name, item.displayName]
  try { bits.push(item.customName) } catch {}
  try { bits.push(item.customLore) } catch {}
  try { if (item.nbt) bits.push(JSON.stringify(item.nbt)) } catch {}
  return bits.map(flattenText).filter(Boolean).join(' | ')
}

function windowTitle (win) {
  if (!win) return ''
  return flattenText(win.title || win.windowTitle || '')
}

function containerSlots (win, { excludeBottomRow = false } = {}) {
  const rawEnd = Number.isInteger(win?.inventoryStart) ? win.inventoryStart : Math.max(0, (win?.slots?.length || 0) - 36)
  // In 6-row (54-slot) DonutSMP menus ("Quick Buy", "Orders -> Select Item", "Auction (Page 1)"),
  // slots 45..53 are the bottom navigation/filter bar (hopper, obsidian, anvil, oak_sign, chest, cauldron, arrow).
  const end = (excludeBottomRow && rawEnd >= 54) ? rawEnd - 9 : rawEnd
  return { start: 0, end, rawEnd }
}

function findSlot (win, test, opts = {}) {
  const { start, end } = containerSlots(win, opts)
  for (let i = start; i < end; i++) {
    const item = win.slots[i]
    if (item && test(item, itemText(item), i)) return i
  }
  return -1
}

function isEmptyQuickBuySlot (item, text) {
  if (!item) return false
  if (/\bempty\b|click to choose/i.test(text)) return true
  return /stained_glass_pane$/.test(item.name || '') && !/cancel|confirm|back|next|previous|filter|search|auction/i.test(text)
}

function itemMatcher (itemName, spec = {}) {
  if (spec.match) {
    const re = new RegExp(spec.match, 'i')
    return (item, text) => !isEmptyQuickBuySlot(item, text) && re.test(text)
  }
  return (item, text) => {
    if (!item || isEmptyQuickBuySlot(item, text)) return false
    if (/click to view|filter|search order|sort|next page|previous page/i.test(text) && item.name !== itemName) return false
    return item.name === itemName
  }
}

function textMatcher (pattern) {
  const re = new RegExp(pattern, 'i')
  return (item, text) => re.test(text)
}

// Parse "$ 9.9K", "$ 500", "$1.2M" from auction/shop lore
function parseLorePrice (text) {
  const m = String(text || '').match(/\$\s*([0-9]+(?:\.[0-9]+)?)\s*([kmb])?/i)
  if (!m) return Infinity
  let val = Number(m[1])
  if (!Number.isFinite(val)) return Infinity
  const unit = (m[2] || '').toLowerCase()
  if (unit === 'k') val *= 1e3
  else if (unit === 'm') val *= 1e6
  else if (unit === 'b') val *= 1e9
  return val
}

// Build a clean <=15 char search string for the Minecraft Sign Editor ("Search Order Items")
function buildSignSearchQuery (itemName, displayName, customSearch) {
  if (customSearch) return String(customSearch).slice(0, 15).trim()
  const rawId = String(itemName || '').replace(/^minecraft:/, '').toLowerCase()
  const spaced = rawId.replace(/_/g, ' ')
  if (spaced.length <= 15) return spaced
  if (rawId.length <= 15) return rawId
  const disp = String(displayName || '').toLowerCase().trim()
  if (disp && disp.length <= 15) return disp
  return spaced.slice(0, 15).trim()
}

class Shop {
  constructor (bot, config, logger) {
    this.bot = bot
    this.config = config
    this.logger = logger
    this.chain = Promise.resolve()
    this.lastCommandAt = 0
    this.notSold = new Map()
    this.perClick = new Map()
    this.recent = []
    this.lastSignLines = null
    this.stats = { visits: 0, clicks: 0, items: 0, failures: 0, ahPurchases: 0, signs: 0 }
    this.onEvent = null
    bot.on('messagestr', message => {
      const msg = String(message).slice(0, 200)
      this.recent.push({ at: Date.now(), message: msg })
      while (this.recent.length > 20) this.recent.shift()
    })
    try {
      bot._client?.on?.('tile_entity_data', pkt => {
        try {
          const raw = JSON.stringify(pkt?.nbtData || {})
          const matches = [...raw.matchAll(/"value"\s*:\s*"((?:[^"\\]|\\.)*)"/g)].map(m => m[1])
          if (matches.length >= 2) this.lastSignLines = matches.slice(0, 4)
        } catch {}
      })
    } catch {}
  }

  emitStep (step, detail = {}) {
    if (typeof this.onEvent === 'function') {
      try { this.onEvent({ at: new Date().toISOString(), step, ...detail }) } catch {}
    }
  }

  get cfg () { return this.config.shop || {} }

  count (itemName) {
    const b = this.bot
    let n = b.inventory?.items?.().filter(i => i.name === itemName).reduce((s, i) => s + i.count, 0) || 0
    const win = b.currentWindow
    if (win?.slots) {
      const from = Number.isInteger(win.inventoryStart) ? win.inventoryStart : Math.max(0, win.slots.length - 36)
      let m = 0
      for (let i = from; i < win.slots.length; i++) if (win.slots[i]?.name === itemName) m += win.slots[i].count
      n = Math.max(n, m)
    }
    return n
  }

  countToolKind (kind) {
    const suffix = `_${kind}`
    const b = this.bot
    let n = b.inventory?.items?.().filter(i => i?.name?.endsWith(suffix)).reduce((s, i) => s + i.count, 0) || 0
    const win = b.currentWindow
    if (win?.slots) {
      const from = Number.isInteger(win.inventoryStart) ? win.inventoryStart : Math.max(0, win.slots.length - 36)
      let m = 0
      for (let i = from; i < win.slots.length; i++) if (win.slots[i]?.name?.endsWith(suffix)) m += win.slots[i].count
      n = Math.max(n, m)
    }
    return n
  }

  // no empty slot and no stack of this item with room left
  inventoryFull (itemName) {
    const inv = this.bot.inventory
    if (!inv?.emptySlotCount || inv.emptySlotCount() > 0) return false
    const max = this.bot.registry?.itemsByName?.[itemName]?.stackSize || 64
    return !inv.items().some(i => i.name === itemName && i.count < max)
  }

  serverReply (sinceMs = 4500) {
    const cutoff = Date.now() - sinceMs
    return this.recent.filter(r => r.at >= cutoff).map(r => r.message).join(' / ')
  }

  // ---- AUCTION HOUSE (/ah <query>) TOOL PURCHASE (as shown in video 00:00 - 00:06) ----
  buyFromAh (queryOrItem, options = {}) {
    const run = this.chain.then(() => this._buyFromAh(queryOrItem, options))
    this.chain = run.catch(() => {})
    return run
  }

  async _buyFromAh (queryOrItem, options = {}) {
    const bot = this.bot
    if (!bot.entity || bot.health <= 0) throw new ShopError('NO_BOT', 'bot is not in the world')
    const raw = String(queryOrItem || 'pickaxe').toLowerCase().trim()
    const toolKind = ['pickaxe', 'axe', 'shovel', 'hoe', 'sword', 'shears'].find(k => raw === k || raw.endsWith(`_${k}`)) || null
    const ahSearch = options.search || (toolKind || raw.replace(/_/g, ' '))
    const beforeCount = toolKind ? this.countToolKind(toolKind) : this.count(raw)

    const wait = this.lastCommandAt + Number(this.cfg.commandCooldownMs || 4500) - Date.now()
    if (wait > 0) await sleep(wait + rand(0, 400))
    if (bot.currentWindow) { try { bot.closeWindow(bot.currentWindow) } catch {} await sleep(250) }

    const cmd = `/ah ${ahSearch}`
    this.emitStep('AH_COMMAND', { command: cmd, toolKind, beforeCount })
    this.logger.info(`ah: sending "${cmd}" to buy ${toolKind || raw}`)

    const opened = new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        bot.removeListener('windowOpen', on)
        reject(new ShopError('NO_AH_WINDOW', `no Auction window opened after "${cmd}"${this.serverReply(6000) ? ` (server: ${this.serverReply(6000)})` : ''}`))
      }, Number(this.cfg.openTimeoutMs || 7500))
      const on = w => { clearTimeout(timer); resolve(w) }
      bot.once('windowOpen', on)
    })
    opened.catch(() => {})
    this.lastCommandAt = Date.now()
    bot.chat(cmd)

    let win = null
    try {
      win = await opened
      await this.waitFilled(win)
      await pause(this.cfg.afterOpenDelayMs, [450, 900])

      const { start, end } = containerSlots(win, { excludeBottomRow: true })
      const candidates = []
      for (let i = start; i < end; i++) {
        const it = win.slots[i]
        if (!it) continue
        const txt = itemText(it)
        const matchesKind = toolKind
          ? (it.name === toolKind || it.name?.endsWith(`_${toolKind}`))
          : (it.name === raw || txt.includes(raw))
        if (!matchesKind) continue
        const price = parseLorePrice(txt)
        candidates.push({ slot: i, item: it, name: it.name, price, text: txt })
      }

      if (!candidates.length) {
        throw new ShopError('AH_EMPTY', `no matching "${toolKind || raw}" found in ${windowTitle(win) || 'Auction'} slots ${start}..${end - 1}`)
      }

      // Auction (Page 1) is already sorted on DonutSMP (slot 0 is first, e.g. Stone Pickaxe $9.9K in video at 00:03),
      // sort by lowest parsed price first, breaking ties by earliest slot index (slot 0).
      candidates.sort((a, b) => (a.price - b.price) || (a.slot - b.slot))

      let lastErr = null
      for (const cand of candidates.slice(0, 4)) {
        this.emitStep('AH_CLICK_LISTING', { slot: cand.slot, item: cand.name, price: Number.isFinite(cand.price) ? cand.price : 'unknown', title: windowTitle(win) })
        this.logger.info(`ah: clicking slot ${cand.slot} (${cand.name}${Number.isFinite(cand.price) ? ` ~$${cand.price}` : ''})`)
        await bot.clickWindow(cand.slot, 0, 0)
        this.stats.clicks++

        const confirmWin = await this.nextWindow(win, 5000)
        if (!confirmWin) {
          lastErr = 'Confirm Purchase window did not open'
          continue
        }
        await pause([350, 750], [350, 750])

        // In video at 00:05, "Confirm Purchase" is a 27-slot window:
        // slot 11 = red_stained_glass_pane, slot 13 = item, slot 15 = lime_stained_glass_pane (Confirm)
        let confirmSlot = -1
        if (confirmWin.slots?.[15] && /lime|green|emerald/i.test(confirmWin.slots[15].name || '')) {
          confirmSlot = 15
        } else {
          confirmSlot = findSlot(confirmWin, (it, txt, idx) => {
            if (idx === 13) return false
            if (/lime_stained_glass_pane|green_stained_glass_pane|lime_terracotta|green_terracotta|emerald_block/.test(it.name || '')) return true
            return /\b(confirm|accept|buy|yes)\b/i.test(txt) && !/cancel|deny|no/i.test(txt)
          })
        }
        if (confirmSlot < 0) {
          lastErr = `Confirm button not found in "${windowTitle(confirmWin)}"`
          continue
        }

        this.emitStep('AH_CONFIRM_PURCHASE', { confirmSlot, item: cand.name, confirmItem: confirmWin.slots[confirmSlot]?.name, title: windowTitle(confirmWin) })
        await bot.clickWindow(confirmSlot, 0, 0)
        this.stats.clicks++

        const t0 = Date.now()
        let delivered = false
        while (Date.now() - t0 < 4000) {
          const nowCount = toolKind ? this.countToolKind(toolKind) : this.count(raw)
          const chat = this.serverReply(3500)
          if (nowCount > beforeCount || /you bought/i.test(chat)) {
            delivered = true
            break
          }
          await sleep(80)
        }

        if (delivered) {
          this.stats.ahPurchases++
          this.stats.items++
          const reply = this.serverReply(4000)
          this.emitStep('AH_PURCHASE_SUCCESS', { item: cand.name, slot: cand.slot, serverReply: reply })
          this.logger.info(`ah: bought ${cand.name} from /ah (${reply || 'delivered to inventory'})`)
          return { ok: true, item: cand.name, slot: cand.slot, price: cand.price, serverReply: reply }
        }
        lastErr = `clicked Confirm on ${cand.name} (slot ${cand.slot}) but item did not arrive (${this.serverReply(4000) || 'no chat reply'})`
      }
      throw new ShopError('AH_NO_DELIVERY', lastErr || `could not buy ${toolKind || raw} from /ah`)
    } finally {
      await this.closeShop(win)
    }
  }

  // one purchase at a time per bot; returns how many items arrived
  buy (itemName, wanted) {
    const run = this.chain.then(() => this._buy(itemName, wanted))
    this.chain = run.catch(() => {})
    return run
  }

  async _buy (itemName, wanted) {
    const bot = this.bot
    if (this.cfg.enabled === false) throw new ShopError('DISABLED', `shop is disabled, cannot get ${itemName}`)
    // Tools (_pickaxe, _axe, _shovel, _hoe, _sword, shears) are bought from /ah on DonutSMP (as shown in video 00:00-00:06)!
    if (/_(pickaxe|axe|shovel|hoe|sword)$|^shears$/.test(itemName)) {
      const res = await this._buyFromAh(itemName)
      return res?.ok ? 1 : 0
    }
    const until = this.notSold.get(itemName)
    if (until && until > Date.now()) throw new ShopError('NOT_SOLD', `${itemName} was not found in the shop recently`)
    if (!bot.entity || bot.health <= 0) throw new ShopError('NO_BOT', 'bot is not in the world')

    const spec = (this.cfg.items && this.cfg.items[itemName]) || {}
    const before = this.count(itemName)
    const target = before + Math.max(1, Math.floor(wanted || 1))
    let win = null
    try {
      win = await this.openShop()
      this.emitStep('SHOP_OPENED', { itemName, wanted, title: windowTitle(win) })
      await pause(this.cfg.afterOpenDelayMs, [450, 950])
      for (const step of spec.path || []) {
        const slot = findSlot(win, textMatcher(step))
        if (slot < 0) throw new ShopError('NO_PATH', `menu entry "${step}" not found while looking for ${itemName}`)
        win = await this.clickAndSettle(win, slot)
        await pause(this.cfg.clickDelayMs, [450, 950])
      }
      let slot = await this.locate(win, itemName, spec)
      if (slot.index < 0 && this.cfg.autoAdd !== false) {
        try {
          win = await this.addToQuickBuy(slot.win || win, itemName, spec)
          slot = await this.locate(win, itemName, spec)
        } catch (e) {
          if (e.code !== 'NO_EMPTY_SLOT') throw e
          this.logger.warn(`shop: ${e.message}`)
        }
      }
      if (slot.index < 0) {
        this.notSold.set(itemName, Date.now() + Number(this.cfg.notSoldRetryMs || 600000))
        throw new ShopError('NOT_FOUND', `${itemName} is not in the Quick Buy shop menu`)
      }
      win = slot.win
      let clicks = 0
      const maxClicks = Math.max(1, Number(this.cfg.maxClicksPerVisit || 36))
      while (this.count(itemName) < target && clicks < maxClicks) {
        if (this.inventoryFull(itemName)) throw new ShopError('INVENTORY_FULL', 'inventory is full')
        const had = this.count(itemName)
        const idx = findSlot(win, itemMatcher(itemName, spec), { excludeBottomRow: true })
        if (idx < 0) throw new ShopError('MENU_CHANGED', `${itemName} disappeared from the Quick Buy menu`)
        this.emitStep('SHOP_INSTANT_BUY_CLICK', { itemName, slot: idx, countInSlot: win.slots[idx]?.count || 1 })
        await bot.clickWindow(idx, 0, 0) // one plain left click in Quick Buy = instant buy!
        clicks++; this.stats.clicks++

        // Wait for item delivery (or if a confirmation sub-window opened, click its green confirm button)
        let got = await this.waitForMoreOrConfirm(itemName, had, win, 3800)
        if (bot.currentWindow && bot.currentWindow !== win) win = bot.currentWindow
        if (!got) {
          const reply = this.serverReply()
          this.stats.failures++
          throw new ShopError('NO_DELIVERY', `clicked ${itemName} (slot ${idx}) in Quick Buy but nothing arrived${reply ? ` (server: ${reply})` : ''}`)
        }
        this.perClick.set(itemName, got - had)
        this.stats.items += got - had
        this.emitStep('SHOP_INSTANT_BUY_DELIVERED', { itemName, added: got - had, totalNow: got, serverReply: this.serverReply(3000) })
        if (this.count(itemName) < target) await pause(this.cfg.clickDelayMs, [400, 900])
      }
    } finally {
      await this.closeShop(win)
    }
    const bought = this.count(itemName) - before
    this.logger.info(`shop: bought ${bought} x ${itemName}`)
    return bought
  }

  async waitForMoreOrConfirm (itemName, had, prevWin, timeoutMs = 3800) {
    const bot = this.bot
    const t0 = Date.now()
    let clickedConfirm = false
    while (Date.now() - t0 < timeoutMs) {
      const now = this.count(itemName)
      if (now > had) return now
      const curWin = bot.currentWindow
      if (!clickedConfirm && curWin && curWin !== prevWin && /confirm/i.test(windowTitle(curWin))) {
        const cSlot = curWin.slots?.[15] && /lime|green|emerald/i.test(curWin.slots[15].name || '')
          ? 15
          : findSlot(curWin, (it, txt, idx) => idx !== 13 && (/lime_stained_glass_pane|green_stained_glass_pane/.test(it.name || '') || /\bconfirm\b/i.test(txt)))
        if (cSlot >= 0) {
          clickedConfirm = true
          await sleep(250)
          await bot.clickWindow(cSlot, 0, 0).catch(() => {})
        }
      }
      await sleep(60)
    }
    return 0
  }

  // ---- adding an item to the Quick Buy menu (Empty slot -> Search sign -> pick item -> Amount sign -> Quick Buy) --------
  expectSign (timeoutMs = 6500) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => { this.bot.removeListener('mhbSign', on); reject(new ShopError('NO_SIGN', 'the sign editor did not open')) }, timeoutMs)
      const on = packet => { clearTimeout(timer); resolve(packet) }
      this.bot.once('mhbSign', on)
    })
  }

  // Answers the sign editor the way the client does when "Done" is pressed (video 00:14-00:20 & 00:23-00:25):
  // line 1 gets the typed query/amount; lines 2..4 preserve the server's prompt lines.
  async typeSign (signPromise, text, defaultHints = ['', '↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑', 'Search Order Items', 'Search']) {
    signPromise.catch(() => {})
    const packet = await signPromise
    await sleep(Math.round(rand(450, 800) + String(text).length * rand(75, 140) + rand(200, 450)))
    let hints = []
    try {
      const block = this.bot.blockAt(new Vec3(packet.location.x, packet.location.y, packet.location.z))
      const t = block?.getSignText?.()
      const front = Array.isArray(t) ? t[0] : t
      if (typeof front === 'string' && front.trim()) hints = front.split('\n')
    } catch {}
    if ((!hints || hints.length < 2) && Array.isArray(this.lastSignLines) && this.lastSignLines.length >= 2) {
      hints = this.lastSignLines
    }
    const line2 = String(hints[1] ?? defaultHints[1] ?? '')
    const line3 = String(hints[2] ?? defaultHints[2] ?? '')
    const line4 = String(hints[3] ?? defaultHints[3] ?? '')
    this.emitStep('SIGN_SUBMIT', { text1: String(text), text2: line2, text3: line3, text4: line4, location: packet.location })
    this.bot._client.write('update_sign', {
      location: packet.location,
      isFrontText: packet.isFrontText !== false,
      text1: String(text),
      text2: line2,
      text3: line3,
      text4: line4
    })
    this.stats.signs = (this.stats.signs || 0) + 1
    await sleep(rand(350, 650))
  }

  // The next menu appears a moment after a click or after the sign editor is confirmed
  async nextWindow (prev, timeoutMs = 6500) {
    const sig = w => (w?.slots || []).map(x => (x ? `${x.name}:${x.count}` : '-')).join(',')
    const before = sig(prev)
    const t0 = Date.now()
    while (Date.now() - t0 < timeoutMs) {
      const w = this.bot.currentWindow
      if (w && w !== prev) { await this.waitFilled(w); return w }
      if (prev && w === prev && sig(prev) !== before) { await sleep(250); return prev }
      await sleep(70)
    }
    return this.bot.currentWindow || null
  }

  async addToQuickBuy (win, itemName, spec = {}) {
    const bot = this.bot
    const info = bot.registry?.itemsByName?.[itemName]
    const stackMax = info?.stackSize || 64
    const amount = Math.max(1, Math.min(stackMax, Number(spec.amount || this.cfg.addAmount || stackMax)))
    const query = buildSignSearchQuery(itemName, info?.displayName, spec.search)

    // Find an "Empty" slot in Quick Buy slots 0..44 (excluding bottom bar 45..53)
    const empty = findSlot(win, (item, text) => isEmptyQuickBuySlot(item, text), { excludeBottomRow: true })
    if (empty < 0) throw new ShopError('NO_EMPTY_SLOT', 'the Quick Buy menu has no Empty slot left in slots 0..44')

    this.emitStep('SHOP_CLICK_EMPTY_SLOT', { emptySlot: empty, itemName, query, amount })
    this.logger.info(`shop: adding ${itemName} (query="${query}", amount=${amount}) to Quick Buy slot ${empty}`)
    await pause(this.cfg.clickDelayMs, [400, 850])
    await bot.clickWindow(empty, 0, 0)

    const sel = await this.nextWindow(win)
    if (!sel || sel === win) throw new ShopError('NO_SELECT_MENU', 'clicking the Empty slot did not open "Orders -> Select Item"')
    await pause(this.cfg.afterOpenDelayMs, [450, 900])

    // In "Orders -> Select Item" (video 00:13), the Search button is the oak_sign at slot 50 in the bottom bar
    let search = findSlot(sel, (item, text) => /sign/.test(item.name) && /search/.test(text))
    if (search < 0) search = findSlot(sel, item => /sign/.test(item.name))
    if (search < 0) throw new ShopError('NO_SEARCH', 'no Search sign button found in "Orders -> Select Item"')

    this.lastSignLines = null
    const sign1 = this.expectSign()
    this.emitStep('SHOP_CLICK_SEARCH_SIGN', { searchSlot: search, query })
    await bot.clickWindow(search, 0, 0)
    await this.typeSign(sign1, query, ['', '↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑', 'Search Order Items', 'Search'])

    const results = await this.nextWindow(sel)
    if (!results) throw new ShopError('NO_RESULTS', `search sign "${query}" did not open results window`)
    await pause(this.cfg.afterOpenDelayMs, [450, 900])

    // Find the exact item in results slots 0..44 (excluding bottom filter bar 45..53 where cauldron/hopper/oak_sign live!)
    const hit = findSlot(results, itemMatcher(itemName, spec), { excludeBottomRow: true })
    if (hit < 0) throw new ShopError('NOT_FOUND', `"${query}" has no ${itemName} in "Orders -> Select Item" results`)

    this.lastSignLines = null
    const sign2 = this.expectSign()
    this.emitStep('SHOP_SELECT_ORDER_ITEM', { hitSlot: hit, itemName, amount })
    await pause(this.cfg.clickDelayMs, [400, 850])
    await bot.clickWindow(hit, 0, 0)
    await this.typeSign(sign2, String(amount), ['', '↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑', 'Amount', ''])

    const back = await this.nextWindow(results, 7000)
    await pause([250, 500], [250, 500])
    this.emitStep('SHOP_ADDED_TO_QUICK_BUY', { itemName, amount, title: windowTitle(back || bot.currentWindow) })
    this.logger.info(`shop: ${itemName} (x${amount}) added to Quick Buy`)
    return back || bot.currentWindow
  }

  async locate (win, itemName, spec) {
    const test = itemMatcher(itemName, spec)
    const pages = Math.max(0, Number(this.cfg.pages ?? 4))
    for (let page = 0; page <= pages; page++) {
      const index = findSlot(win, test, { excludeBottomRow: true })
      if (index >= 0) return { index, win }
      const next = findSlot(win, textMatcher(this.cfg.nextPageMatch || 'next|>>|»|›'))
      if (next < 0) break
      await pause(this.cfg.clickDelayMs, [400, 900])
      win = await this.clickAndSettle(win, next)
      await pause([250, 600], [250, 600])
    }
    return { index: -1, win }
  }

  async openShop () {
    const bot = this.bot
    const wait = this.lastCommandAt + Number(this.cfg.commandCooldownMs || 4500) - Date.now()
    if (wait > 0) await sleep(wait + rand(0, 500))
    if (bot.currentWindow) { try { bot.closeWindow(bot.currentWindow) } catch {} await sleep(250) }
    const opened = new Promise((resolve, reject) => {
      const timer = setTimeout(() => { bot.removeListener('windowOpen', on); reject(new ShopError('NO_WINDOW', `no menu opened after ${this.cfg.command || '/shop'}${this.serverReply(8000) ? ` (server: ${this.serverReply(8000)})` : ''}`)) }, Number(this.cfg.openTimeoutMs || 7500))
      const on = w => { clearTimeout(timer); resolve(w) }
      bot.once('windowOpen', on)
    })
    opened.catch(() => {})
    this.lastCommandAt = Date.now()
    this.stats.visits++
    bot.chat(this.cfg.command || '/shop')
    const win = await opened
    await this.waitFilled(win)
    return win
  }

  // Wait until container slots populate and stabilize across two consecutive checks
  async waitFilled (win) {
    const t0 = Date.now()
    let lastCount = 0
    while (Date.now() - t0 < 3200) {
      const { start, rawEnd } = containerSlots(win)
      let filled = 0
      for (let i = start; i < rawEnd; i++) if (win.slots[i]) filled++
      if (filled > 0 && filled === lastCount) return
      lastCount = filled
      await sleep(90)
    }
  }

  async clickAndSettle (win, slot) {
    const bot = this.bot
    const signature = () => win.slots.map(s => (s ? `${s.name}:${s.count}` : '-')).join(',')
    const first = signature()
    await bot.clickWindow(slot, 0, 0)
    const t0 = Date.now()
    while (Date.now() - t0 < 3000) {
      await sleep(80)
      if (bot.currentWindow && bot.currentWindow !== win) { win = bot.currentWindow; await this.waitFilled(win); return win }
      if (signature() !== first) return win
    }
    return win
  }

  async waitForMore (itemName, had, timeoutMs) {
    const t0 = Date.now()
    while (Date.now() - t0 < timeoutMs) {
      const now = this.count(itemName)
      if (now > had) return now
      await sleep(60)
    }
    return 0
  }

  async closeShop (win) {
    try { await sleep(rand(220, 550)); if (this.bot.currentWindow) this.bot.closeWindow(this.bot.currentWindow) } catch {}
    await sleep(180)
  }
}

module.exports = { Shop, ShopError, flattenText, itemText, findSlot, itemMatcher, textMatcher, parseLorePrice, buildSignSearchQuery }
