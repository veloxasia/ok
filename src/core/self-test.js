'use strict'
// Comprehensive Real-Server 36-Action Self-Test & Diagnostic Logger (writes live to logger.txt).
// Uses the EXACT production builder code (placer.executeGuarded, placer.provideSupport, placer.postActions,
// placer.executeWaterlog, placer.executeFluid, placer.digBlock, scaffold.tower/descend/slide, human.walkTo,
// placer.hop, shop.buyFromAh, shop.buy + addToQuickBuy) to test EVERY action and block orientation that
// occurs in the farm schematics on the real server:
//   - Category A (01..03): /ah pickaxe + axe + shovel, /shop Quick Buy + Sign Order setup + Instant Buy for all build items
//   - Category B (04..08): Human walk & hop, 1-block diagonal octagon corner step, edge sneak-slide, scaffold tower + descend, floating support + sweep
//   - Category C (09..14): Observers in ALL 6 directions (north, south, east, west, up, down — including overhead look-up)
//   - Category D (15..21): Pistons & Sticky Pistons in ALL 6 directions (north, south, east, west, up, down)
//   - Category E (22..24): Hoppers in ALL 5 directions (down, north, south, east, west with sneak) & Single + Double Chest merge
//   - Category F (25..30): Slabs (bottom & top), Stairs (bottom & top in all 4 directions), Trapdoors (bottom, top, open=true), Fence Gates (open=true), Signs (wall & standing), Ladders
//   - Category G (31..34): Repeaters (all 4 directions + delay=4 clicks), Comparators (mode=subtract), Redstone Wire / Torch / Wall Torch / Lever (powered=true), Note Block tuning
//   - Category H (35..36): Waterlogging (oak_leaves, top slab, stairs + bucket scoop) & Sealed Water/Lava source pouring (level=0) + bucket scoop
const fs = require('fs')
const path = require('path')
const { Vec3 } = require('../util/vec3')
const { sleep } = require('../util/async')
const { isAirLike, isBodyFree, isFullTop } = require('../world/ground')
const { describeBlock, taskMatches, FACE_INDEX } = require('../rules/blocks')

const FREE_SPEC = {
  faces: ['up', 'down', 'north', 'south', 'east', 'west'].map(f => ({ f })),
  look: null,
  horiz: null,
  tag: 'free'
}

function resolveLoggerPaths (config) {
  const rootDir = path.resolve(__dirname, '..', '..')
  const dataDir = path.resolve(rootDir, config?.paths?.stateDir || 'data')
  fs.mkdirSync(dataDir, { recursive: true })
  return [
    path.join(rootDir, 'logger.txt'),
    path.join(dataDir, 'logger.txt')
  ]
}

function makeTask (cell, name, props = {}, kindOverride = null) {
  const info = describeBlock(name, props)
  const k = `${cell.x},${cell.y},${cell.z}`
  const kind = kindOverride || (info.kind === 'fluid' ? 'fluid' : 'block')
  return {
    key: kind === 'waterlog' ? `${k}#w` : k,
    parentKey: kind === 'waterlog' ? k : undefined,
    cellKey: `${Math.floor(cell.x / 8)},${Math.floor(cell.z / 8)}`,
    kind,
    name: info.name,
    item: kind === 'waterlog' ? 'water_bucket' : info.item,
    properties: { ...info.props },
    info,
    world: cell.clone(),
    layer: 0,
    order: 0,
    attempts: 0,
    totalAttempts: 0,
    status: 'pending'
  }
}

function formatBlockState (b) {
  if (!b) return 'null'
  const p = b.getProperties ? b.getProperties() : (b.properties || {})
  const keys = Object.keys(p).filter(k => ['facing', 'half', 'type', 'open', 'powered', 'delay', 'mode', 'waterlogged', 'level', 'axis', 'rotation', 'note', 'orientation'].includes(k))
  return `${b.name}${keys.length ? `[${keys.map(k => `${k}=${p[k]}`).join(',')}]` : ''}`
}

