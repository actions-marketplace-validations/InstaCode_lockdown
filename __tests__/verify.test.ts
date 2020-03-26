import * as verify from '../src/verify'

describe('Verify User Tests', function () {
  it('verify user as true', () => {
    expect(
      verify.verifyUser('jason-edstrom', 'jason-edstrom, dependabot-preview')
    ).toBe(true)
  })

  it('verify user as false', () => {
    expect(
      verify.verifyUser('fake-user', 'jason-edstrom, dependabot-preview')
    ).toBe(false)
  })
})
