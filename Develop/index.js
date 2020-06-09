const inquirer = require("inquirer");
const api = require("./utils/api.js");
const generateMarkdown = require("./utils/generateMarkdown.js");
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your username?",
  },
  {
    type: "input",
    name: "title",
    message: "what is your project",
  },
  {
    type: "list",
    name: "license",
    message: "what kind of license for project",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD3", "None"],
  },
];

function writeToFile(fileName, data) {}

function init() {
  inquirer.prompt(questions).then((userResponse) => {
    api.getUser(userResponse.github).then((gitResponse) => {
      writeToFile(
        "README.md",
        generateMarkdown({ ...userResponse, ...gitResponse })
      );
    });
  });
}

init();
