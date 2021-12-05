// TODO: Create a function that returns a license badge based on which license is passed in

// const ListPrompt = require("inquirer/lib/prompts/list");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT': 
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    case 'BSD 3':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    case 'APACHE 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    default:
      return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenses) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenses) {
  if(licenses.includes('NONE')) {
    return ''
  }
  if(licenses.length === 1) {
    return `## License
    ${licenses[0]}`
  }
  return ` ## License
  ${licenses.join(', ')}` 
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  ##### [${response.userName}](${response.github}) [Email Me](${response.email})
 
  ${response.licenses.map(license => renderLicenseBadge(license))}
  
  
  
  # Repository/Project Description
  ${response.description}

  ## Table of Contents
  * [Installation Instructions](#Install)
  * [Usage Information](#Usage)
  * [Contributors](#Contributors)
  * [Licenses](#License)
  
  
  ## Test Instructions
  ###### [Back to Table of Contents](#Table-of-Contents)
  1. Ensure that your application includes the require dependacies, by typing the commnd in your integrated terminal "npm install inquirer".

  2. Create a .gitignore file and include node_modules/ and .DS_Store/ so that your node_modules directory isn't tracked or uploaded to GitHub.

  3. Run “node [fileName].js”
  

  ##Installation Instructions
  ###### [Back to Table of Contents](#Table-of-Contents)
  ${response.installiation}

  ## Usage Info!
  ###### [Back to Table of Contents](#Table-of-Contents)
  ${response.usage}

  ### Contributors
  ###### [Back to Table of Contents](#Table-of-Contents)
  ${response.contributors}
  

  ${renderLicenseSection(response.licenses)}
  ###### [Back to Table of Contents](#Table-of-Contents)

  
  `

}

module.exports = generateMarkdown;
