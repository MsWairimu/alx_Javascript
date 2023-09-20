#!/usr/bin/node
module.exports = class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
            // If w or h is not a positive integer or is 0, create an empty object
            this.width = undefined;
            this.height = undefined;
        } else {
            // Initialize the instance attributes width and height
            this.width = w;
            this.height = h;
        }
    }
}
