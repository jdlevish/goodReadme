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
            name: "usage",
            message: "give instructions for the usage of your project"
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
            message: "select the licence type for your project.",
            choices: [, "MIT", "Apache", "GPL"]
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
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.title}</h1>
    <p class="lead">I am from ${answers.description}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.installation}</li>
      <li class="list-group-item">LinkedIn: ${answers.usage}</li>
      <li class="list-group-item">LinkedIn: ${answers.contributions}</li>
      <li class="list-group-item">LinkedIn: ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
}

promptUser()
    .then(function (answers) {
        const MD = generateMD(answers);

        return writeFileAsync("README.md", MD);
    })
    .then(function () {
        console.log("Successfully wrote to README.md");
    })
    .catch(function (err) {
        console.log(err);
    });
    // ![W3C Validation](https://img.shields.io/w3c-validation/html)
    //w3c validation badge  https://img.shields.io/w3c-validation/html?targetUrl=http%3A%2F%2Fwww.thesandymane.com
    // github language count badge https://img.shields.io/github/languages/count/jdlevish/weatherApp