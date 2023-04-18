// class that defines the shape and color that appears on the screen using SVG syntax
// todo: change dimensions 
class Shape {
    constructor() {
        this.color = ""
    }

    setColor(chosenColor) {
        this.color = chosenColor
    }
}

class Square extends Shape {
    render() {
        return `<rect fill="${this.color}" x="20" y="20" width="60" height="60"/>`
    }
}

class Circle extends Shape {
    render() {
        return `<circle fill="${this.color}" cx="100" cy="50" r="40" text-anchor="middle"/>`
    }
}

// TODO: adjust placement for centered text
class Triangle extends Shape {
    render() {
        return `<polygon fill="${this.color}" points="50,20 85,80 15,80" text-anchor="middle"/>`
        
    }
}

module.exports = {
    Shape, Square, Circle, Triangle
}