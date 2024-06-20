class Shapes {
    constructor(text, textColor, color) {
        // if (text.length > 3) {
        //     throw new Error('Text must be no more than 3 characters');
        // }

        this.text = text;
        this.textColor = textColor;
        this.color = color;
    }
}

class Circle extends Shapes {
    constructor(text, textColor, color) {
        super(text, textColor, color)
    }
    
    render() {
        return `<circle cx="200" cy="200" r="100" fill="${this.color}">`
    }
}

class Square extends Shapes {
    constructor(text, textColor, color) {
        super(text, textColor, color)
    }

    render() {
        return `<rect x="10" y="10" width="200" height="200" fill="${this.color}">`
    }
}

class Triangle extends Shapes {
    constructor(text, textColor, color) {
        super(text, textColor, color)
    }

    render() {
        
    }
}

module.exports = {Circle, Square, Triangle};
// Shapes.prototype.svg = `<svg version="1.1"
// width="300" height="200"
// xmlns="http://www.w3.org/2000/svg">`;

// console.log(Shapes.svg);