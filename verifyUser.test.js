const verifyUser = require('./verifyUser');


test('verify user as true', () => {
     expect(verifyUser('jason-edstrom')).truthy();
});

test('verify user as false', () => {
     expect(verifyUser('fake-user')).falsy();
});