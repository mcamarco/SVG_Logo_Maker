// TODO Change dimensions 

class SVG {
    constructor() {
        this.text = ""
        this.shapeL= ""
    }

    render() {
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"> ${this.shapeL} ${this.text} </svg>`
    }

    setShape(shape) {
        this.shapeL = shape.render()
    }

    setText (chosenText,chosenColor) {
        this.text = `<text anchor=middle x="30" y="50" font-size="25px" font-family="Georgia" fill="${chosenColor}"> ${chosenText} </text>`
    }
}
module.exports = SVG

// constructor in a class - acts like a function