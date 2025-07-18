import { describe, expect, it } from 'vitest'

describe('Repro contract', () => {
  it('Knows arithmetic', () => {
    expect(1.5).toBe(1.5)
    expect(1.4 * 2).toBe(2.8)
    expect(3 / 2).toBeCloseTo(1.5) // fails: 3 / 2 == 1 when puya-ts-transformer is enabled
  })
})
