function fileGenerator(response) {
    var content = `# ${response.title}
    ##### [${response.userName}](${response.GitHub}) [Email Me](${response.email}) [Deployed Application](https://www.youtube.com/channel/UCzyohHEJNSqklS1bwxmuVaA)
    #### ReadMeGenerator© 2021 All Rights Reserved.  ${response.license} All material must be cited or credited, when using material (free to use).
    
    
    
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

    
    ## License
    ${response.license}
    
    `
    return content;
};

module.exports = fileGenerator;