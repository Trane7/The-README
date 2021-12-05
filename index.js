// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your Project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true
            } else {
                console.log('Please enter your project name!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Repo for this project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true
            } else {
                console.log('Please enter your project repo link!')
                return false
            }
        }
    },
    // DESCRIPTION
    {
        type: 'input',
        name: 'description',
        message: 'Please put a description of your project (Required):',
    },
    // INSTALLATION
    {
        type: 'input',
        name: 'installiation',
        message: 'Please enter "installation instructions":' 
    },
    // USAGE
    {
        type: 'input',
        name: 'usage',
        message: 'Please explain what the app is used for:' 
    },
    // CONTRIBUTORS
    {
        type: 'confirm',
        name: 'confirmContributors',
        message: 'Would you like to add any Contributors?',
        default: true
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please provide contributors:',
        when: ({confirmContributors}) => confirmContributors
    },
    // LICENSE
    {
        type: 'checkbox',
        name: 'licenses',
        message: 'What kind of license does your project have? (Click all that apply)',
        choices: [
            'APACHE 2.0',
            'BSD 3',
            'MIT',
            'NONE'
        ],
        validate: userInput => {
            if(userInput === undefined) {
                console.log('You have to choose one, if none please select "NONE"')
                return false
            }
            if(userInput.includes('NONE') && userInput.length > 1) {
                console.log('NONE can only be standalone')
                return false
            }
            return true
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
        name: 'email',
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
function writeToFile(fileContents) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', fileContents, err => {
          // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
          if (err) {
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
          }
    
          // if everything went well, resolve the Promise and send the successful data to the `.then()` method
          resolve({
            ok: true,
            message: 'File created!'
          });
        });
      });  
}

// TODO: Create a function to initialize app
function init() {
    return promptUser()
    .then(generateMarkdown)
    .then(writeToFile)
    .catch(err => {
        console.log(err);
    })
}

// Function call to initialize app
init();


