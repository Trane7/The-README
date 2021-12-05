// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title of your Project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true
            } else {
                console.log('Please enter your project name!')
                return false
            }
        }
    },
    // DESCRIPTION
    {
        type: 'input',
        name: 'Description',
        message: 'Please put a description of your project:',
    },
    // INSTALLATION
    {
        type: 'input',
        name: 'Installiation',
        message: 'Please enter "installation instructions":' 
    },
    // USAGE
    {
        type: 'input',
        name: 'Usage',
        message: 'Please enter what the app is used for' 
    },
    // CONTRIBUTORS
    {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to add any Contributors?',
        default: true
    },
    {
        type: 'input',
        name: 'about',
        message: 'Please provide who contributed:',
        when: ({confirmAbout}) => confirmAbout
    },
    // LICENSE
    {
        type: 'checkbox',
        name: 'licenses',
        message: 'What kind of license does your project have? (Click all that apply)',
        choices: [
            'APACHE 2.0',
            'BSD 3',
            'gvl-gpl 3.0',
            'MIT',
            'NONE'
        ],
        validate: userInput => {
            if(userInput.includes('NONE') && userInput.length > 1) {
                console.log('NONE can only be standalone');
            }
            if(userInput) {
                return true
            } else {
                console.log('You have to choose one, if none please select "NONE"');
            }
        }
    },
    // GITHUB USERNAME
    {
        type: 'input',
        name: 'userName',
        message: 'Please enter your GitHub Username',
        validate: userNameInput => {
            if(userNameInput) {
                return true
            } else {
                console.log('Please enter your GitHub Username!')
                return false
            }
        }
        
    },
    // EMAIL ADDRESS
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

const promptUser = () => {
    return inquirer.prompt(questions)
}

// TODO: Create a function to write README file
function writeToFile(gene, response) {

}

// TODO: Create a function to initialize app
function init() {
    return promptUser()
    .then(readMeData => {
        console.log(generateMarkdown(readMeData)); 
    })
    .catch(err => {
        console.log(err);
    })
}

// Function call to initialize app
init();


