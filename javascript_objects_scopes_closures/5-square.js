class Rectangle {
    constructor(w, h) {
        this.width = w;
        this.height = h;
    }
}

class Square extends Rectangle {
    constructor(size) {
        // Call the constructor of the parent class (Rectangle) using super()
        super(size, size);
    }
}

module.exports = class Square;
