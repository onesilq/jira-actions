const core = require("@actions/core");
const github = require("@actions/github");

const jiraPrefix = core.getInput("project-prefix");
const prName = core.getInput("project-pr");

async function run() {
  try {

    let regex = new RegExp(`${jiraPrefix}-[0-9]+`);
    if (jiraPrefix==null || prName == null || !regex.test(prName)) {
      core.setFailed("Jira Issue Key missing in PR title or description.");
      return;
    }
  } catch (error) {
    core.info(error);
  }
}

run();
