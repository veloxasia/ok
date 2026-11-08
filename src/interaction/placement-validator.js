'use strict'
// Client-legal placement validator (`Deliverable 2`).
// Rejects any block/fluid/waterlog placement that a real Minecraft 1.21.11 survival client cannot make:
//   1. Normal blocks (stone_bricks, cobblestone, black_concrete, etc.): must have a solid non-air adjacent
//      reference block at `support.refPos` (`|dx|+|dy|+|dz| === 1`) and unobstructed line-of-sight to the clicked face.
//   2. Crosshair / Reach: eye-to-hit distance must be within survival reach (<= 4.5m, or <= 5.0m creative),
//      crosshair ray must settle on `FACE_INDEX[faceName]` of `refPos`, and side-face clicks from `y + 1` must
//      have sufficient front overhang (`frontDist >= 0.18`) so the ray never clips the top face (`face 1`).
//   3. `observer`: look direction (`dominantDirection(dir)`) must produce the exact schematic `facing` state
//      with sufficient vertical/horizontal margin, and reference support must exist before clicking.
//   4. `piston` / `sticky_piston`: look direction must produce the exact schematic `facing` state, newly placed
//      pistons cannot be forced into `extended=true` without redstone, and head space must be valid.
//   5. `oak_leaves[waterlogged=true]`: leaf block must be placed against solid support first; waterlogging with a
//      water bucket is only valid once the leaf block exists at `target` and the ray hits `target` directly.

const { FACE_INDEX, VEC } = require('../rules/blocks')
const { isAirLike } = require('../world/ground')

function dominantDir (d) {
  const ax = Math.abs(d.x); const ay = Math.abs(d.y); const az = Math.abs(d.z)
  if (ay >= ax && ay >= az) return d.y >= 0 ? 'up' : 'down'
  if (ax >= az) return d.x >= 0 ? 'east' : 'west'
  return d.z >= 0 ? 'south' : 'north'
}

function horizontalDir (d) {
  if (Math.abs(d.x) > Math.abs(d.z)) return d.x >= 0 ? 'east' : 'west'
  return d.z >= 0 ? 'south' : 'north'
}

/**
 * Validates whether a proposed placement is legal for a real Minecraft client.
 *
 * @param {object} target - Target world coordinates `{ x, y, z }`
 * @param {object} state  - Desired block/task state `{ name, kind, properties, spec, allowAirPlace }`
 * @param {object} aim    - Aim state `{ eye, hit, dir, faceName, rayHit, poseLost, onGround, isInWater, velocityY }`
 * @param {object} support - Support state `{ refPos, refBlock, targetBlock, leafPresent }`
 * @param {number|object} reach - Max reach distance (default `4.5` survival) or `{ maxReach, gamemode }`
 * @returns {{ valid: boolean, code?: string, reason?: string }}
 */
