// CLI - have the inquirer questions - "what shape do you want your SVG to be?" - "What text?" - "Text Color?" - "shape" - "shape color"

const SVG = require("./svg");

//TODO: import shapes.js
const { Shape, Square, Circle, Triangle } = require("./shapes");

//TODO: render svg.js
const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');


// todo: incorporate pieces from classes

class CLI {
    run() {
        return inquirer
            .prompt([
                // WHEN I am prompted for text
                // THEN I can enter up to three characters
                {
                    type: 'input',
                    name: 'threeChar',
                    message: 'Please enter 3 Characters',
                    //  TODO:  set validation for 3
                },

                // WHEN I am prompted for the text color 
                // THEN I can enter a color keyword (OR a hexadecimal number)
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Please enter text color keyword or hexcode',
                },

                // WHEN I am prompted for a shape
                // THEN I am presented with a list of shapes to choose from: circle, triangle, and square
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Please choose the shape',
                    choices: ["Square", "Triangle", "Circle"]
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'Please enter the shape color by keyword or hexcode',
                },

            ]).then(data => {
                let shape;
                if (data.shape === "Square") {
                    shape = new Square();
                }
                else if (data.shape === "Circle") {
                    shape = new Circle()
                }
                else if (data.shape === "Triangle") {
                    shape = new Triangle()
                }

                shape.setColor(data.shapeColor)
                const newSVG = new SVG()
                newSVG.setText(data.threeChar, data.textColor)
                newSVG.setShape(shape)
                return writeFile("logo.svg", newSVG.render())
            })

            .then(() => console.log('Created logo.svg'))
            .catch((err) => {
                console.log(err);
                console.log('Oops. Something went wrong.');
            });
    }
}

module.exports = CLI
