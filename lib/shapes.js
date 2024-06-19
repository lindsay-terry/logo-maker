class Shapes {
    constructor(text, textColor, color) {
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
        
    }
}

class Square extends Shapes {
    constructor(text, textColor, color) {
        super(text, textColor, color)
    }

    render() {
        
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