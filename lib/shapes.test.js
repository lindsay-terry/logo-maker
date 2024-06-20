const {Circle, Square, Triangle} = require('./shapes');

describe('Shapes', () => {
    describe('Circle', () => {
        it('should render a circle with a blue fill color', () => {
            const circle = new Circle('sql', 'white', 'blue');
            expect(circle.render()).toEqual('<circle cx="200" cy="200" r="100" fill="blue"');
        });
    });

    describe('Square', () => {
        it('should render a square with a red fill color', () => {
            const square = new Square('SQW', 'black', 'red');
            expect(square.render()).toEqual('<rect x="10" y="10" width="200" hight="200" fill="red"');
        });
    });

    describe('Triangle', () => {
        it('should render a triangle with a gren fill color', () => {
            const triangle = new Triangle('frw', 'yellow', 'green');
            expect(triangle.render()).toEqual('<polygon points="100, 10 40, 198, 78" fill="green"');
        });
    });

});