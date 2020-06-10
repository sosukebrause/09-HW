const inquirer = require("inquirer");
const api = require("./utils/api.js");
const fs = require("fs");
const util = require("util");
// const generateMarkdown = require("./utils/generateMarkdown.js");
const config = { headers: { accept: "application/json" } };
const axios = require("axios");

const appendFileAsync = util.promisify(fs.appendFile);

inquirer
  .prompt([
    {
      type: "input",
      name: "username",
      message: "What is your username?",
    },
    // {
    //   type: "input",
    //   name: "title",
    //   message: "what is your project",
    // },
    {
      type: "list",
      name: "license",
      message: "what kind of license for project",
      choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD3", "None"],
    },
  ])
  .then(function ({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=5`;
    axios.get(queryUrl, config).then((res) => {
      const repoNames = res.data.map((repo) => repo.name);
      const repoNamesStr = repoNames.join("\n");
      console.log(repoNamesStr);
      console.log(res.data);

      fs.appendFile(
        "myREADME.md",
        "\n" + JSON.stringify(repoNames) + "\n",
        (err) => {
          if (err) throw err;
          console.log("Saved");
        }
      );
    });
  });
