// fs is a Node standard library package for reading and writing files
const fs = require("fs");
const axios = require("axios");
const inquirer = require('inquirer');
const MarkdownIt = require('markdown-it');
const util = require('util');
// Markdown
md = new MarkdownIt();

//inquirer
inquirer
    .prompt([
        {
            name: 'username',
            message: 'What is your GitHub Username?',
            default: '',
        },
        {
            name: 'email',
            message: 'What is your GitHub Email?',
            default: '',
        },
        {
            name: 'photo',
            message: 'Would you like to display your GitHub profile picture?',
            default: 'yes or no',
        },
        {
            name: 'Title',
            message: 'Enter your Project Title?',
            default: 'Title',
        },
        {
            name: 'Description',
            message: 'Describe your project:',
            default: 'Description',
        },
        {
            name: 'Installation',
            message: 'How do you install your project?',
            default: 'Installation',
        },
        {
            name: 'Usage',
            message: 'How do you use your project?',
            default: 'Use',
        },
        {
            name: 'License',
            message: 'What license does your project hold?',
            default: 'License',
        },
        {
            name: 'Contributing',
            message: 'How to contribute?',
            default: 'Contribute',
        },
        {
            name: 'Tests',
            message: 'How to test?',
            default: 'Test',
        },
        {
            name: 'Questions',
            message: 'Common questions?',
            default: 'Question',
        },
    ])
    .then(answers => {
        //console.info('Answers:', answers);
        //github
        const queryUrl = `https://api.github.com/users/${answers.username}`;
        axios.get(queryUrl).then(function (res) {
            //if license is equal to mit or MIT
            if (answers.License === "mit" || answers.License === "MIT"){
                var mitLicense = md.render('[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)');
                fs.appendFileSync('./Assets/README.md', mitLicense + '\n', function (err) {
                    if (err) throw err;
                })
            }
            
            //if yes to profile picture
            if (answers.photo === 'yes') {
                var photo = md.render(`![Profile Picture](${res.data.avatar_url}{height=50px})`);
                fs.appendFileSync('./Assets/README.md', photo + '\n', function (err) {
                    if (err) throw err;
                })

                //Title
                //creates a variable for title that is <h1> in MD
                var projectTitle = md.render('# ' + answers.Title);
                fs.appendFileSync('./Assets/README.md', projectTitle + '\n', function (err) {
                    if (err) throw err;
                    console.log('title saved');
                })
                //Description
                var descriptionTitle = md.render('# Description');
                fs.appendFileSync('./Assets/README.md', descriptionTitle + '\n', function (err) {
                    if (err) throw err;
                })
                fs.appendFileSync('./Assets/README.md', answers.Description + '\n', function (err) {
                    if (err) throw err;
                })
                //Table of Contents
                var tableOfContentsTitle = md.render('# Table of Contents');
                fs.appendFileSync('./Assets/README.md', tableOfContentsTitle + '\n', function (err) {
                    if (err) throw err;
                })
                const tableOfContents = md.render('* [Installation](#installation) \n * [Usage](#usage) \n * [License](#license) \n * [Contributing](#contributing) \n * [Tests](#tests) \n * [Questions](#questions)');
                fs.appendFileSync('./Assets/README.md', tableOfContents + '\n', function (err) {
                    if (err) throw err;
                })

                //Installation
                var installationTitle = md.render('# Installation');
                fs.appendFileSync('./Assets/README.md', installationTitle + '\n', function (err) {
                    if (err) throw err;
                })
                fs.appendFileSync('./Assets/README.md', answers.Installation + '\n', function (err) {
                    if (err) throw err;
                })
                //Usage
                var usageTitle = md.render('# Usage');
                fs.appendFileSync('./Assets/README.md', usageTitle + '\n', function (err) {
                    if (err) throw err;
                })
                fs.appendFileSync('./Assets/README.md', answers.Usage + '\n', function (err) {
                    if (err) throw err;
                })
                //License
                var licenseTitle = md.render('# License');
                fs.appendFileSync('./Assets/README.md', licenseTitle + '\n', function (err) {
                    if (err) throw err;
                })
                fs.appendFileSync('./Assets/README.md', answers.License + '\n', function (err) {
                    if (err) throw err;
                })
                //Contributing
                var contributingTitle = md.render('# Contributing');
                fs.appendFileSync('./Assets/README.md', contributingTitle + '\n', function (err) {
                    if (err) throw err;
                })
                fs.appendFileSync('./Assets/README.md', answers.Contributing + '\n', function (err) {
                    if (err) throw err;
                })
                //Tests
                var testsTitle = md.render('# Tests');
                fs.appendFileSync('./Assets/README.md', testsTitle + '\n', function (err) {
                    if (err) throw err;
                })
                fs.appendFileSync('./Assets/README.md', answers.Tests + '\n', function (err) {
                    if (err) throw err;
                })
                //Questions
                var questionsTitle = md.render('# Questions');
                fs.appendFileSync('./Assets/README.md', questionsTitle + '\n', function (err) {
                    if (err) throw err;
                })
                fs.appendFileSync('./Assets/README.md', answers.Questions + '\n', function (err) {
                    if (err) throw err;
                })
            }
            return //console.log(res);
        });


    });


