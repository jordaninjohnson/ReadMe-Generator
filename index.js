// fs is a Node standard library package for reading and writing files
var fs = require("fs");

// Markdown
var MarkdownIt = require('markdown-it');
md = new MarkdownIt();
//var title = md.render('# Title:');

//inquirer
const inquirer = require('inquirer');
inquirer
    .prompt([
        {
            name: 'Title',
            message: 'What is your Project Title?',
            default: 'Enter Title',
        },
        {
            name: 'Description',
            message: 'What is the description of your project?',
            default: 'Enter description',
        },
        {
            name: 'Table of Contents',
            message: 'What is Table of Contents?',
            default: '',
        },
        {
            name: 'Installation',
            message: 'How do you install your project?',
            default: '',
        },
        {
            name: 'Usage',
            message: 'How do you use your project?',
            default: '',
        },
        {
            name: 'License',
            message: 'What license does your project hold?',
            default: '',
        },
        {
            name: 'Contributing',
            message: 'How to contribute?',
            default: '',
        },
        {
            name: 'Tests',
            message: 'What tests have you performed?',
            default: '',
        },
        {
            name: 'Questions',
            message: 'Common questions?',
            default: '',
        },
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
        //Table of Contents
        var tableOfContentsTitle = md.render('# Table of Contents');
        fs.appendFileSync('./Assets/README.md', tableOfContentsTitle + '\n', function (err) {
            if (err) throw err;
        })
        //Installation
        var installationTitle = md.render('# Installation');
        fs.appendFileSync('./Assets/README.md', installationTitle + '\n', function (err) {
            if (err) throw err;
        })
        //Usage
        var usageTitle = md.render('# Usage');
        fs.appendFileSync('./Assets/README.md', usageTitle + '\n', function (err) {
            if (err) throw err;
        })
        //License
        var licenseTitle = md.render('# License');
        fs.appendFileSync('./Assets/README.md', licenseTitle + '\n', function (err) {
            if (err) throw err;
        })
        //Contributing
        var contributingTitle = md.render('# Contributing');
        fs.appendFileSync('./Assets/README.md', contributingTitle + '\n', function (err) {
            if (err) throw err;
        })
        //Tests
        var testsTitle = md.render('# Tests');
        fs.appendFileSync('./Assets/README.md', testsTitle + '\n', function (err) {
            if (err) throw err;
        })
        //Questions
        var questionsTitle = md.render('# Questions');
        fs.appendFileSync('./Assets/README.md', questionsTitle + '\n', function (err) {
            if (err) throw err;
        })


        // GitHub Username & Badge
        // fs.appendFile('./Assets/README.md', 'Username:' + answers.GitHubUsername + '\n', function (err) {
        //     if (err) throw err;
        //     console.log('Username Saved!');
        // });
        // fs.appendFile('./Assets/README.md', 'badge:' + answers.badge + '\n', function (err) {
        //     if (err) throw err;
        //     console.log('badge Saved!');
        // });
    });


