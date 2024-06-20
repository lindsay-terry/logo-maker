// const fs = require('fs');
const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { makeLogo }= require('./lib/generateLogo');

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
    inquirer.prompt(questions)
    // .then(data =>  {makeLogo(data)})
    .then(data => writeFile('./examples/test.svg', makeLogo(data)));
    // .then(data => {
    //     // console.log(newShape(data));
    //     // return writeFile('./examples/test.svg', (makeLogo(data)));
    // })
    // .then(() => {
    //     console.log('Logo generated!');
    // })
    // .catch((err) => console.log('Error, please try again.'));
}

getLogo();

