// ============Packages for Application=============
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// ===========Function and prompt for Questions Array ==============
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter the title of your project");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username (Required)",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter your email address");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Please enter a description for your project",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please enter a description for your project");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "Give instructions for installation of your project",
    },
    {
      type: "input",
      name: "contributors",
      message: "Who contributed to this project?",
      validate: (contributionInput) => {
        if (contributionInput) {
          return true;
        } else {
          console.log("Please enter a contributor");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "test",
      message: "Please provide test instructions for your project",
      validate: (testInput) => {
        if (testInput) {
          return true;
        } else {
          console.log("Please provide test instructions for your project");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "Please briefly explain how to use this project",
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log("Please briefly explain how to use this project");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      message: "Select a license you would like to add to this project",
      choices: ["MIT", "ISC", "APACHE", "GNU", "None"],
    },
  ]);
};

// ===========function to write README file============
const writeToFile = (data) => {
  fs.writeFile("README.md", (data), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Congratulations! README successfully generated");
    }
  });
};

// ===========function to initialize app================
const init = () => {
  questions()
    .then((answers) => {
      return generateMarkdown(answers);
    })
    .then((data) => {
      return writeToFile(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// =============initialize app===============
init();
