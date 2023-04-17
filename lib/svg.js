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
        this.text = `<text anchor=middle x="85" y="50" fill="${chosenColor}"> ${chosenText} </text>`
    }
}
module.exports = SVG

// constructor in a class - acts like a function