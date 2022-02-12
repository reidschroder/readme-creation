// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
renderLicenseBadge = license => {
  if (license === "None") {
    return "";
  } else if (license === "MIT") {
    return 'https://img.shields.io/badge/license-MIT-blue.svg';
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// ============function to generate markdown for README================
generateMarkdown = data =>  {
  return `# ${data.title}

    ## License
    ${renderLicenseBadge(data.license)}

  ## Descripton
    ${data.description}

  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributions](#contributors)
  [Questions](#questions)

  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}

  ## License
    ${data.license}

  ## Contributions
    ${data.contributors}

  ## Tests
    ${data.test}

  ## Questions
  ${data.github}
  ${data.email}

`;
}

module.exports = generateMarkdown;
