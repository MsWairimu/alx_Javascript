#!/usr/bin/node

module.exports = class Rectangle {

class Square extends Rectangle {
  constructor(size) {
    // Call the constructor of the Rectangle class using super()
    super(size, size);
  }
}

// Usage example
const square = new Square(5);
console.log("Square Area:", square.width, "x", square.height);
square.print();
