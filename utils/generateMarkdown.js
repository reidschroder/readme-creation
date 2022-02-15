// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
renderLicenseBadge = license => {
   if (license === "MIT") {
    return `![badge](https://img.shields.io/badge/License-MIT-blue.svg)`;
  
  } else if (license === "ISC") {
    return `![badge](https://img.shields.io/badge/License-ISC-blue.svg)`

  } else if (license === "APACHE") {
    return `![badge](https://img.shields.io/badge/License-Apache-blue.svg)`

  } else if (license === "GNU") {
    return `![badge](https://img.shields.io/badge/License-GNU-blue.svg)`

  } else if (license === "None") {
    return '';

  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT](https://opensource.org/licenses/MIT)`;
  
  } else if (license === "ISC") {
    return `[ISC](https://opensource.org/licenses/ISC)`;

  } else if (license === "APACHE") {
    return `[Apache](https://opensource.org/licenses/Apache-2.0)`;

  } else if (license === "GNU") {
    return `[GNU](https://opensource.org/licenses/gpl-license)`;

  } else if (license === "None") {
    return "";

  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `This application was built with the ${license} license. For more information, follow the link below.`;
  }
}

// ============function to generate markdown for README================
generateMarkdown = data =>  {
  return `# ${data.title}

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

  ## Contributions
    ${data.contributors}

  ## Tests
    ${data.test}

  ## License
    ${renderLicenseSection(data.license)}
    
    

  ## Questions
  [Github](github.com/${data.github})  


  ${data.email}  


  ${renderLicenseLink(data.license)}

`;
}

module.exports = generateMarkdown;
