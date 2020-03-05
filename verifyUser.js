const core = require('@actions/core');


function verifyUser(username) {
    let input = core.getInput('users');
    let listOfUsernames = input.split(',');
    for (const entry of listOfUsernames.entries()) {
        if (username === entry){
            return true;
        }
    }
   return false;
}

module.exports = verifyUser;



