const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { makeLogo }= require('./lib/generateLogo');

//questions to gather logo information
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter your text (3 characters max):',
        validate: function(input) {
            if (input.length >= 4) {
                return 'Please enter a max of 3 characters'
            } else {
                return true;
            }
        }
    },

    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the text?',
        validate: function(input) {
            return input ? true : 'Please enter a color.'
        }
    },

    {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape',
        choices: ['circle', 'square', 'triangle'],
        validate: function(input) {
            return list ? true : 'Please select a shape'
        }
    },

    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like the shape?',
        validate: function(input) {
            return input ? true : 'Please enter a color'
        }
    }
];

//Calling function to initiate questions and write answers to file based
//on data collected, using the function that compiles it all in the correct syntax
function getLogo() {
    inquirer.prompt(questions)
    .then(data => writeFile(`./examples/${data.text}.svg`, makeLogo(data)))
    .then(() => console.log('Logo finished!  See the examples folder for your logo.'))
    .catch((err) => console.log('Error, please try again.'));
}

getLogo();

