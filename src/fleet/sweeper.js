'use strict'
// Dedicated 5th Bot Janitor / Sweeper Engine with Full Builder-Brain & Raycast Digging.
// When a fleet has a designated sweeper bot (by default the last worker `index === count - 1` when `count >= 5`,
// or any worker with `account.role === 'sweeper'` / `config.fleet.sweeperIndex === index`), that bot runs a
// full-time intelligent real-time cleanup loop:
//   - Receives real-time temporary block placements (`temp-add` / `temp-rm`) from all builder bots over Fleet IPC,
//   - Actively scans both around all bots AND across the full schematic bounding box (`scanWorldForTempBlocks`)
//     so no temporary stone block inside a 3x3 TNT drop tube, duper bay, or lower layer is ever missed,
//   - Uses the full Builder Brain (`placer.brain.prepare`, `placer.aim` raycast, `nav.goTo` with `rescue: true`,
//     and raycast blocker clearing) to walk, climb, step, or pearl to any temporary block and dig it immediately!

const { Vec3 } = require('../util/vec3')
const { sleep } = require('../util/async')
const { isAirLike, isBodyFree, isFullTop } = require('../world/ground')
const { taskMatches, FACE_INDEX } = require('../rules/blocks')

const FREE = {
  faces: ['up', 'down', 'north', 'south', 'east', 'west'].map(f => ({ f })),
  look: null,
  horiz: null,
  tag: 'free'
}

function isSweeperWorker (fleetOrIndex, countOrConfig, maybeConfig) {
  const fleet = (typeof fleetOrIndex === 'number')
    ? { index: fleetOrIndex, count: Number(countOrConfig) || 1 }
    : fleetOrIndex
  const config = (typeof fleetOrIndex === 'number') ? maybeConfig : countOrConfig
  if (!fleet || fleet.count <= 1) return false
  const accounts = Array.isArray(config?.accounts) ? config.accounts : []
  const acc = config?.account || accounts[fleet.index] || null
  const explicitRole = String(acc?.role || 'auto').toLowerCase()
  if (explicitRole === 'sweeper') return true
  if (explicitRole === 'builder') return false
  if (accounts.some(a => String(a?.role || '').toLowerCase() === 'sweeper')) {
    return false
  }
  const explicitIdx = config?.fleet?.sweeperIndex
  if (Number.isInteger(explicitIdx) && explicitIdx >= 0 && explicitIdx < fleet.count) {
    return fleet.index === explicitIdx
  }
  if (config?.fleet?.enableSweeperBot === false || config?.building?.enableSweeperBot === false) return false
  return fleet.count >= 5 && fleet.index === fleet.count - 1
}

function builderWorkerIndices (count, config) {
  const n = Math.max(1, Number(count) || 1)
  const all = Array.from({ length: n }, (_, i) => i)
  if (n <= 1) return all
  const builders = all.filter(i => !isSweeperWorker({ index: i, count: n }, config))
  return builders.length > 0 ? builders : all
}

class SweeperEngine {
  constructor ({ builder, bot, world, config, logger, fleet, coord, planner, placer, scaffold, survival, nav, exit, look, interaction }) {
    this.builder = builder
    this.bot = bot
    this.world = world
    this.config = config
    this.logger = logger
    this.fleet = fleet || (coord ? { id: bot?.username || 'sweeper', coord } : null)
    this.planner = planner
    this.placer = placer
    this.scaffold = scaffold || { created: new Map(), getCreated () { return [...this.created.values()] }, contains (c) { return this.created.has(`${c.x},${c.y},${c.z}`) } }
    this.survival = survival
    this.nav = nav
    this.exit = exit
    this.look = look
    this.interaction = interaction
    this.unreachable = new Map()
    this.failCounts = new Map()
    this.stats = { swept: 0, pearls: 0, scans: 0 }
    this._lastWorldScanAt = 0
    this._lastFullScanAt = 0
    this._scanSliceY = null
  }

