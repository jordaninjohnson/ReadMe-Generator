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
        var projectTitle = md.render('# ' + answers.Title);
//FS
        fs.appendFile(answers.Title + '.md',projectTitle + '\n',function (err) {
            if (err) throw err;
            console.log('title saved');
        })
        fs.appendFile(answers.Title + '.md','Username:' + answers.GitHubUsername + '\n', function (err) {
            if (err) throw err;
            console.log('Username Saved!');
        });
        fs.appendFile(answers.Title + '.md','badge:' + answers.badge + '\n', function (err) {
            if (err) throw err;
            console.log('badge Saved!');
        });
    });


