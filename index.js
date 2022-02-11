// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
   return inquirer.prompt([
    
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
              } else {
                console.log('Please enter the title of your project');
                return false;
              }
            }
        },
      {
        type: 'list',
        name: 'license',
        message: 'Select a license you would like to add to this project',
        choices: [
            'MIT',
            'ISC',
            'APACHE',
            'GNU'
        ]
      },
  ]);
};


// TODO: Create a function to write README file
const writeToFile = data => {
  fs.writeFile('README.md', data, err => {
    if (err){
    console.log(err);
    } else {
      console.log('Congratulation! README successfully generated')
    }
  })
};

// TODO: Create a function to initialize app
const init = () => {
  questions()

  .then(answers => {
    return generateMarkdown(answers);
  }) 
  .then(data => {
    return writeToFile(data);
  })


}

// Function call to initialize app
init();
