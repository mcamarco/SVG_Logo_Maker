// TODO Change dimensions 

class SVG {
    constructor() {
      this.text = "";
      this.shape = "";
    }
  
    render() {
      return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
    }
  
    setShape(shape) {
      this.shape = shape.render();
    }
  
    setText(chosenText, chosenColor) {
      this.text = `<text x="50%" y="20%" text-anchor="middle" alignment-baseline="middle" fill="${chosenColor}">${chosenText}</text>`;
    }
  }
  
  module.exports = SVG;
  


// constructor in a class - acts like a function