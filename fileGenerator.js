function fileGenerator(response) {
    var content = `# ${response.title}
    ##### ${response.logo}[${response.userName}](${response.GitHub}) [Email Me](${response.email}) [Deployed Application](https://www.youtube.com/channel/UCzyohHEJNSqklS1bwxmuVaA)
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

    
    
    ## References
    ###### [Back to Table of Contents](#Table-of-Contents)
    1.  ${response.ref1}
    
    2.  ${response.ref2}
    
    ## Repositiory End-Goal Criterea
    ###### [Back to Table of Contents](#Table-of-Contents)
    ${response.endgoal}
    
    ## License
    ${response.license}
    
    Please feel free to fork and even collaborate with me on this awesome [repository](https://github.com/supercodingninja/CodeQuiz ).  Thank you for viewing! - Frederick Thomas, Super Coding Ninja™ [2014-Present](https://supercodingninja.github.io/) All Rights Reserved
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
    return content;
};

module.exports = fileGenerator;