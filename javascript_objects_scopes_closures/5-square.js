#!/usr/bin/node

class Rectangle {
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
    if (typeof this.width !== 'undefined' && typeof this.height !== 'undefined') {
      // Swap width and height
      [this.width, this.height] = [this.height, this.width];
    }
  }

  double() {
    if (typeof this.width !== 'undefined' && typeof this.height !== 'undefined') {
      // Multiply width and height by 2
      this.width *= 2;
      this.height *= 2;
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
