// const fs = require('fs');
const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { makeLogo }= require('./lib/generateLogo');

//questions to gather logo information
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

//Calling function to initiate questions and write answers to file based
//on data collected, using the function that compiles it all in the correct syntax
function getLogo() {
    inquirer.prompt(questions)
    .then(data => writeFile('./examples/test.svg', makeLogo(data)))
    .catch((err) => console.log('Error, please try again.'));
}

getLogo();

