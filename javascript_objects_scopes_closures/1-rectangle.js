#!/usr/bin/node

// Define the Rectangle class using class notation
class Rectangle {
    constructor(w, h) {
        this.width = w;
        this.height = h;
    }
}

const Rectangle = require('./1-rectangle');

const r1 = new Rectangle(3, 3);
console.log(r1);
console.log(r1.width);
console.log(r1.height);

const r1 = new Rectangle(3, -3);
console.log(r1);
console.log(r1.width);
console.log(r1.height);

const r1 = new Rectangle(3);
console.log(r1);
console.log(r1.width);
console.log(r1.height);

const r1 = new Rectangle(undefined, 3);
console.log(r1);
console.log(r1.width);
console.log(r1.height);

const r1 = new Rectangle();
console.log(r1);
console.log(r1.width);
console.log(r1.height);
