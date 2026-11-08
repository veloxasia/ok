'use strict'
// Lightweight Anti-Hover & Physics Watchdog Engine.
// Ensures physics (`bot.physicsEnabled === true`) and anti-hover gravity (releasing sneak when a block under the bot's
// feet is broken so the bot falls onto solid ground immediately) run continuously without stealing CPU from
// pathfinding, edge-sliding, or block placement or serving stale candidate caches after block updates.

const { Vec3 } = require('../util/vec3')
const { isAirLike, feetCellOf, supportUnder } = require('../world/ground')

class LookaheadEngine {
  constructor ({ bot, world, config, logger, planner, placer, aim, nav, ground, getPlanner, getPlacer, getNavigation, getGround }) {
    this.bot = bot
    this.world = world
    this.config = config
    this.logger = logger
    this.getPlanner = getPlanner || (() => planner)
    this.getPlacer = getPlacer || (() => placer)
    this.getNavigation = getNavigation || (() => nav)
    this.getGround = getGround || (() => ground)
    this.aim = aim
    this.running = false
    this.timer = null
    this.busy = false
    this.candCache = new Map()
    this.stats = { prewarmedTasks: 0, prewarmedRoutes: 0, prewarmedSupport: 0, cacheHits: 0, unhovered: 0 }
    this._airHoverSince = 0
  }

  start () {
    if (this.running) return
    this.running = true
    this.timer = setInterval(() => {
      this.tick().catch(() => {})
    }, 180)
    this.timer.unref?.()
  }

  stop () {
    this.running = false
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
    this.candCache.clear()
  }

  cacheKey (target, specTag, botCellKey) {
    return `${target.x},${target.y},${target.z}|${specTag || 'free'}|${botCellKey}`
  }

  getCachedCandidates () {
    return null
  }

  // Ensures the bot never hangs in mid-air if the block beneath its feet is broken or if physics was disabled
  checkPhysicsAndHover () {
    const bot = this.bot
    if (!bot?.entity?.position) return
    if (bot.physicsEnabled === false) {
      bot.physicsEnabled = true
    }
    const e = bot.entity
    const placer = this.getPlacer?.()
    if (placer?.scaffold?._sliding || placer?._inPrecision) {
      this._airHoverSince = 0
      return
    }
    const fc = feetCellOf(this.world, e.position)
    const under = this.world.blockAt(new Vec3(fc.x, fc.y - 1, fc.z))
    const here = this.world.blockAt(new Vec3(fc.x, fc.y, fc.z))
    const activeEdgeAim = Boolean(placer?.scaffold?._sliding) || ['edge slide', 'aiming', 'placing', 'click + server answer'].includes(placer?.phase || '')
    const sup = supportUnder(this.world, e.position, 0.16)
    const floatingOverAir = !activeEdgeAim && !sup.supported && !e.isInWater && !e.isInLava && isAirLike(under) && isAirLike(here) && Math.abs(e.velocity?.y ?? 0) < 0.05
    if (floatingOverAir) {
      if (!this._airHoverSince) this._airHoverSince = Date.now()
      else if (Date.now() - this._airHoverSince >= 350) {
        if (bot.getControlState?.('sneak')) {
          if (placer) placer._chestSneak = false
          bot.setControlState('sneak', false)
        }
        e.onGround = false
        if (e.velocity && e.velocity.y >= -0.02) e.velocity.y = -0.08
        this.stats.unhovered++
      }
    } else {
      this._airHoverSince = 0
    }
  }

  async tick () {
    if (!this.running || this.busy || !this.bot?.entity?.position) return
    this.checkPhysicsAndHover()
  }
}

module.exports = { LookaheadEngine }
