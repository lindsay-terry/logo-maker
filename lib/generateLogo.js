const {Circle, Square, Triangle} = require('./shapes');

//function to determine shape and create code to render baseed on user choice
function newShape(data) {
    let svg;

    if (data.shape === 'circle') {
     data.shape = new Circle(data.text, data.textColor, data.shapeColor);
     svg = (data.shape).render();
    } else if (data.shape === 'square') {
     data.shape = new Square(data.text, data.textColor, data.shapeColor);
     svg = (data.shape).render(); 
    } else if (data.shape === 'triangle') {
     data.shape = new Triangle(data.text, data.textColor, data.shapeColor);
     svg = (data.shape).render();
    }
    
    return svg;
 }

 //function to combine all pieces of the svg file together
 function makeLogo(data) {
    const svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    let text;
    //specifc text positioning required based on shape choice
    if (data.shape === 'triangle') {
        text = `<text x="145" y="155" text-anchor="middle" fill="${data.textColor}" font-size="64"> ${data.text} </text>`;
    } else if (data.shape === 'square') {
        text = `<text x="140" y="125" text-anchor="middle" fill="${data.textColor}" font-size="64"> ${data.text} </text>`;
    } else {
        text = `<text x="145" y="125" text-anchor="middle" fill="${data.textColor}" font-size="64"> ${data.text} </text>`;
    }
    return `${svgString} ${newShape(data)} ${text}  </svg>`
 }

 //exporting the functions
 module.exports = {newShape, makeLogo};
