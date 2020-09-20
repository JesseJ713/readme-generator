// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ---
  ![GitHub](https://img.shields.io/github/license/${data.githubUsername}/${data.repo}?style=plastic)

  # ${data.title}

  ${data.url}

  ![${data.title} Screenshot](${data.screenshot}?raw=true "${data.title}")
  ---

  ## Description
  ${data.description}

  ---

  ## Table of Contents
  1. [Installation](https://github.com/JesseJ713/${data.repo}#Installation)
  2. [Usage](https://github.com/JesseJ713/${data.repo}#Usage)
  3. [License](https://github.com/JesseJ713/${data.repo}#License)
  4. [Contributors](https://github.com/JesseJ713/${data.repo}#Contributors)
  5. [Testing](https://github.com/JesseJ713/${data.repo}#Testing)
  6. [Further-Information](https://github.com/JesseJ713/${data.repo}#Further-Information)
  ---

  ## Installation
  ${data.installation}

  ---

  ## Usage
  ${data.usage}

  ---

  ## License
  ![GitHub](https://img.shields.io/github/license/${data.githubUsername}/${data.repo}?style=plastic)
  ${data.license}

  ---

  ## Contributors
  ${data.contributing}

  ---

  ## Testing
  ${data.tests}

  ---

  ## Further-Information
  Github Link - https://github.com/${data.githubUsername}

  Email - ${data.email}

  LinkedIn - https://www.linkedin.com/in/jesse-jackson-atx/

  ---

`;
}

// Exporting custom module to be utilized within other scopes
module.exports.generateMarkdown = generateMarkdown;
