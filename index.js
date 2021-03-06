// Establishing module requirements
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// Prompting user for input
function userPrompts() {
  return inquirer.prompt([
    {
      type: "input",
      name: "repo",
      message: "Please provide the repo (case-sensitive) of the application" 
    },
    {
      type: "input",
      name: "githubUsername",
      message: "Please provide username to Github" 
    },
    {
      type: "input",
      name: "email",
      message: "Please provide email for further contact" 
    },
    {
      type: "input",
      name: "title",
      message: "Please provide the title of the application" 
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a unique, thorough description of the application" 
    },
    {
      type: "input",
      name: "screenshot",
      message: "Please provide EXACT name (.file name as well) and path of screenshot img" 
    },
    {
      type: "input",
      name: "url",
      message: "Please provide complete URL of deployed project" 
    },
    {
      type: "input",
      name: "installation",
      message: "Please provide installation instructions" 
    },
    {
      type: "input",
      name: "usage",
      message: "Please describe usage of the application" 
    },
    {
      type: "list",
      name: "license",
      choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause Simplified License", "BSD 3-Clause New/Revised License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser Public License v2.1", "Mozilla Public License 2.0", "The Unilicense"],
      message: "Please select licensing" 
    },
    {
      type: "input",
      name: "contributing",
      message: "Please provide those that contributed to the application" 
    },
    {
      type: "input",
      name: "tests",
      message: "Please provide any testing material of the application" 
    },
  ]);
}

// Calling function that prompts user for input, then creates README.md with response
userPrompts()
  .then(function(res) {
    const md = generateMarkdown.generateMarkdown(res);

    return writeFileAsync("README.md", md);
  })
  .then(function () {
    console.log("Successful creation of README");
  })
  .catch(function(err) {
    console.log(err);
  });