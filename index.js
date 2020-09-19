// Start Program
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./generateMarkdown");

function userPrompts() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Please enter the title of the application" 
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a unique, thorough description of the application" 
    },
    {
      type: "input",
      name: "tableOfContents",
      message: "Please provide table of contents" 
    },
    {
      type: "input",
      name: "installation",
      message: "Please provide installation" 
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide usage" 
    },
    {
      type: "list",
      name: "license",
      choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause Simplified License", "BSD 3-Clause New/Revised License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser Public License v2.1", "Mozilla Public License 2.0", "The Unilicense"],
      message: "Please provide license" 
    },
    {
      type: "input",
      name: "contributing",
      message: "Please provide contributing" 
    },
    {
      type: "input",
      name: "tests",
      message: "Please provide tests" 
    },
    {
      type: "input",
      name: "questions",
      message: "Please provide questions" 
    },
  ]);
}

userPrompts();
    // Ask user for Title
        // User Input

    // Ask user for Description
            // User Input

    // Ask user for Table of Contents
            // User Input

    // Ask user for Installation
            // User Input

    // Ask user for Usage
            // User Input

    // Ask user for License
            // User Input

    // Ask user for Contributing
            // User Input

    // Ask user for Tests
            // User Input

    // Ask user for Questions
            // User Input

// End Program