// fs is a Node standard library package for reading and writing files
var fs = require("fs");

//inquirer
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            name: 'GitHubUsername',
            message: 'What is your GitHub Username?',
            default: 'Enter your GitHub Username!',
        },
        {
            name: 'badge',
            message: 'What is your badge specific to the repository?',
            default: 'Enter 1 badge!',
        },
    ])
    .then(answers => {
        //console.info('Answers:', answers);
//FS
        fs.appendFile('ReadMe.txt','Username:' + answers.GitHubUsername, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    });