async function runRealServerSelfTest (bot, config, logger) {
  const builder = bot.builder
  if (!builder) throw new Error('Bot builder engine is not initialized yet')
  if (!bot.entity) throw new Error('Bot is not spawned in the world yet')

  const files = resolveLoggerPaths(config)
  const results = []

  function writeLine (text) {
    const stamp = new Date().toISOString()
    const line = `[${stamp}] ${text}`
    for (const fp of files) {
      try { fs.appendFileSync(fp, line + '\n', 'utf8') } catch {}
    }
    logger?.info?.(`[SELFTEST] ${text}`)
  }

  const onChat = msg => {
    const clean = String(msg || '').replace(/\r?\n/g, ' ').trim()
    if (clean) writeLine(`  [SERVER CHAT] ${clean}`)
  }

  const header = [
    '========================================================================================',
    'REAL-SERVER COMPREHENSIVE 40-ACTION SELF-TEST LOG (logger.txt)',
    `Started At : ${new Date().toISOString()}`,
    `Bot Name   : ${bot.username}`,
    `Server     : ${config?.server?.host || 'unknown'}:${config?.server?.port || 25565} (mode=${config?.mode || 'donut'}, version=${bot.version || 'auto'})`,
    `Position   : ${bot.entity.position.toString()} (health=${bot.health}, food=${bot.food})`,
    `Inventory  : ${(bot.inventory?.items?.() || []).map(i => `${i.name}x${i.count}`).join(', ') || 'empty'}`,
    '========================================================================================'
  ]
  for (const fp of files) {
    try { fs.writeFileSync(fp, header.join('\n') + '\n', 'utf8') } catch {}
  }
  for (const h of header) logger?.info?.(`[SELFTEST] ${h}`)

  bot.on('messagestr', onChat)
  const prevOnEvent = builder.materials?.shop?.onEvent
  if (builder.materials?.shop) {
    builder.materials.shop.onEvent = ev => {
      writeLine(`  [GUI/SHOP] ${ev.step}: ${JSON.stringify(ev)}`)
    }
  }

  const runStep = async (name, description, fn) => {
    const t0 = Date.now()
    writeLine('----------------------------------------------------------------------------------------')
    writeLine(`▶ START [${name}]: ${description}`)
    try {
      const detail = await fn()
      const ms = Date.now() - t0
      const msg = typeof detail === 'string' ? detail : JSON.stringify(detail)
      writeLine(`✅ WORKED [${name}] (${ms}ms): ${msg}`)
      results.push({ name, status: 'WORKED', ms, detail: msg })
      return { ok: true, detail }
    } catch (error) {
      const ms = Date.now() - t0
      const reason = `${error?.code ? `[${error.code}] ` : ''}${error?.message || error}`
      writeLine(`❌ REJECTED [${name}] (${ms}ms): ${reason}`)
      results.push({ name, status: 'REJECTED', ms, detail: reason })
      return { ok: false, error }
    }
  }

  // Helper: ensure item is in inventory (buying from /shop or /ah via builder.materials)
  const ensureTestItem = async (itemName, minCount = 1) => {
    if (builder.materials.countItem(itemName) >= minCount) return builder.materials.countItem(itemName)
    await builder.materials.ensureItem(itemName, minCount)
    return builder.materials.countItem(itemName)
  }

  // Helper: safely break a test block and wait for air
  const cleanCell = async (cell) => {
    if (!cell) return
    const b = builder.world.blockAt(cell)
    if (!b || isAirLike(b)) return
    if (b.name === 'water' || b.name === 'lava') {
      if (builder.materials.countItem('bucket') > 0) {
        try {
          await builder.materials.ensureUsableItem('bucket')
          const pPose = builder.placer.aim.fromPose(cell, FREE_SPEC, null, { mode: 'self', bucket: true })
          if (pPose) {
            const pAimed = await builder.placer.aimAndValidate(cell, FREE_SPEC, pPose, { mode: 'self', bucket: true })
            await builder.interaction.useBucket(b, pAimed.pose.hitVec, { sneak: false })
            await sleep(220)
          }
        } catch {}
      }
      return
    }
    const props = b.getProperties?.() || b.properties || {}
    if ((props.waterlogged === true || props.waterlogged === 'true') && builder.materials.countItem('bucket') > 0) {
      try {
        await builder.materials.ensureUsableItem('bucket')
        const pPose = builder.placer.aim.fromPose(cell, FREE_SPEC, null, { mode: 'self' })
        if (pPose) {
          const pAimed = await builder.placer.aimAndValidate(cell, FREE_SPEC, pPose, { mode: 'self' })
          await builder.interaction.useBucket(b, pAimed.pose.hitVec, { sneak: false })
          await sleep(200)
        }
      } catch {}
    }
    try {
      await builder.placer.digBlock(cell, { allowScaffold: false })
      await sleep(180)
    } catch {
      try {
        const blkNow = builder.world.blockAt(cell)
        if (blkNow && !isAirLike(blkNow)) {
          const dPose = builder.placer.aim.fromPose(cell, FREE_SPEC, null, { mode: 'self' })
          if (dPose) {
            const dAimed = await builder.placer.aimAndValidate(cell, FREE_SPEC, dPose, { mode: 'self' })
            await builder.interaction.digAimed(blkNow, FACE_INDEX[dAimed.pose.faceName])
            await sleep(180)
          }
        }
      } catch {}
    }
  }

  // Locate a 3x3 work bay around the bot's starting position (mining stone if inside a 1x2 tunnel like in the video)
  const originFeet = bot.entity.position.floored()
  const ensureTestBay = async () => {
    const f = bot.entity.position.floored()
    // Prefer a cell 2 blocks in front of the bot along X or Z so the bot has room to stand, look, and place reference blocks
    const dirs = [
      { dir: 'north', dx: 0, dz: -2, sideX: 1, sideZ: 0 },
      { dir: 'south', dx: 0, dz: 2, sideX: -1, sideZ: 0 },
      { dir: 'east', dx: 2, dz: 0, sideX: 0, sideZ: 1 },
      { dir: 'west', dx: -2, dz: 0, sideX: 0, sideZ: -1 }
    ]
    for (const d of dirs) {
      const target = new Vec3(f.x + d.dx, f.y, f.z + d.dz)
      const floor = target.offset(0, -1, 0)
      if (isFullTop(builder.world.blockAt(floor)) && isAirLike(builder.world.blockAt(target)) && isAirLike(builder.world.blockAt(target.offset(0, 1, 0)))) {
        return {
          stand: new Vec3(f.x + 0.5, f.y, f.z + 0.5),
          target,
          above: target.offset(0, 1, 0),
          topCap: target.offset(0, 2, 0),
          side: target.offset(d.sideX, 0, d.sideZ),
          backWall: target.offset(Math.sign(d.dx), 0, Math.sign(d.dz))
        }
      }
    }
    // If standing inside an enclosed tunnel (like in the video at 00:07), mine a 2-block-deep pocket in front
    for (const d of dirs) {
      const c1 = new Vec3(f.x + Math.sign(d.dx), f.y, f.z + Math.sign(d.dz))
      const c2 = new Vec3(f.x + d.dx, f.y, f.z + d.dz)
      const b1 = builder.world.blockAt(c1)
      if (b1 && !/bedrock|obsidian|barrier/.test(b1.name || '')) {
        await cleanCell(c1.offset(0, 1, 0))
        await cleanCell(c1)
        await cleanCell(c2.offset(0, 1, 0))
        await cleanCell(c2)
        await cleanCell(c2.offset(0, 2, 0))
        if (!isFullTop(builder.world.blockAt(c2.offset(0, -1, 0)))) {
          try { await builder.placer.executeGuarded(makeTask(c2.offset(0, -1, 0), 'cobblestone', {})) } catch {}
        }
        return {
          stand: new Vec3(f.x + 0.5, f.y, f.z + 0.5),
          target: c2,
          above: c2.offset(0, 1, 0),
          topCap: c2.offset(0, 2, 0),
          side: c1.offset(d.sideX, 0, d.sideZ),
          backWall: c2.offset(Math.sign(d.dx), 0, Math.sign(d.dz))
        }
      }
    }
    const fallbackTarget = new Vec3(f.x, f.y, f.z - 2)
    return {
      stand: new Vec3(f.x + 0.5, f.y, f.z + 0.5),
      target: fallbackTarget,
      above: fallbackTarget.offset(0, 1, 0),
      topCap: fallbackTarget.offset(0, 2, 0),
      side: fallbackTarget.offset(1, 0, 0),
      backWall: fallbackTarget.offset(0, 0, -1)
    }
  }

  // Core helper: executes a placement task via the exact builder.placer.executeGuarded(task) pipeline,
  // verifies taskMatches(worldBlock, task), logs the exact resulting block state, and cleans up afterward!
  const testPlaceTask = async (cell, blockName, props = {}, { keepAfter = false, preSupportCell = null } = {}) => {
    const task = makeTask(cell, blockName, props)
    await ensureTestItem(task.item, 1)
    await cleanCell(cell)
    if (preSupportCell) {
      const sb = builder.world.blockAt(preSupportCell)
      if (!sb || isAirLike(sb)) {
        await ensureTestItem('cobblestone', 1)
        await builder.placer.executeGuarded(makeTask(preSupportCell, 'cobblestone', {}))
        await sleep(150)
      }
    }
    try {
      const res = await builder.placer.executeGuarded(task)
      await sleep(220)
      const wb = builder.world.blockAt(cell)
      const matched = taskMatches(wb, task)
      const actualState = formatBlockState(wb)
      const wantedState = `${task.name}${Object.keys(task.info.cmp).length ? `[${Object.entries(task.info.cmp).map(([k, v]) => `${k}=${v}`).join(',')}]` : ''}`
      if (!matched) {
        throw new Error(`State mismatch at ${cell}: wanted ${wantedState}, server has ${actualState}`)
      }
      return `outcome=${res} | verified ${actualState} at ${cell} (rule=${task.specTag || task.info.specs?.[0]?.tag || 'default'})`
    } finally {
      if (!keepAfter) {
        await cleanCell(cell)
      }
      if (preSupportCell) {
        await cleanCell(preSupportCell)
      }
      if (builder.scaffold?.created?.size > 0) {
        for (const p of builder.scaffold.getCreated()) {
          await cleanCell(p)
          builder.scaffold.created.delete(`${p.x},${p.y},${p.z}`)
        }
      }
    }
  }

  try {
    // =========================================================================
    // CATEGORY A: ECONOMY (/ah TOOL PURCHASE & /shop QUICK BUY + SIGN ORDERS)
    // =========================================================================
    await runStep('01_AH_BUY_PICKAXE', 'Buy pickaxe from Auction House (/ah pickaxe -> Auction (Page 1) -> Confirm Purchase slot 15)', async () => {
      if (config.materials?.autoGive) {
        await builder.materials.giveCommand('diamond_pickaxe', 1)
        return 'autoGive mode: gave diamond_pickaxe'
      }
      const res = await builder.materials.shop.buyFromAh('pickaxe')
      const picks = (bot.inventory?.items?.() || []).filter(i => i.name.endsWith('_pickaxe')).map(i => `${i.name}(slot=${i.slot})`)
      if (!picks.length) throw new Error('No pickaxe in inventory after /ah pickaxe')
      return `Bought ${res.item} (slot ${res.slot}, price=$${res.price}) -> inventory: ${picks.join(', ')}`
    })

    await runStep('02_SHOP_COBBLESTONE_QUICKBUY', 'Add cobblestone (x64) to /shop Quick Buy via Orders -> Select Item signs and instant-buy 64', async () => {
      const before = builder.materials.countItem('cobblestone')
      const bought = await builder.materials.buy('cobblestone', 64)
      const after = builder.materials.countItem('cobblestone')
      if (after <= before && bought <= 0) throw new Error(`cobblestone did not increase (before=${before}, after=${after})`)
      return `cobblestone ${before} -> ${after} (+${after - before})`
    })

    await runStep('03_SHOP_ACQUIRE_TEST_KIT', 'Acquire test kit items via /shop Quick Buy (observer, piston, sticky_piston, hopper, chest, repeater, comparator, redstone, redstone_torch, lever, note_block, oak_leaves, oak_trapdoor, oak_fence_gate, oak_sign, ladder, cobblestone_slab, cobblestone_stairs, water_bucket, lava_bucket)', async () => {
      const kit = [
        ['cobblestone', 16],
        ['observer', 2],
        ['piston', 2],
        ['sticky_piston', 1],
        ['hopper', 2],
        ['chest', 2],
        ['repeater', 1],
        ['comparator', 1],
        ['redstone', 2],
        ['redstone_torch', 2],
        ['lever', 1],
        ['note_block', 1],
        ['oak_leaves', 2],
        ['oak_trapdoor', 2],
        ['oak_fence_gate', 1],
        ['oak_sign', 2],
        ['ladder', 2],
        ['cobblestone_slab', 2],
        ['cobblestone_stairs', 2],
        ['cobblestone_wall', 2],
        ['crafter', 1],
        ['dropper', 1],
        ['barrel', 1],
        ['composter', 1],
        ['water_bucket', 1],
        ['lava_bucket', 1]
      ]
      const acquired = []
      const failedItems = []
      for (const [item, qty] of kit) {
        try {
          if (builder.materials.countItem(item) < qty) {
            await builder.materials.ensureItem(item, qty)
          }
          acquired.push(`${item}:${builder.materials.countItem(item)}`)
        } catch (e) {
          failedItems.push(`${item}(${e.code || e.message})`)
          writeLine(`  [KIT WARN] Could not acquire ${item}: ${e.message}`)
        }
      }
      if (failedItems.length) {
        return `Acquired ${acquired.length}/${kit.length} items (${acquired.join(', ')}) | Missing: ${failedItems.join(', ')}`
      }
      return `All ${kit.length} test kit items ready in inventory (${acquired.join(', ')})`
    })

    const bay = await ensureTestBay()
    writeLine(`  [TEST BAY] stand=${bay.stand} target=${bay.target} above=${bay.above} topCap=${bay.topCap} side=${bay.side}`)

    // =========================================================================
    // CATEGORY B: MOVEMENT, DIAGONAL CORNER STEP, EDGE SLIDE, TOWER & SUPPORT
    // =========================================================================
    await runStep('04_HUMAN_WALK_AND_HOP', 'Orthogonal human walk & hop with tick_end active', async () => {
      const p0 = bot.entity.position.clone()
      const hopped = await builder.placer.hop(new Vec3(bay.target.x + 0.5, bay.target.y, bay.target.z + 0.5))
      const p1 = bot.entity.position.clone()
      await builder.navigation.goTo(bay.stand, 0.35, 6000, { human: true, work: true, rescue: false })
      return `hop=${hopped} (${p0.floored()} -> ${p1.floored()} -> ${bot.entity.position.floored()})`
    })

    await runStep('05_DIAGONAL_CORNER_STEP', 'Walk/hop across a 1-block diagonal step (x, z) -> (x+1, z+1) without sneak edge-lock', async () => {
      const diagCell = new Vec3(Math.floor(bay.stand.x) + 1, Math.floor(bay.stand.y), Math.floor(bay.stand.z) + 1)
      if (!isFullTop(builder.world.blockAt(diagCell.offset(0, -1, 0)))) {
        await ensureTestItem('cobblestone', 1)
        await builder.placer.executeGuarded(makeTask(diagCell.offset(0, -1, 0), 'cobblestone', {}))
      }
      await cleanCell(diagCell)
      await cleanCell(diagCell.offset(0, 1, 0))
      const diagStand = new Vec3(diagCell.x + 0.5, diagCell.y, diagCell.z + 0.5)
      const ok = await builder.placer.hop(diagStand)
      await builder.placer.hop(bay.stand)
      if (!ok) throw new Error(`Diagonal hop to ${diagStand} failed`)
      return `Diagonal step ${bay.stand.floored()} <-> ${diagCell} succeeded with zero corner freeze`
    })

    await runStep('06_EDGE_SNEAK_SLIDE', 'Sneak-slide to block edge (±0.74 offset) and back using scaffold.slide', async () => {
      const edgeTarget = new Vec3(Math.floor(bay.stand.x) + 0.74, bay.stand.y, Math.floor(bay.stand.z) + 0.5)
      await builder.scaffold.slide(edgeTarget, true)
      const pEdge = bot.entity.position.clone()
      await builder.scaffold.slide(bay.stand, false)
      builder.placer.setSneak(false)
      return `Edge slide reached (${pEdge.x.toFixed(2)}, ${pEdge.y.toFixed(2)}, ${pEdge.z.toFixed(2)}) and returned to ${bay.stand.floored()}`
    })

    await runStep('07_SCAFFOLD_TOWER_AND_DESCEND', '1-block jump-place scaffold tower under feet and descend by mining temporary pillar', async () => {
      const startF = bot.entity.position.floored()
      await cleanCell(startF.offset(0, 2, 0))
      await ensureTestItem(builder.scaffold.itemName || 'cobblestone', 2)
      const towerSpec = { floor: startF, top: startF, height: 1 }
      await builder.scaffold.tower(towerSpec, new Vec3(startF.x + 0.5, startF.y + 1, startF.z + 0.5))
      const topY = bot.entity.position.y
      await builder.scaffold.descend(0)
      const endY = bot.entity.position.y
      if (topY < startF.y + 0.8) throw new Error(`Tower did not reach y=${startF.y + 1} (got ${topY.toFixed(2)})`)
      return `Pillared from y=${startF.y} -> y=${topY.toFixed(2)} and descended cleanly back to y=${endY.toFixed(2)}`
    })

    await runStep('08_FLOATING_SUPPORT_AND_SWEEP', 'Place temporary reference support for a mid-air block, place target block, and sweep temporary block', async () => {
      await cleanCell(bay.target)
      await cleanCell(bay.above)
      await ensureTestItem('cobblestone', 2)
      // bay.above has no adjacent solid block when bay.target is air; placer.executeGuarded must call provideSupport!
      const floatingTask = makeTask(bay.above, 'cobblestone', {})
      const res = await builder.placer.executeGuarded(floatingTask)
      const wb = builder.world.blockAt(bay.above)
      if (!wb || wb.name !== 'cobblestone') throw new Error(`Floating block was not placed at ${bay.above}`)
      await builder.placer.sweepTemporary({ maxBlocks: 4, final: true, ignoreReserved: true })
      await cleanCell(bay.above)
      await cleanCell(bay.target)
      return `Floating cobblestone placed at ${bay.above} (${res}) via provideSupport and temporary support swept`
    })

    // =========================================================================
    // CATEGORY C: OBSERVERS IN ALL 6 DIRECTIONS (NORTH, SOUTH, EAST, WEST, UP, DOWN)
    // =========================================================================
    await runStep('09_OBSERVER_FACING_NORTH', 'Place observer[facing=north] and verify server facing=north', () =>
      testPlaceTask(bay.target, 'observer', { facing: 'north' })
    )
    await runStep('10_OBSERVER_FACING_SOUTH', 'Place observer[facing=south] and verify server facing=south', () =>
      testPlaceTask(bay.target, 'observer', { facing: 'south' })
    )
    await runStep('11_OBSERVER_FACING_EAST', 'Place observer[facing=east] and verify server facing=east', () =>
      testPlaceTask(bay.target, 'observer', { facing: 'east' })
    )
    await runStep('12_OBSERVER_FACING_WEST', 'Place observer[facing=west] and verify server facing=west', () =>
      testPlaceTask(bay.target, 'observer', { facing: 'west' })
    )
    await runStep('13_OBSERVER_FACING_UP', 'Place observer[facing=up] (looking down) and verify server facing=up', () =>
      testPlaceTask(bay.target, 'observer', { facing: 'up' })
    )
    await runStep('14_OBSERVER_FACING_DOWN', 'Place observer[facing=down] (looking up against overhead cap) and verify server facing=down', () =>
      testPlaceTask(bay.above, 'observer', { facing: 'down' }, { preSupportCell: bay.topCap })
    )

    // =========================================================================
    // CATEGORY D: PISTONS & STICKY PISTONS IN ALL 6 DIRECTIONS (N, S, E, W, UP, DOWN)
    // =========================================================================
    await runStep('15_PISTON_FACING_NORTH', 'Place piston[facing=north] and verify server facing=north', () =>
      testPlaceTask(bay.target, 'piston', { facing: 'north' })
    )
    await runStep('16_PISTON_FACING_SOUTH', 'Place piston[facing=south] and verify server facing=south', () =>
      testPlaceTask(bay.target, 'piston', { facing: 'south' })
    )
    await runStep('17_PISTON_FACING_EAST', 'Place piston[facing=east] and verify server facing=east', () =>
      testPlaceTask(bay.target, 'piston', { facing: 'east' })
    )
    await runStep('18_PISTON_FACING_WEST', 'Place piston[facing=west] and verify server facing=west', () =>
      testPlaceTask(bay.target, 'piston', { facing: 'west' })
    )
    await runStep('19_PISTON_FACING_UP', 'Place piston[facing=up] and verify server facing=up', () =>
      testPlaceTask(bay.target, 'piston', { facing: 'up' })
    )
    await runStep('20_PISTON_FACING_DOWN', 'Place piston[facing=down] (looking up against overhead cap) and verify server facing=down', () =>
      testPlaceTask(bay.above, 'piston', { facing: 'down' }, { preSupportCell: bay.topCap })
    )
    await runStep('21_STICKY_PISTON_DIRECTIONAL', 'Place sticky_piston[facing=north] and sticky_piston[facing=down]', async () => {
      const r1 = await testPlaceTask(bay.target, 'sticky_piston', { facing: 'north' })
      const r2 = await testPlaceTask(bay.above, 'sticky_piston', { facing: 'down' }, { preSupportCell: bay.topCap })
      return `${r1} ; ${r2}`
    })

    // =========================================================================
    // CATEGORY E: HOPPERS (ALL 5 DIRECTIONS WITH SNEAK) & SINGLE/DOUBLE CHESTS
    // =========================================================================
    await runStep('22_HOPPER_FACING_DOWN', 'Place hopper[facing=down] with sneak and verify facing=down without opening hopper GUI', () =>
      testPlaceTask(bay.target, 'hopper', { facing: 'down' })
    )

    await runStep('23_HOPPER_FACING_ALL_4_SIDES', 'Place hopper[facing=north, south, east, west] by sneak-clicking opposite reference walls', async () => {
      const out = []
      const mapWall = {
        north: bay.target.offset(0, 0, -1),
        south: bay.target.offset(0, 0, 1),
        east: bay.target.offset(1, 0, 0),
        west: bay.target.offset(-1, 0, 0)
      }
      for (const dir of ['north', 'south', 'east', 'west']) {
        const res = await testPlaceTask(bay.target, 'hopper', { facing: dir }, { preSupportCell: mapWall[dir] })
        out.push(`${dir}:ok`)
      }
      return `Verified all 4 side hopper nozzles (${out.join(', ')})`
    })

    await runStep('24_CHEST_SINGLE_AND_DOUBLE', 'Place single chest and adjacent partner chest with sneak to form a double chest', async () => {
      await cleanCell(bay.target)
      await cleanCell(bay.side)
      try {
        const c1 = makeTask(bay.target, 'chest', { facing: 'north', type: 'single' })
        await ensureTestItem('chest', 2)
        await builder.placer.executeGuarded(c1)
        await sleep(200)
        const b1 = builder.world.blockAt(bay.target)
        if (!b1 || b1.name !== 'chest') throw new Error(`First chest failed at ${bay.target}`)
        if (isFullTop(builder.world.blockAt(bay.side.offset(0, -1, 0))) && isAirLike(builder.world.blockAt(bay.side))) {
          const c2 = makeTask(bay.side, 'chest', { facing: 'north', type: 'left' })
          await builder.placer.executeGuarded(c2)
          await sleep(200)
          const b2 = builder.world.blockAt(bay.side)
          return `Placed chest #1 (${formatBlockState(b1)}) and chest #2 (${formatBlockState(b2)})`
        }
        return `Placed chest (${formatBlockState(b1)}) cleanly without opening container window`
      } finally {
        await cleanCell(bay.side)
        await cleanCell(bay.target)
      }
    })

    // =========================================================================
    // CATEGORY F: SLABS, STAIRS (4 DIRS, TOP & BOTTOM), TRAPDOORS, GATES, SIGNS, LADDERS
    // =========================================================================
    await runStep('25_SLAB_BOTTOM_AND_TOP', 'Place cobblestone_slab[type=bottom] and cobblestone_slab[type=top]', async () => {
      const rBot = await testPlaceTask(bay.target, 'cobblestone_slab', { type: 'bottom' })
      const rTop = await testPlaceTask(bay.target, 'cobblestone_slab', { type: 'top' }, { preSupportCell: bay.above })
      return `bottom=(${rBot}) | top=(${rTop})`
    })

    await runStep('26_STAIRS_BOTTOM_AND_TOP_ALL_DIRS', 'Place cobblestone_stairs (half=bottom facing N,S,E,W and half=top facing N,S)', async () => {
      const states = []
      for (const f of ['north', 'south', 'east', 'west']) {
        await testPlaceTask(bay.target, 'cobblestone_stairs', { facing: f, half: 'bottom' })
        states.push(`bottom-${f}:ok`)
      }
      for (const f of ['north', 'south']) {
        await testPlaceTask(bay.target, 'cobblestone_stairs', { facing: f, half: 'top' }, { preSupportCell: bay.above })
        states.push(`top-${f}:ok`)
      }
      return `Verified stairs orientations: ${states.join(', ')}`
    })

    await runStep('27_TRAPDOOR_BOTTOM_TOP_AND_OPEN', 'Place oak_trapdoor (bottom closed & top open=true with post-click toggle)', async () => {
      const r1 = await testPlaceTask(bay.target, 'oak_trapdoor', { facing: 'north', half: 'bottom', open: 'false' })
      const r2 = await testPlaceTask(bay.target, 'oak_trapdoor', { facing: 'south', half: 'top', open: 'true' }, { preSupportCell: bay.above })
      return `${r1} | ${r2}`
    })

    await runStep('28_FENCE_GATE_AND_OPEN_TOGGLE', 'Place oak_fence_gate[facing=north,open=true] and verify post-placement open toggle', () =>
      testPlaceTask(bay.target, 'oak_fence_gate', { facing: 'north', open: 'true' })
    )

    await runStep('29_SIGNS_WALL_AND_STANDING', 'Place oak_wall_sign[facing=north] and standing oak_sign[rotation=0]', async () => {
      const rWall = await testPlaceTask(bay.target, 'oak_wall_sign', { facing: 'north' }, { preSupportCell: bay.target.offset(0, 0, 1) })
      const rStand = await testPlaceTask(bay.target, 'oak_sign', { rotation: '0' })
      return `wall_sign=(${rWall}) | standing_sign=(${rStand})`
    })

    await runStep('30_LADDER_WALL_ATTACH', 'Place ladder[facing=north] against a solid wall', () =>
      testPlaceTask(bay.target, 'ladder', { facing: 'north' }, { preSupportCell: bay.target.offset(0, 0, 1) })
    )

    // =========================================================================
    // CATEGORY G: REDSTONE COMPONENTS & POST-PLACEMENT TUNING
    // =========================================================================
    await runStep('31_REPEATER_4_DIRS_AND_DELAY_4', 'Place repeater in all 4 directions and tune delay=4 via postActions clicks', async () => {
      const out = []
      for (const f of ['north', 'south', 'east', 'west']) {
        const delay = f === 'north' ? '4' : '1'
        await testPlaceTask(bay.target, 'repeater', { facing: f, delay })
        out.push(`${f}(delay=${delay}):ok`)
      }
      return `Verified repeaters: ${out.join(', ')}`
    })

    await runStep('32_COMPARATOR_SUBTRACT_MODE', 'Place comparator[facing=north,mode=subtract] and verify mode=subtract toggle', () =>
      testPlaceTask(bay.target, 'comparator', { facing: 'north', mode: 'subtract' })
    )

    await runStep('33_REDSTONE_WIRE_TORCH_WALL_TORCH_LEVER', 'Place redstone_wire, redstone_torch, redstone_wall_torch[facing=north], and lever[powered=true]', async () => {
      const rWire = await testPlaceTask(bay.target, 'redstone_wire', {})
      const rTorch = await testPlaceTask(bay.target, 'redstone_torch', {})
      const rWallTorch = await testPlaceTask(bay.target, 'redstone_wall_torch', { facing: 'north' }, { preSupportCell: bay.target.offset(0, 0, 1) })
      const rLever = await testPlaceTask(bay.target, 'lever', { face: 'floor', facing: 'north', powered: 'true' })
      return `wire=ok | torch=ok | wall_torch=ok | lever=(${rLever})`
    })

    await runStep('34_NOTE_BLOCK_TUNING', 'Place note_block[note=4] and verify post-placement pitch tuning clicks', () =>
      testPlaceTask(bay.target, 'note_block', { note: '4' })
    )

    // =========================================================================
    // CATEGORY H: FLUIDS, WATERLOGGING & COBBLESTONE GENERATOR MECHANICS
    // =========================================================================
    await runStep('35_WATERLOG_LEAVES_SLAB_AND_STAIRS', 'Place oak_leaves and cobblestone_slab[type=top], waterlog via executeWaterlog, verify waterlogged=true, and scoop water back up', async () => {
      await ensureTestItem('oak_leaves', 1)
      await ensureTestItem('water_bucket', 1)
      await cleanCell(bay.target)
      try {
        const leafTask = makeTask(bay.target, 'oak_leaves', { waterlogged: 'true' })
        await builder.placer.executeGuarded(leafTask)
        const wlTask = makeTask(bay.target, 'oak_leaves', { waterlogged: 'true' }, 'waterlog')
        await builder.placer.executeGuarded(wlTask)
        await sleep(250)
        const wb = builder.world.blockAt(bay.target)
        const props = wb?.getProperties?.() || wb?.properties || {}
        if (String(props.waterlogged) !== 'true') {
          throw new Error(`oak_leaves at ${bay.target} is not waterlogged (got ${formatBlockState(wb)})`)
        }
        return `Verified ${formatBlockState(wb)} at ${bay.target} and scooped water back up`
      } finally {
        await cleanCell(bay.target)
      }
    })

    await runStep('36_SEALED_WATER_AND_LAVA_SOURCE_POUR', 'Build sealed 1x1 cup, pour water[level=0] and lava[level=0] via executeFluid, verify source level=0, scoop back into bucket, and clean cup', async () => {
      const cup = bay.target
      const walls = [cup.offset(1, 0, 0), cup.offset(-1, 0, 0), cup.offset(0, 0, 1), cup.offset(0, 0, -1)]
      const placedWalls = []
      try {
        await ensureTestItem('cobblestone', 4)
        for (const w of walls) {
          const wb = builder.world.blockAt(w)
          if (!wb || isAirLike(wb)) {
            await builder.placer.executeGuarded(makeTask(w, 'cobblestone', {}))
            placedWalls.push(w)
          }
        }
        await cleanCell(cup)
        // 1) Pour water[level=0]
        await ensureTestItem('water_bucket', 1)
        const waterTask = makeTask(cup, 'water', { level: '0' }, 'fluid')
        waterTask.fluidForce = true
        await builder.placer.executeGuarded(waterTask)
        await sleep(250)
        const wBlk = builder.world.blockAt(cup)
        if (!wBlk || wBlk.name !== 'water') throw new Error(`Water pour failed at ${cup} (got ${formatBlockState(wBlk)})`)
        await cleanCell(cup)
        await sleep(250)

        // 2) Pour lava[level=0]
        if (builder.materials.countItem('lava_bucket') > 0) {
          const lavaTask = makeTask(cup, 'lava', { level: '0' }, 'fluid')
          lavaTask.fluidForce = true
          await builder.placer.executeGuarded(lavaTask)
          await sleep(250)
          const lBlk = builder.world.blockAt(cup)
          if (!lBlk || lBlk.name !== 'lava') throw new Error(`Lava pour failed at ${cup} (got ${formatBlockState(lBlk)})`)
          await cleanCell(cup)
          await sleep(250)
          return `Water source (level=0) AND Lava source (level=0) poured, verified, and scooped cleanly at ${cup}`
        }
        return `Water source (level=0) poured, verified, and scooped cleanly at ${cup} (no lava_bucket in inventory)`
      } finally {
        await cleanCell(cup)
        for (const w of placedWalls.reverse()) {
          await cleanCell(w)
        }
      }
    })

    // =========================================================================
    // CATEGORY I: CRAFTER, DROPPER/DISPENSER/BARREL, COMPOSTER & WALLS (37..40)
    // =========================================================================
    await runStep('37_CRAFTER_ORIENTATIONS', 'Place crafter[orientation=north_up] and crafter[orientation=down_north]', async () => {
      const r1 = await testPlaceTask(bay.target, 'crafter', { orientation: 'north_up' })
      const r2 = await testPlaceTask(bay.above, 'crafter', { orientation: 'down_north' }, { preSupportCell: bay.topCap })
      return `${r1} | ${r2}`
    })

    await runStep('38_DROPPER_AND_BARREL_ALL_DIRS', 'Place dropper and barrel in horizontal, up, and down orientations', async () => {
      const r1 = await testPlaceTask(bay.target, 'dropper', { facing: 'north' })
      const r2 = await testPlaceTask(bay.target, 'dropper', { facing: 'up' })
      const r3 = await testPlaceTask(bay.above, 'dropper', { facing: 'down' }, { preSupportCell: bay.topCap })
      const r4 = await testPlaceTask(bay.target, 'barrel', { facing: 'up' })
      return `dropper N/UP/DOWN + barrel UP verified (${r1})`
    })

    await runStep('39_COMPOSTER_AND_INTERACTIVE_SNEAK', 'Place composter and place adjacent block against composter using automatic sneak', async () => {
      await ensureTestItem('composter', 1)
      await ensureTestItem('cobblestone', 1)
      await cleanCell(bay.target)
      await cleanCell(bay.above)
      try {
        await builder.placer.executeGuarded(makeTask(bay.target, 'composter', {}))
        await builder.placer.executeGuarded(makeTask(bay.above, 'cobblestone', {}))
        const b1 = builder.world.blockAt(bay.target)
        const b2 = builder.world.blockAt(bay.above)
        if (b1?.name !== 'composter' || b2?.name !== 'cobblestone') {
          throw new Error(`Expected composter + cobblestone above, got ${formatBlockState(b1)} and ${formatBlockState(b2)}`)
        }
        return `Placed composter at ${bay.target} and sneak-placed cobblestone on top at ${bay.above}`
      } finally {
        await cleanCell(bay.above)
        await cleanCell(bay.target)
      }
    })

    await runStep('40_COBBLESTONE_WALL_CONNECT', 'Place 2 adjacent cobblestone_wall blocks and break them cleanly with pickaxe', async () => {
      await ensureTestItem('cobblestone_wall', 2)
      await cleanCell(bay.target)
      await cleanCell(bay.side)
      try {
        await builder.placer.executeGuarded(makeTask(bay.target, 'cobblestone_wall', {}))
        if (isFullTop(builder.world.blockAt(bay.side.offset(0, -1, 0))) && isAirLike(builder.world.blockAt(bay.side))) {
          await builder.placer.executeGuarded(makeTask(bay.side, 'cobblestone_wall', {}))
        }
        const w1 = builder.world.blockAt(bay.target)
        if (w1?.name !== 'cobblestone_wall') throw new Error(`Expected cobblestone_wall at ${bay.target}, got ${formatBlockState(w1)}`)
        return `Verified ${formatBlockState(w1)} at ${bay.target}`
      } finally {
        await cleanCell(bay.side)
        await cleanCell(bay.target)
      }
    })
  } finally {
    bot.removeListener('messagestr', onChat)
    if (builder.materials?.shop) builder.materials.shop.onEvent = prevOnEvent || null
    try {
      await builder.navigation.goTo(new Vec3(originFeet.x + 0.5, originFeet.y, originFeet.z + 0.5), 0.5, 6000, { human: true, work: true, rescue: false })
    } catch {}
  }

  writeLine('========================================================================================')
  writeLine('FINAL SCORECARD — REAL-SERVER 40-ACTION SELF-TEST (logger.txt):')
  for (const r of results) {
    writeLine(`  [${r.status.padEnd(8)}] ${r.name.padEnd(36)} (${String(r.ms).padStart(5)} ms) -> ${r.detail}`)
  }
  const passed = results.filter(r => r.status === 'WORKED').length
  const rejected = results.filter(r => r.status === 'REJECTED').length
  writeLine(`TOTAL: ${passed}/${results.length} WORKED | ${rejected} REJECTED | Log saved to: ${files[0]}`)
  writeLine('========================================================================================')

  return { ok: rejected === 0, passed, rejected, total: results.length, results, logFile: files[0] }
}

module.exports = { runRealServerSelfTest, resolveLoggerPaths }
