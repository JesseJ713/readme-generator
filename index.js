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
      type: "input",
      name: "license",
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