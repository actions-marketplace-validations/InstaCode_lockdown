const verifyUser = require('./verifyUser');


test('verify user as true', () => {
     expect(verifyUser('jason-edstrom', 'jason-edstrom, dependabot-preview')).toEqual(true);
});

test('verify user as false', () => {
     expect(verifyUser('fake-user', 'jason-edstrom, dependabot-preview')).toEqual(false);
});