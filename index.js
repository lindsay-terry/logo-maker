const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter your text (3 characters max):'
    },

    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the text?',
    },

    {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape',
        choices: ['circle', 'square', 'triangle'],
    },

    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like the shape?',
    }
];

function getLogo() {
    inquirer.prompt(questions);
}

getLogo();

