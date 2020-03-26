import * as verify from '../src/verify'

describe('Verify User Tests', function () {
  it('Verify User As True', () => {
    expect(
      verify.verifyUser('jason-edstrom', 'jason-edstrom, dependabot-preview')
    ).toBe(true)
  })

  it('Verify User As False', () => {
    expect(
      verify.verifyUser('fake-user', 'jason-edstrom, dependabot-preview')
    ).toBe(false)
  })
})

describe('Verify Owner Tests', () => {
  it('Verify User As Owner', () => {
    expect(verify.verifyOwner('jason-edstrom')).toBe(true)
  })
})
