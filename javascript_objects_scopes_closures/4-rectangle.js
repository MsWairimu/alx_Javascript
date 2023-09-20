#!/usr/bin/node

module.exports = class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number' || !Number.isInteger(w) || !Number.isInteger(h)) {
            // If w or h is not a positive integer or is 0, create an empty object
            return 'Rectangle {}';
        } else {
            // Initialize the instance attributes width and height
            this.width = w;
            this.height = h;
        }
    }
rotate() {
  if (typeof this.width !== 'undefined' && typeof this.height !== 'undefined'){
   // Swap width and height
    [this.width, this.height] = [this.height, this.width];
}
}

                
    print() {
        if (typeof this.width === 'undefined' || typeof this.height === 'undefined') {
            console.log('Invalid Rectangle');
        } else {
            // Print the rectangle with 'X' characters
            for (let i = 0; i < this.height; i++) {
                let row = '';
                for (let j = 0; j < this.width; j++) {
                    row += 'X';
                }
                console.log(row);
            }
        }
    }
}
//Write a class Rectangle that defines a rectangle:
//You must use the class notation for defining your class
//The constructor must take 2 arguments: w and h
//Initialize the instance attribute width with the value of w
//Initialize the instance attribute height with the value of h
//If w or h is equal to 0 or not a positive integer, create an empty object
//Create an instance method called print() that prints the rectangle using the character X
