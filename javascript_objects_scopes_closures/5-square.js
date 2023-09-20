class Rectangle {
    constructor(w, h) {
        this.width = w;
        this.height = h;
    }
}
module.exports = class Square {
class Square extends Rectangle {
    constructor(size) {
        // Call the constructor of the parent class (Rectangle) using super()
        super(size, size);
    }
}

    
