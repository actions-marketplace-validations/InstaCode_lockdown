
function verifyUser(username, input) {
    let listOfUsernames = input.split(',');
    return listOfUsernames.includes(username);
}

module.exports = verifyUser;