function validatePlacement (target, state = {}, aim = null, support = {}, reach = 4.5) {
  if (!target || typeof target.x !== 'number' || typeof target.y !== 'number' || typeof target.z !== 'number') {
    return { valid: false, code: 'INVALID_TARGET', reason: 'target coordinates missing' }
  }
  if (!aim || aim.poseLost || !aim.eye || !aim.hit) {
    return { valid: false, code: 'NO_POSE', reason: 'pose lost or aim solution missing' }
  }

  // Reject placing while free-falling in mid-air (unless in water or intentional jump-pillar under feet)
  const vy = Number(aim.velocityY ?? 0)
  if (aim.onGround === false && !aim.isInWater && vy < -0.09 && !state.allowAirPlace) {
    return { valid: false, code: 'NOT_GROUNDED', reason: `bot is falling (vy=${vy.toFixed(2)})` }
  }

  const maxReach = typeof reach === 'number'
    ? reach
    : (reach?.gamemode === 'creative' ? 5.0 : Number(reach?.maxReach || 4.5))

  const dxHit = aim.hit.x - aim.eye.x
  const dyHit = aim.hit.y - aim.eye.y
  const dzHit = aim.hit.z - aim.eye.z
  const dist = Math.hypot(dxHit, dyHit, dzHit)
  if (dist > maxReach + 1e-4) {
    return {
      valid: false,
      code: 'OUT_OF_REACH',
      reason: `hit distance ${dist.toFixed(2)}m exceeds max reach ${maxReach.toFixed(2)}m`
    }
  }

  const dir = aim.dir || { x: dxHit, y: dyHit, z: dzHit }
  const dirLen = Math.hypot(dir.x, dir.y, dir.z) || 1
  const kind = state.kind || 'block'
  const blockName = String(state.name || '')
  const props = state.properties || state.cmp || {}
  const faceName = aim.faceName || (aim.faceOpt && aim.faceOpt.f) || null
  const refPos = support?.refPos || aim.ref || null
  const refBlock = support?.refBlock || null

  // Waterlogging validation (`oak_leaves[waterlogged=true]`, etc.)
  if (kind === 'waterlog' || (props.waterlogged === 'true' || props.waterlogged === true) && state.isBucketUse) {
    const targetBlock = support?.targetBlock || refBlock
    const leafHere = Boolean(
      support?.leafPresent ||
      (targetBlock && !isAirLike(targetBlock) && /(_leaves$|mangrove_roots|_slab$|_stairs$|_trapdoor$|_wall$|_fence$)/.test(targetBlock.name || ''))
    )
    if (!leafHere) {
      return {
        valid: false,
        code: 'INVALID_WATERLOG_STATE',
        reason: `cannot waterlog ${blockName || 'block'} at ${target.x},${target.y},${target.z} before the host block exists in world`
      }
    }
    if (refPos && (refPos.x !== target.x || refPos.y !== target.y || refPos.z !== target.z)) {
      return {
        valid: false,
        code: 'INVALID_WATERLOG_STATE',
        reason: `waterlog bucket must click target block ${target.x},${target.y},${target.z} directly, not ${refPos.x},${refPos.y},${refPos.z}`
      }
    }
    return { valid: true }
  }

  // Rule 1: Solid adjacent reference block check
  if (!refPos) {
    return { valid: false, code: 'NO_SUPPORT', reason: `no reference position for ${blockName} at ${target.x},${target.y},${target.z}` }
  }
  const manhattan = Math.abs(target.x - refPos.x) + Math.abs(target.y - refPos.y) + Math.abs(target.z - refPos.z)
  if (manhattan !== 1) {
    return {
      valid: false,
      code: 'NO_SUPPORT',
      reason: `reference block ${refPos.x},${refPos.y},${refPos.z} is not adjacent to target ${target.x},${target.y},${target.z} (dist=${manhattan})`
    }
  }
  if (!refBlock || isAirLike(refBlock) || refBlock.boundingBox !== 'block' || /^(water|lava)$/.test(refBlock.name || '')) {
    return {
      valid: false,
      code: 'NO_SUPPORT',
      reason: `reference cell ${refPos.x},${refPos.y},${refPos.z} has no solid block (found ${refBlock?.name || 'air'})`
    }
  }

  // Rule 2: Clicked face & crosshair alignment check
  if (!faceName || !(faceName in FACE_INDEX)) {
    return { valid: false, code: 'BAD_AIM_FACE', reason: `invalid clicked face "${faceName}"` }
  }
  const fv = VEC[faceName]
  if (fv && (refPos.x + fv[0] !== target.x || refPos.y + fv[1] !== target.y || refPos.z + fv[2] !== target.z)) {
    return {
      valid: false,
      code: 'BAD_AIM_FACE',
      reason: `clicked face ${faceName} on ${refPos.x},${refPos.y},${refPos.z} does not place into ${target.x},${target.y},${target.z}`
    }
  }
  if (fv) {
    const normalDot = (dir.x * fv[0] + dir.y * fv[1] + dir.z * fv[2]) / dirLen
    if (normalDot >= -0.01) {
      return {
        valid: false,
        code: 'BAD_AIM_FACE',
        reason: `look ray points away from face ${faceName} (dot=${normalDot.toFixed(3)})`
      }
    }
    // Side-face overhang check when standing above `refPos.y + 1.0` (eliminates "ray hit face 1, wanted 2/3/4/5")
    if ((fv[0] !== 0 || fv[2] !== 0) && aim.eye.y > refPos.y + 1.0) {
      const frontDist = -(dir.x * fv[0] + dir.z * fv[2])
      if (frontDist < 0.16) {
        return {
          valid: false,
          code: 'BAD_AIM_FACE',
          reason: `insufficient overhang (frontDist=${frontDist.toFixed(3)}) to see side face ${faceName} from above without clipping top face`
        }
      }
    }
  }
  if (aim.rayHit) {
    const rh = aim.rayHit
    if (rh.position && (rh.position.x !== refPos.x || rh.position.y !== refPos.y || rh.position.z !== refPos.z)) {
      return {
        valid: false,
        code: 'RAY_OCCLUDED',
        reason: `crosshair ray hit ${rh.name || 'block'} at ${rh.position.x},${rh.position.y},${rh.position.z} instead of ${refPos.x},${refPos.y},${refPos.z}`
      }
    }
    if (typeof rh.face === 'number' && rh.face !== FACE_INDEX[faceName]) {
      return {
        valid: false,
        code: 'BAD_AIM_FACE',
        reason: `crosshair ray hit face ${rh.face}, wanted ${FACE_INDEX[faceName]} (${faceName})`
      }
    }
  }

  // Rule 3: Observer orientation & state validation
  if (blockName === 'observer') {
    const wantedFacing = props.facing || state.spec?.look
    if (wantedFacing) {
      const gotFacing = dominantDir(dir)
      if (gotFacing !== wantedFacing) {
        return {
          valid: false,
          code: 'INVALID_OBSERVER_STATE',
          reason: `observer look direction yields facing=${gotFacing}, wanted facing=${wantedFacing}`
        }
      }
      if (wantedFacing === 'up' || wantedFacing === 'down') {
        if (Math.abs(dir.y) / dirLen < 0.68) {
          return {
            valid: false,
            code: 'INVALID_OBSERVER_STATE',
            reason: `vertical observer pitch too shallow (|dy|/len=${(Math.abs(dir.y) / dirLen).toFixed(2)} < 0.68)`
          }
        }
      } else {
        if (Math.abs(dir.y) / dirLen > 0.55 || horizontalDir(dir) !== wantedFacing) {
          return {
            valid: false,
            code: 'INVALID_OBSERVER_STATE',
            reason: `horizontal observer look angle too steep (|dy|/len=${(Math.abs(dir.y) / dirLen).toFixed(2)})`
          }
        }
      }
    }
  }

  // Rule 4: Piston / sticky_piston orientation & state validation
  if (blockName === 'piston' || blockName === 'sticky_piston') {
    const wantedFacing = props.facing || state.spec?.look
    if (wantedFacing) {
      const gotFacing = dominantDir(dir)
      if (gotFacing !== wantedFacing) {
        return {
          valid: false,
          code: 'INVALID_PISTON_STATE',
          reason: `${blockName} look direction yields facing=${gotFacing}, wanted facing=${wantedFacing}`
        }
      }
    }
    if ((props.extended === 'true' || props.extended === true) && state.enforceUnpoweredExtended === true) {
      return {
        valid: false,
        code: 'INVALID_PISTON_STATE',
        reason: `${blockName} cannot be directly placed in extended=true state without redstone activation`
      }
    }
  }

  return { valid: true }
}

module.exports = { validatePlacement, dominantDir, horizontalDir }
