// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ---
  # ${data.title}

  ${data.url}

  ![${data.title} Screenshot](${data.screenshot}?raw=true "${data.title}")
  ---

  ## Description
  ${data.description}

  ---

  ## Table of Contents
  1. [Title](https://github.com/JesseJ713/${data.repo}#${data.title})
  2. [Deployed Website](#${data.url})
  2. [Installation](https://github.com/JesseJ713/${data.repo}#Installation)
  2. [Usage](https://github.com/JesseJ713/${data.repo}#Usage)
  2. [License](https://github.com/JesseJ713/${data.repo}#License)
  2. [Contributors](https://github.com/JesseJ713/${data.repo}#Contributors)
  2. [Testing](https://github.com/JesseJ713/${data.repo}#Testing)
  2. [Further Information](https://github.com/JesseJ713/${data.repo}#Further%20Information)
  ---

  ## Installation
  ${data.installation}

  ---

  ## Usage
  ${data.usage}

  ---

  ## License
  ${data.license}

  ---

  ## Contributors
  ${data.contributing}

  ---

  ## Testing
  ${data.tests}

  ---

  ## Further Information
  ${data.questions}

  ---

`;
}

module.exports.generateMarkdown = generateMarkdown;
