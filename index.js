const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is your project title?"
        },
        {
            type: "input",
            name: "description",
            message: "give a short description of your project"
        },
        {
            type: "input",
            name: "installation",
            message: "give installation instructions for your project"
        },
        {
            type: "input",
            name: "requirements",
            message: "what are the requirements for the user to run your application"
        },
        {
            type: "input",
            name: "usage",
            message: "give instructions for the usage of your project"
        },
        {
            type: "input",
            name: "tests",
            message: "give instructions for running the tests associated with your project."

        },
        {
            type: "input",
            name: "contributions",
            message: "give guidelines for submitting contributions to your project"
        },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub Username"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address."
        },
        {
            type: "list",
            name: "license",
            message: "select the license type for your project.",
            choices: [, "MIT License", "BSD 2-Clause License", "GNU GENERAL PUBLIC LICENSE"]
        },
        {
            type: "input",
            name: "screenShot",
            message: "Enter the relative path to a screen shot of your application."

        }
    ]);
}

function generateMD(answers) {


    return `
![](${answers.screenShot})
# ${answers.title}

## ![](https://img.shields.io/github/license/${answers.github}/${answers.title})

## Table Of Contents

*[Description](#Description)

*[installation](#Installation)

*[requirements](#requirements)

*[Usage Instructions](#Usage-Instructions)

*[Running the tests](#Running-the-tests)

*[Contributing](#Contributing)
## Description
${answers.description}
    
## Installation
    
${answers.installation}
    
## Requirements
    
${answers.requirements}
## Usage Instructions

${answers.usage}
    
## Running the tests
    
${answers.tests}
    
## Contributing
    
${answers.contributions}

## Additional questions
contact the creator at ${answers.email} or ${answers.github}

## licensing
this project is covered under the ${answers.license} for more info view the 
    `
        ;
}


promptUser()
    .then(function (answers) {
        const MD = generateMD(answers)

        return writeFileAsync("README.md", MD);




    })
    .then(function () {
        console.log("Successfully wrote to README.md");
    })
