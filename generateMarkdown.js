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
  ${data.tableOfContents}

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
