import * as verify from '../src/verify'

test('verify user as true', async () => {
  expect(
    verify.verifyUser('jason-edstrom', 'jason-edstrom, dependabot-preview')
  ).toBe(true)
})

test('verify user as false', async () => {
  expect(
    verify.verifyUser('fake-user', 'jason-edstrom, dependabot-preview')
  ).toBe(false)
})
