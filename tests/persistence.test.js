'use strict'

const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('fs/promises')
const os = require('os')
const path = require('path')
const { Persistence } = require('../src/state/persistence')

test('active job persistence survives atomic save/load and can be cleared', async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'human-builder-'))
  try {
    const persistence = new Persistence(dir)
    const active = { file: '/tmp/example.schem', origin: { x: 1, y: 2, z: 3 }, rotation: 90, jobId: 'example' }
    await persistence.saveActive(active)
    assert.deepEqual(await persistence.loadActive(), active)
    await persistence.clearActive()
    assert.equal(await persistence.loadActive(), null)
  } finally {
    await fs.rm(dir, { recursive: true, force: true })
  }
})
