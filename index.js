// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'What is your project name?',
        validate: projectName => {
          if (projectName) {
            return true;
          } else {
            console.log('Please enter your project name!');
            return false;
          }
        }
      },
        // description
        {
            type: 'input',
            name: 'description',
            message: 'Description: what your project is...',
            validate: description => {
                if (description) {
                    return true;
                } else {
                    console.log("Description: Please Add Description")
                    return false;
                }
            }
        },
        // Installation
        {
            type: 'input',
            name: 'installation',
            message: 'Installation: Enter Installation Instructions...',
            validate: installation => {
                if (installation) {
                    return true;
                } else {
                    console.log("Installation: Please Enter Installation Instructions");
                    return false;
                }
            }
        },
        // Usage
        {
            type: 'input',
            name: 'usage',
            message: 'Usage: What is this projects Usage?',
            validate: usage => {
                if (usage) {
                    return true;
                } else {
                    console.log("Usage: Please Enter Projects Usage: ")
                    return false;
                }
            }
        },
        // License(list)
        {
            type: 'list',
            name: 'license',
            message: 'License: Select a License',
            choices: ['Apache 2.0 License', new inquirer.Separator(), 'Boost Software License 1.0', new inquirer.Separator(), 'BSD 3-Clause License', new inquirer.Separator(), 'BSD 2-Clause License', new inquirer.Separator(), 'Eclipse', new inquirer.Separator(), 'MIT', new inquirer.Separator()]
        },
        // contributing
        {
            type: 'input',
            name: 'contributing',
            message: 'Contributing: How can others contribute to this project? ',
            validate: contributing => {
                if (contributing) {
                    return true;
                } else {
                    console.log("Contributing: Please Enter How can others can contribute to this Project: ")
                    return false;
                }
            }

        },
        // tests
        {
            type: 'input',
            name: 'tests',
            message: 'Tests: Give users instructions on how to run all necessary tests',
            validate: tests => {
                if (tests) {
                    return true;
                } else {
                    console.log("Tests: Please Give users instructions on how to run all necessary tests ")
                    return false;
                }
            }
        },
        // questions: github link
        {
            type: 'input',
            name: 'github',
            message: 'Github: Enter github username',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log("Github: Please enter github username ")
                    return false;
                }
            }
        },
        // questions: Email
        {
            type: 'input',
            name: 'email',
            message: 'Email: Enter your Email for user with questions to contact you',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Email: Please Enter your Email for user with questions to contact you' )
                    return false;
                }
            }
        }
    ]);
};
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
promptUser()
// .then(readmedata => {
//     return generateReadme(readmedata);
// });