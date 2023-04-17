// class that defines the shape and color that appears on the screen using SVG syntax

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
        return `<rect fill = "${this.color}"x="10" y="10" rx="10" ry="10" width="30" height="30"/>`
    }
}

class Circle extends Shape {
    render() {
        return `<circle fill = "${this.color}" "cx="25" cy="75" r="20"/>`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon fill="${this.color}" points="25,55 45,95 5,95"/>`
    }
}

module.exports = {
    Shape, Square, Circle, Triangle
}