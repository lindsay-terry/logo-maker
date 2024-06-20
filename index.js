const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes');

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

function newShape(data) {
    // if (data.name === "circle") {
    //     return new Circle;
    // } else if (data.name === "square") {
    //     return new Square;
    // } else if (data.name === "triangle") {
    //     return new Triangle;
    // }
    console.log(data.name);
}

function getLogo() {
    inquirer.prompt(questions)
    .then(data => {
        
    });
}

getLogo();

