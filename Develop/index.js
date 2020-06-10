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
    message: "what is your project",
  },
  {
    type: "input",
    name: "desc",
    message: " describe your project",
  },
  {
    type: "checkbox",
    message: "Select installation requirements:",
    name: "Node_Modules",
    choices: ["axios", "util", "inquirer", "path", "dotenv"],
  },
  {
    type: "list",
    name: "license",
    message: "what kind of license for project",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD3", "None"],
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
      console.log(userResponse);
      console.log(gitResponse.data);
    });
  });
}
//data.avatar_url is the picture
//data.avatar_url is the email

init();
