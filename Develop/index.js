const inquirer = require("inquirer");
const api = require("./utils/api.js");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const util = require("util");
const path = require("path");
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your username?",
  },
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "desc",
    message: " Describe your project",
  },
  {
    type: "checkbox",
    message: "Select Node installation requirements:",
    name: "npm",
    choices: ["axios", "util", "inquirer", "path", "dotenv"],
  },
  {
    type: "input",
    message: "Enter any other tools required to run application",
    name: "install",
  },
  {
    type: "input",
    message: "What is the intended use of this project?",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter commands necessary to test this application",
    name: "test",
  },
  {
    type: "list",
    name: "license",
    message: "Select licenses used in this project",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD3", "None"],
  },
  {
    type: "confirm",
    message: "Are there any contributors to credit?",
    name: "contributorQuery",
  },
  {
    type: "input",
    message: "Enter github usernames separated by commas to add contributors:",
    name: "contributorRes",
    when: (answers) => answers.contributorQuery === true,
  },
];

function writeToFile(fileName, data) {
  var answer = JSON.stringify(data);
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then((userResponse) => {
    api.getUser(userResponse.github).then((gitResponse) => {
      writeToFile(
        "myREADME.md",
        generateMarkdown({ ...userResponse, ...gitResponse.data })
      );
      // console.log(userResponse);
      console.log(gitResponse.data);
      console.log("File created");
    });
  });
}
//data.avatar_url is the picture
//data.avatar_url is the email

init();
