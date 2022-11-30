// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //Generate Table of contents
  if (data.toc === "YES"){
    var toc = `
## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  `
  } else {
    var toc = ""
  }
  //confirm installation
  if (data.installation === ``){
    var install = "N/A"
  } else {
    var install = data.installation
  }
  //confirm credits
  if (data.credits === ``){
    var credits = "N/A"
  } else {
    var credits = data.credits
  }
  //confirm tests
  if (data.tests === ``){
    var tests = "N/A"
  } else {
    var tests = data.tests
  }

  return `# ${data.title}

## Description
${data.description}
${toc}
## Installation
${install}

## Usage
${data.usage}
![${data.altText}](assets/images/screenshot.png)

## Credits   

${credits}
 
## License

## Tests

${tests}

## Questions
[${data.github}](#https://github.com/${data.github})
${data.email}
${data.contactMe}
`;
}

module.exports = generateMarkdown;
