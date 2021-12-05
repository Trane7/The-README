// TODO: Create a function that returns a license badge based on which license is passed in

const ListPrompt = require("inquirer/lib/prompts/list");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenses = {
    // MIT: //paste link here,
    // NONE: // link for none license badge thing
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenses) {
  if(license === 'NONE') {
    return ''
  }

  return ` ## License
  ${response.license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  ##### [${response.userName}](${response.GitHub}) [Email Me](${response.email})
 
  
  
  
  # Repository Description
  ${response.description}

  ## Table of Contents
  * [Installation Instructions](#Install)
  * [Usage Information](#Usage)
  * [Contributors](#Contributors)
  * [Licenses](#License)
  
  

  ### Contribution Guidelines
  ###### [Back to Table of Contents](#Table-of-Contents)
  ${response.contribute}
  
  
  ## Test Instructions
  ###### [Back to Table of Contents](#Table-of-Contents)

  
  
  ## Overview: What We Accomplished!
  ### Workflow [Back to Table of Contents](#Table-of-Contents)
  ${response.accomplish}
  
  
  ### Screenshots (Building this application)
  ###### [Back to Table of Contents](#Table-of-Contents)

  
  ${renderLicenseSection(response.licenses)}
  
  `

}

module.exports = generateMarkdown;
