const {Circle, Square, Triangle} = require('./shapes');

//tests for all the shape options
describe('Shapes', () => {
    describe('Circle', () => {
        it('should render a circle with a blue fill color', () => {
            const circle = new Circle('sql', 'white', 'blue');
            expect(circle.render()).toEqual('<circle cx="145" cy="100" r="100" fill="blue" />');
        });
    });

    describe('Square', () => {
        it('should render a square with a red fill color', () => {
            const square = new Square('SQW', 'black', 'red');
            expect(square.render()).toEqual('<rect x="40" y="10" width="200" height="200" fill="red" />');
        });
    });

    describe('Triangle', () => {
        it('should render a triangle with a gren fill color', () => {
            const triangle = new Triangle('frw', 'yellow', '#34eb67');
            expect(triangle.render()).toEqual('<polygon points="150, 0 0, 250 250, 200" fill="#34eb67" />');
        });
    });

});