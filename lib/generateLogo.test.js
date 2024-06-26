const { newShape, makeLogo } = require('./generateLogo');
const {Circle, Square, Triangle} = require('./shapes');

//tests for the functions that handle getting the correct shape choice and combining all 
//svg elements together
describe('generateLogo', () => {
    describe('newShape', () => {
        it('should set svg string based on what shape user chooses', () =>{
            const circle = new Circle('svg', 'black', 'blue');
            let svg = circle.render();
            expect(svg).toEqual(`<circle cx="145" cy="100" r="100" fill="blue" />`)
        })
    });
    describe('makeLogo', () => {
        it('should return a complete svg file of all components', () => {
            const triangle = new Triangle('tri', 'orange', 'black')
            const svgString = `<svg version="1.1" width="300" height="200" xmlns="https://www.w3.org/2000/svg">`;
            const text = `<text x="145" y="155" dominant-baseline="middle" text-anchor="middle" fill="orange" font-size="64"> tri </text>`;
            let svg = triangle.render();
            const makeLogo = `${svgString} ${svg} ${text} </svg>`;
            expect(makeLogo).toEqual(`<svg version="1.1" width="300" height="200" xmlns="https://www.w3.org/2000/svg"> <polygon points="150, 0 0, 250 250, 200" fill="black" /> <text x="145" y="155" dominant-baseline="middle" text-anchor="middle" fill="orange" font-size="64"> tri </text> </svg>`)
        })
    })
})




