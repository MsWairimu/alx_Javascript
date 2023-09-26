// Import the Rectangle class from 4-rectangle.js if it's defined in a separate file
// Make sure to provide the correct path to the Rectangle class.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

// Square class inherits from Rectangle
class Square extends Rectangle {
  constructor(size) {
    // Call the constructor of the Rectangle class using super()
    super(size, size);
  }
}

// Usage example
const square = new Square(5);
console.log("Square Area:", square.area()); // Output: Square Area: 25
