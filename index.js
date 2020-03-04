const core = require('@actions/core');
const github = require('@actions/github');
const collaborator = require('./collaborator');


const octokit = new github.GitHub(process.env.GITHUB_TOKEN);

const username = github.context.actor;

async function run() {
    core.debug("Verifying that username is approved for running builds");
    const usernames = core.getInput('users');
    core.info(usernames);
}


