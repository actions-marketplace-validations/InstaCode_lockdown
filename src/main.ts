import * as core from '@actions/core'
import * as github from '@actions/github'
import * as verify from './verify'

let username = github.context.actor;

async function run(): Promise<void> {
  try {
    core.debug("Verifying that username ${username} is approved for running builds");
    const usernames = core.getInput('users').trim();
    core.info(usernames);
    const verified =  verify.verifyUser(username, usernames);

    if (!verified)
    {
      core.setFailed("User " + username + "is not approved to execute builds on the pipeline");
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