  isCriticalObstruction (p) {
    const k = `${p.x},${p.y},${p.z}`
    if (this.planner?.fluidCells?.has?.(k)) return true
    if (p.isLookUpLedge) return true
    const t = this.planner?.tasks?.get?.(k)
    if (t && t.status !== 'completed') return true
    if (this.planner?.tasks) {
      for (const [dx, dy, dz] of [[1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1], [0, -1, 0], [0, 1, 0]]) {
        const nt = this.planner.tasks.get(`${p.x + dx},${p.y + dy},${p.z + dz}`)
        if (nt && nt.status !== 'completed' && /^(tnt|piston|sticky_piston|slime_block|redstone_torch|redstone_wall_torch)$/.test(nt.name || '')) {
          return true
        }
      }
    }
    return false
  }

  targetPriority (p, botPos) {
    const k = `${p.x},${p.y},${p.z}`
    const obstructsFluid = this.planner?.fluidCells?.has?.(k) ? -260 : 0
    const isLedge = p.isLookUpLedge ? -240 : 0
    const t = this.planner?.tasks?.get?.(k)
    const obstructsTask = (t && t.status !== 'completed') ? -220 : 0
    const criticalAdj = this.isCriticalObstruction(p) ? -160 : 0
    let horizTemp = 0
    for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      if (this.scaffold.created.has(`${p.x + dx},${p.y},${p.z + dz}`)) horizTemp++
    }
    const dy = botPos ? Math.abs(p.y - botPos.y) : 0
    const deckPenalty = dy > 4.5 ? 45 + dy * 5 : dy * 4
    const failPenalty = (this.failCounts.get(k) || 0) * 45
    const dist = botPos ? Math.hypot(p.x + 0.5 - botPos.x, p.z + 0.5 - botPos.z) : 0
    const inReachBonus = (botPos && dist <= 4.5 && dy <= 4.0) ? -120 : 0
    return inReachBonus + obstructsFluid + isLedge + obstructsTask + criticalAdj - p.y * 2 + horizTemp * 8 + dist + deckPenalty + failPenalty
  }

  async tickOnce (finalSweep = true) {
    this.syncTempBlocks(finalSweep)
    const e = this.bot?.entity?.position || new Vec3(0, 0, 0)
    const safeTargets = this.scaffold.getCreated()
      .filter(p => this.isSafeToBreak(p, finalSweep))
      .sort((a, b) => this.targetPriority(a, e) - this.targetPriority(b, e))
    if (!safeTargets.length) return false
    const target = safeTargets[0]
    const k = `${target.x},${target.y},${target.z}`
    if (!this.placer && this.interaction?.digAimed) {
      const bNow = this.world.blockAt(target)
      if (bNow && !isAirLike(bNow)) {
        await this.look?.lookAtPoint?.(new Vec3(target.x + 0.5, target.y + 0.5, target.z + 0.5))
        await this.interaction.digAimed(bNow, 1)
      }
      this.scaffold.created.delete(k)
      this.fleet?.coord?.removeTempBlock?.(k, this.fleet?.id)
      this.stats.swept++
      return true
    }
    return this.breakTempBlock(target, finalSweep)
  }

  isEntombedInSolidWalls (p) {
    if (!this.planner?.tasks?.size) return false
    for (const [dx, dy, dz] of [[0, 1, 0], [0, -1, 0], [1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1]]) {
      const nb = this.world.blockAt({ x: p.x + dx, y: p.y + dy, z: p.z + dz })
      if (!nb || isAirLike(nb) || nb.boundingBox !== 'block') return false
    }
    return true
  }

  scanWorldForTempBlocks (force = false) {
    const now = Date.now()
    if (!force && now - this._lastWorldScanAt < 3500) return 0
    this._lastWorldScanAt = now
    if (!this.planner?.box || !this.world?.blockAt) return 0
    const globalDemand = this.planner.globalMaterialDemand || this.planner.materialDemand
    const primaryTemp = this.scaffold?.itemName
    const tempNames = new Set(
      [primaryTemp]
        .filter(n => n && n !== 'cobblestone' && n !== 'dirt' && !globalDemand?.has(n) && !this.planner.materialDemand?.has(n))
    )
    if (!tempNames.size) return 0
    this.stats.scans++
    const bx = this.planner.box
    const centers = []
    if (this.bot?.entity?.position) centers.push(this.bot.entity.position.floored())
    if (this.fleet?.coord?.workers) {
      for (const w of this.fleet.coord.workers.values()) {
        const wp = this.fleet.coord.position(w)
        if (wp) centers.push(new Vec3(Math.floor(wp.x), Math.floor(wp.y), Math.floor(wp.z)))
      }
    }
    let added = 0
    const seen = new Set()
    const checkAndAddCell = (x, y, z) => {
      const k = `${x},${y},${z}`
      if (seen.has(k) || this.scaffold.created.has(k)) return
      seen.add(k)
      const b = this.world.blockAt({ x, y, z })
      if (!b || !tempNames.has(b.name)) return
      const t = this.planner.tasks?.get(k)
      if (t && (t.status === 'completed' || taskMatches(b, t))) return
      if (this.isEntombedInSolidWalls({ x, y, z })) return
      const v = new Vec3(x, y, z)
      v.createdAt = now - 6000
      v.isCatwalk = true
      this.scaffold.created.set(k, v)
      added++
    }
    for (const c of centers) {
      for (let dx = -12; dx <= 12; dx++) {
        for (let dz = -12; dz <= 12; dz++) {
          const x = c.x + dx; const z = c.z + dz
          if (x < bx.x0 - 2 || x > bx.x1 + 2 || z < bx.z0 - 2 || z > bx.z1 + 2) continue
          for (let dy = -6; dy <= 6; dy++) {
            const y = c.y + dy
            if (y < bx.y0 || y > bx.y1 + 2) continue
            checkAndAddCell(x, y, z)
          }
        }
      }
    }
    // Also sweep 6 vertical layers of the full schematic bounding box per scan (or all layers when force === true)
    // so temporary stone blocks inside 3x3 TNT drop tubes or earlier layers are always discovered!
    const yStart = force
      ? bx.y0
      : (this._scanSliceY != null && this._scanSliceY >= bx.y0 && this._scanSliceY <= bx.y1 ? this._scanSliceY : bx.y0)
    const yEnd = force ? (bx.y1 + 1) : Math.min(bx.y1 + 1, yStart + 5)
    for (let y = yStart; y <= yEnd; y++) {
      for (let x = bx.x0 - 1; x <= bx.x1 + 1; x++) {
        for (let z = bx.z0 - 1; z <= bx.z1 + 1; z++) {
          checkAndAddCell(x, y, z)
        }
      }
    }
    this._scanSliceY = yEnd >= bx.y1 + 1 ? bx.y0 : yEnd + 1
    return added
  }

  syncTempBlocks (finalSweep = false) {
    const coord = this.fleet?.coord
    if (coord?.tempBlocks) {
      for (const [k, rec] of coord.tempBlocks.entries()) {
        const existing = this.scaffold.created.get(k)
        if (!existing) {
          const v = new Vec3(rec.x, rec.y, rec.z)
          v.createdAt = rec.createdAt || Date.now()
          if (rec.isAccessStep) v.isAccessStep = true
          if (rec.isCatwalk) v.isCatwalk = true
          if (rec.isTempLadder) v.isTempLadder = true
          if (rec.isLookUpLedge) v.isLookUpLedge = true
          this.scaffold.created.set(k, v)
        } else {
          if (rec.isAccessStep) existing.isAccessStep = true
          if (rec.isCatwalk) existing.isCatwalk = true
          if (rec.isTempLadder) existing.isTempLadder = true
          if (rec.isLookUpLedge) existing.isLookUpLedge = true
        }
      }
    }
    this.scanWorldForTempBlocks(finalSweep)
    for (const [k, p] of [...this.scaffold.created.entries()]) {
      const b = this.world.blockAt(p)
      const t = this.planner?.tasks?.get(k)
      if (!b || isAirLike(b) || (t && (t.status === 'completed' || taskMatches(b, t)))) {
        this.scaffold.created.delete(k)
        coord?.removeTempBlock?.(k, this.fleet?.id)
      }
    }
  }

  isSafeToBreak (p, finalSweep = false) {
    const k = `${p.x},${p.y},${p.z}`
    const fails = this.failCounts.get(k) || 0
    const failAt = this.unreachable.get(k)
    if (failAt) {
      const cooldown = finalSweep
        ? Math.min(10_000, 2_500 * Math.max(1, fails))
        : Math.min(20_000, 3_500 * Math.max(1, fails))
      if (Date.now() - failAt < cooldown) return false
      // Cooldown expired: decay failCounts so Sweeper never permanently locks out a temporary block!
      if (fails >= 3) this.failCounts.set(k, 1)
    }
    if (finalSweep && fails >= 8) {
      this.scaffold.created.delete(k)
      this.fleet?.coord?.removeTempBlock?.(k, this.fleet?.id)
      return false
    }
    const b = this.world.blockAt(p)
    if (!b || isAirLike(b)) return false
    const t = this.planner?.tasks?.get(k)
    if (t && (t.status === 'completed' || taskMatches(b, t))) return false
    if (this.isEntombedInSolidWalls(p)) {
      if (finalSweep) {
        this.scaffold.created.delete(k)
        this.fleet?.coord?.removeTempBlock?.(k, this.fleet?.id)
      }
      return false
    }
    if (this.placer?.fluidBeside?.(p, true)) return false

    const me = this.bot.entity?.position
    const isCritical = this.isCriticalObstruction(p)
    if (!finalSweep && !isCritical && me && Math.abs(p.y - me.y) > 16.0) {
      return false
    }
    if (me && Math.abs(p.x + 0.5 - me.x) < 0.85 && Math.abs(p.z + 0.5 - me.z) < 0.85 && p.y >= Math.floor(me.y - 0.1) - 1 && p.y <= Math.floor(me.y) + 1) {
      return false
    }

    // Break multi-block temporary pillars top-down within Sweeper's reachable vertical band
    const aboveIsReachableFromDeck = !me || (p.y + 1) <= Math.floor(me.y + 0.1) + 4
    const hasTempAbove = aboveIsReachableFromDeck && this.scaffold.created.has(`${p.x},${p.y + 1},${p.z}`) && !isAirLike(this.world.blockAt({ x: p.x, y: p.y + 1, z: p.z }))
    if (hasTempAbove) return false

    if (this.fleet?.coord?.workers) {
      for (const w of this.fleet.coord.workers.values()) {
        if (w.id === this.fleet.id) continue
        const wp = this.fleet.coord.position(w)
        if (wp) {
          const hDist = Math.hypot(p.x + 0.5 - wp.x, p.z + 0.5 - wp.z)
          const safeR = p.y <= Math.floor(wp.y) - 1 ? 2.4 : ((p.isCatwalk || p.isAccessStep) ? 3.2 : 2.5)
          if (hDist < safeR && p.y >= Math.floor(wp.y) - 2 && p.y <= Math.floor(wp.y) + 2) return false
          if (hDist < 2.0 && wp.y >= p.y) return false
        }
        if (w.target) {
          const tDist = Math.hypot(p.x - w.target.x, p.z - w.target.z)
          const safeTR = (p.isCatwalk || p.isAccessStep) ? 3.5 : 2.5
          if (tDist <= safeTR && Math.abs(p.y - w.target.y) <= 2 && !(w.target.x === p.x && w.target.y === p.y && w.target.z === p.z)) return false
        }
      }
    }

    if (this.bot?.entities) {
      for (const ent of Object.values(this.bot.entities)) {
        if (!ent || ent === this.bot.entity || ent.type !== 'player' || !ent.position) continue
        const ep = ent.position
        const ehDist = Math.hypot(p.x + 0.5 - ep.x, p.z + 0.5 - ep.z)
        if (ehDist < 2.8 && p.y >= Math.floor(ep.y) - 2 && p.y <= Math.floor(ep.y) + 2) return false
        if (ehDist < 1.9 && ep.y >= p.y) return false
      }
    }
    const isTaskCellHere = Boolean(t && t.status !== 'completed')
    const isFluidCellHere = Boolean(this.planner?.fluidCells?.has?.(k))

    if (!finalSweep) {
      const age = p.createdAt ? (Date.now() - p.createdAt) : 99_999
      const stats = this.planner?.getStats?.()
      const currentLayer = stats?.currentLayer
      const currentOrder = stats?.currentOrder
      const baseLayerY = (this.planner?.box?.y0 ?? -60) + (currentLayer ?? 0)
      const isFinishedLowerLayer = Boolean(currentLayer != null && p.y <= baseLayerY - 2)
      const isCurrentLayerTaskHere = Boolean(isTaskCellHere && (currentLayer == null || t.layer < currentLayer || (t.layer === currentLayer && (currentOrder == null || t.order <= currentOrder))))
      const isActiveFluidObstruction = Boolean(isFluidCellHere && (currentOrder >= 88000 || isFinishedLowerLayer))
      const minAge = (isCurrentLayerTaskHere || isActiveFluidObstruction || isCritical) ? 1500 : 2800
      if (age < minAge) return false

      // If `p` is directly above an unfinished `look === "up"` block (serving as its overhead reference cap), keep `p` until that block is placed
      if (!isCurrentLayerTaskHere && !isActiveFluidObstruction && this.planner?.tasks) {
        for (let dx = -1; dx <= 1; dx++) {
          for (let dz = -1; dz <= 1; dz++) {
            const belowTask = this.planner.tasks.get(`${p.x + dx},${p.y - 1},${p.z + dz}`)
            if (belowTask && belowTask.kind === 'block' && belowTask.status !== 'completed' && belowTask.status !== 'blocked' && belowTask.info?.specs?.[0]?.look === 'up') {
              return false
            }
          }
        }
      }

      if (p.isTempLadder && !isCurrentLayerTaskHere && !isActiveFluidObstruction && !isFinishedLowerLayer) {
        return false
      }

      if (!isCurrentLayerTaskHere && !isActiveFluidObstruction && !isCritical) {
        let horizTemp = 0
        for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
          const nk = `${p.x + dx},${p.y},${p.z + dz}`
          if (this.scaffold.created.has(nk) && !isAirLike(this.world.blockAt({ x: p.x + dx, y: p.y, z: p.z + dz }))) {
            horizTemp++
          }
        }
        const isTowerStack = this.scaffold.created.has(`${p.x},${p.y - 1},${p.z}`) || this.scaffold.created.has(`${p.x},${p.y + 1},${p.z}`)
        if (!isTowerStack && !isFinishedLowerLayer && age < 12_000 && horizTemp >= 2) return false

        if (!isTowerStack && !isFinishedLowerLayer && age < 20_000 && this.planner?.tasks) {
          for (let dx = -1; dx <= 1; dx++) {
            for (let dz = -1; dz <= 1; dz++) {
              for (let dy = 0; dy <= 1; dy++) {
                const nt = this.planner.tasks.get(`${p.x + dx},${p.y + dy},${p.z + dz}`)
                if (nt && nt.kind === 'block' && nt.status !== 'completed' && nt.status !== 'blocked' && (nt.attempts || 0) < 2) {
                  return false
                }
              }
            }
          }
        }
      }
    }

    return true
  }

  async stepAsideIfCrowded () {
    const me = this.bot.entity?.position
    if (!me || !this.fleet?.coord?.workers) return
    for (const w of this.fleet.coord.workers.values()) {
      if (w.id === this.fleet.id) continue
      const wp = this.fleet.coord.position(w)
      if (wp && Math.hypot(wp.x - me.x, wp.z - me.z) < 2.6 && Math.abs(wp.y - me.y) <= 2.2) {
        await this.placer.retreatFrom(new Vec3(Math.floor(wp.x), Math.floor(wp.y), Math.floor(wp.z)), 4).catch(() => {})
        return
      }
    }
  }

  async tryDirectRaycastDig (p, finalSweep = false) {
    const k = `${p.x},${p.y},${p.z}`
    const poseNow = this.placer.aim.fromPose(p, FREE, null, { mode: 'self' })
    if (poseNow) {
      try {
        const aimed = await this.placer.aimAndValidate(p, FREE, poseNow, { mode: 'self' })
        const bNow = this.world.blockAt(p)
        if (bNow && !isAirLike(bNow) && this.isSafeToBreak(p, finalSweep)) {
          await this.builder.interaction.digAimed(bNow, FACE_INDEX[aimed.pose.faceName])
        }
        if (isAirLike(this.world.blockAt(p))) {
          this.scaffold.created.delete(k)
          this.fleet?.coord?.removeTempBlock?.(k, this.fleet?.id)
          this.unreachable.delete(k)
          this.failCounts.delete(k)
          this.stats.swept++
          this.logger.info(`SWEEPER: cleared temporary block at ${k} (raycast)`)
          return true
        }
      } catch {}
    }
    // If another temporary block is directly in the raycast line-of-sight within reach, break that blocker first!
    const e = this.bot.entity?.position
    if (e && this.placer.aim.rayOutlineBlocker) {
      const eye = e.offset(0, 1.62, 0)
      const center = new Vec3(p.x + 0.5, p.y + 0.5, p.z + 0.5)
      const dist = eye.distanceTo(center)
      if (dist <= 4.6) {
        const dir = center.minus(eye).scaled(1 / Math.max(0.001, dist))
        const blk = this.placer.aim.rayOutlineBlocker(eye, dir, dist, p)
        if (blk?.pos) {
          const bk = `${blk.pos.x},${blk.pos.y},${blk.pos.z}`
          if (this.scaffold.created.has(bk) && this.isSafeToBreak(blk.pos, finalSweep)) {
            const bPose = this.placer.aim.fromPose(blk.pos, FREE, null, { mode: 'self' })
            if (bPose) {
              try {
                const bAimed = await this.placer.aimAndValidate(blk.pos, FREE, bPose, { mode: 'self' })
                const bBlock = this.world.blockAt(blk.pos)
                if (bBlock && !isAirLike(bBlock)) {
                  await this.builder.interaction.digAimed(bBlock, FACE_INDEX[bAimed.pose.faceName])
                  if (isAirLike(this.world.blockAt(blk.pos))) {
                    this.scaffold.created.delete(bk)
                    this.fleet?.coord?.removeTempBlock?.(bk, this.fleet?.id)
                    this.stats.swept++
                    this.logger.info(`SWEEPER: cleared raycast-blocking temporary block at ${bk}`)
                    return true
                  }
                }
              } catch {}
            }
          }
        }
      }
    }
    return false
  }

  async breakTempBlock (p, finalSweep = false) {
    const k = `${p.x},${p.y},${p.z}`
    if (!this.isSafeToBreak(p, finalSweep)) return false
    const e = this.bot.entity?.position
    if (!e) return false

    // 1. Direct raycast from current position
    if (await this.tryDirectRaycastDig(p, finalSweep)) return true

    // 2. Find all aim stands (including edge shifts and up/down up to 6 blocks)
    const allCs = this.placer.aim.candidates(p, FREE, {
      mode: 'self',
      allowScaffold: false,
      allowEdgeShift: true,
      max: 24,
      stages: [{ r: 5, down: 6, up: 6, aroundTarget: true }]
    }).filter(c => !(c.cell.x === p.x && c.cell.z === p.z && c.cell.y >= p.y && c.cell.y <= p.y + 2) && !this.placer.isDeadStand?.(c.stand))

    const nonTempCs = allCs.filter(c => !this.scaffold.contains(c.cell) && !this.scaffold.contains({ x: c.cell.x, y: c.cell.y - 1, z: c.cell.z }))
    const rawCs = nonTempCs.length ? [...nonTempCs, ...allCs.filter(c => !nonTempCs.includes(c))] : allCs

    if (!rawCs.length) {
      // Fallback to builder's digBlock with allowScaffold: true when floating or out of ground reach
      try {
        await this.placer.digBlock(p, { allowScaffold: true })
        if (isAirLike(this.world.blockAt(p))) {
          this.scaffold.created.delete(k)
          this.fleet?.coord?.removeTempBlock?.(k, this.fleet?.id)
          this.unreachable.delete(k)
          this.failCounts.delete(k)
          this.stats.swept++
          this.logger.info(`SWEEPER: cleared temporary block at ${k} (builder scaffold reach)`)
          return true
        }
      } catch {}
      this.unreachable.set(k, Date.now())
      this.failCounts.set(k, (this.failCounts.get(k) || 0) + 1)
      return false
    }

    const yesNonTemp = nonTempCs.filter(c => !this.placer?.brain || this.placer.reachVerdict(c.stand) === 'yes')
    const yesRaw = rawCs.filter(c => !this.placer?.brain || this.placer.reachVerdict(c.stand) === 'yes')
    const cand = yesNonTemp[0] || yesRaw[0] || nonTempCs[0] || rawCs[0]
    const dist = Math.hypot(cand.stand.x - e.x, cand.stand.z - e.z)
    const dy = cand.stand.y - e.y

    let connected = Boolean(yesNonTemp.length || yesRaw.length)
    const allowPearlHere = (dist > 12 || Math.abs(dy) >= 3.0) &&
      Date.now() - (this._lastPearlAt || 0) > 25_000 &&
      this.survival && Number(this.bot.health) >= 14 && this.config.navigation?.pearls !== false
    if (allowPearlHere) {
      this._lastPearlAt = Date.now()
      const pearlTarget = new Vec3(cand.cell.x + 0.5, cand.cell.y, cand.cell.z + 0.5)
      if (isFullTop(this.world.blockAt(cand.cell.offset(0, -1, 0))) && isBodyFree(this.world.blockAt(cand.cell)) && isBodyFree(this.world.blockAt(cand.cell.offset(0, 1, 0)))) {
        const pearled = await this.survival.pearlTo(pearlTarget).catch(() => false)
        if (pearled) {
          connected = true
          this.stats.pearls++
          this.logger.info(`SWEEPER: ender-pearled to ${cand.cell.x},${cand.cell.y},${cand.cell.z} to clear temporary block ${k}`)
        }
      }
    }

    // Use full Builder Brain (`placer.brain.prepare`) when `cand.stand` is on another deck/layer!
    if (!connected && this.placer?.brain) {
      const prep = await this.placer.brain.prepare(cand.stand, { force: true }).catch(() => 'no')
      this.placer.invalidateWorldCaches?.()
      if (prep !== 'no' || this.placer.reachVerdict(cand.stand) !== 'no') {
        connected = true
      }
    }

    try {
      const walkStand = this.placer.walkStandOf ? this.placer.walkStandOf(cand) : cand.stand
      if (!(await this.placer.hop?.(walkStand).catch(() => false))) {
        await this.nav.goTo(walkStand, 0.45, 7000, { human: true, work: true, rescue: Boolean(finalSweep || this.isCriticalObstruction(p)) })
      }
      if (!this.isSafeToBreak(p, finalSweep)) {
        this.placer?.setPhase?.('sweeper: watching for temporary blocks')
        return false
      }
      if (cand.edge && !this.placer.aim.fromPose(p, FREE, null, { mode: 'self' })) {
        await this.scaffold?.slide?.(cand.stand, true).catch(() => false)
      }
      if (await this.tryDirectRaycastDig(p, finalSweep)) {
        this.placer?.setPhase?.('sweeper: watching for temporary blocks')
        return true
      }
      const swept = await this.placer.sweepTemporary({ maxBlocks: 3, final: true, only: new Set([k]), ignoreReserved: true, ignoreFluidBeside: true })
      if (swept > 0 || !this.scaffold.created.has(k) || isAirLike(this.world.blockAt(p))) {
        this.scaffold.created.delete(k)
        this.fleet?.coord?.removeTempBlock?.(k, this.fleet?.id)
        this.unreachable.delete(k)
        this.failCounts.delete(k)
        this.stats.swept += Math.max(1, swept)
        this.placer?.setPhase?.('sweeper: watching for temporary blocks')
        this.logger.info(`SWEEPER: cleared temporary block at ${k}`)
        return true
      }
      this.placer.noteDeadStand?.(cand.stand)
      this.unreachable.set(k, Date.now())
      this.failCounts.set(k, (this.failCounts.get(k) || 0) + 1)
    } catch {
      this.placer.noteDeadStand?.(cand.stand)
      this.unreachable.set(k, Date.now())
      this.failCounts.set(k, (this.failCounts.get(k) || 0) + 1)
    } finally {
      this.placer?.setPhase?.('sweeper: watching for temporary blocks')
    }
    return false
  }

  async runLoop () {
    this.logger.info('SWEEPER: dedicated janitor/sweeper active with full builder-brain & raycast digging')
    while (this.builder.running && !this.builder.stopRequested) {
      this.fleet?.coord?.beat(this.fleet.id)
      if (this.builder.paused) { await sleep(100); continue }
      if (this.bot._client?.ended) { this.builder.stopRequested = true; break }
      if (!this.bot.entity) { await sleep(200); continue }

      await this.survival?.tick().catch(() => {})
      if (this.builder.fallGuard?.fell) await this.builder.fallGuard.recover().catch(() => {})
      await this.builder.escapeIfInTrenchOrPit().catch(() => {})

      this.planner.syncFleet()
      const buildersActive = this.fleet?.coord?.othersActive?.(this.fleet.id) ?? false
      const stats = this.planner.getStats()
      const finalSweep = stats.remaining === 0 && !buildersActive
      this.syncTempBlocks(finalSweep)

      const e = this.bot.entity.position
      const safeTargets = this.scaffold.getCreated()
        .filter(p => this.isSafeToBreak(p, finalSweep))
        .sort((a, b) => this.targetPriority(a, e) - this.targetPriority(b, e))

      if (safeTargets.length > 0) {
        this.fleet?.coord?.setDone(this.fleet.id, false)
        const target = safeTargets[0]
        this.placer?.setPhase?.('digging stone')
        this.fleet?.coord?.claim(this.fleet.id, { key: `sweep:${target.x},${target.y},${target.z}`, world: target })
        const broke = await this.breakTempBlock(target, finalSweep)
        this.fleet?.coord?.release(this.fleet.id)
        await sleep(broke ? 25 : 120)
        continue
      }

      if (finalSweep) {
        await this.placer.cleanupAll().catch(() => {})
        this.fleet?.coord?.setDone(this.fleet.id, true)
        if (await this.builder.fleetFinish()) break
        await sleep(200)
        continue
      }

      if (this.fleet?.coord?.workers && Date.now() - (this._lastDeckFollowAt || 0) > 6_000) {
        let bestWp = null
        let bestDist = Infinity
        for (const w of this.fleet.coord.workers.values()) {
          if (w.id === this.fleet.id) continue
          const wp = this.fleet.coord.position(w)
          if (wp && Math.abs(wp.y - e.y) >= 4.0) {
            const d = Math.hypot(wp.x - e.x, wp.z - e.z)
            if (d < bestDist) { bestDist = d; bestWp = wp }
          }
        }
        if (bestWp) {
          this._lastDeckFollowAt = Date.now()
          this.placer.setPhase('sweeper: moving to active builder deck')
          const goalStand = new Vec3(Math.floor(bestWp.x) + 0.5, Math.floor(bestWp.y), Math.floor(bestWp.z) + 0.5)
          await this.placer.brain?.prepare?.(goalStand, { force: true }).catch(() => {})
          await this.nav.goTo(goalStand, 3.5, 9_000, { human: true, work: true, rescue: true }).catch(() => {})
          continue
        }
      }
      await this.stepAsideIfCrowded()
      this.placer.setPhase('sweeper: watching for temporary blocks')
      await sleep(180)
    }
  }
}

module.exports = { SweeperEngine, isSweeperWorker, builderWorkerIndices }
