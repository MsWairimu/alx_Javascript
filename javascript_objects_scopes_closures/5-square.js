module.exports = class Square {
    constructor (w, h) {
      this.width = w; 
      this.height = h;
    }
}

class Square extends Rectangle {
  constructor(size) {
    // Call the constructor of the parent2class (Rectangle) using super()
  super(size, size);
  }
}
