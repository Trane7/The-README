// TODO: Include packages needed for this application
const fileGenerator
const fs = require('fs')
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title of your repository?',
        validate: titleInput => {
            if (titleInput) {
                return true
            } else {
                console.log('Please enter your repository name!')
                return false
            }
        }
    },
    {
        type: 'confirm',
        name: 'confrimAbout',
        message: 'Would you like to enter "installation instructions" or a link to a video?',
        default: true
        
    },
    {
        type: 'confirm',
        message: 'What kind of license does your project have?',
        choices: [
            'APACHE 2.0',
            'BSD 3',
            'gvl-gpl 3.0',
            'MIT',
            'NONE'
        ],
    },
    {
        type: 'input',
        name: 'title',
        message: 'Please enter your GitHub Username',
        validate: usernameInput => {
            if(usernameInput) {
                return true
            } else {
                console.log('Please enter your GitHub Username!')
                return false
            }
        }
        
    },
    {
        type: 'input',
        name: 'title',
        message: 'Please enter your Email Address',
        validate: emailInput => {
            if(emailInput) {
                return true
            } else {
                console.log('Please enter Email Address!')
                return false
            }
        }
        
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
