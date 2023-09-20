#!/usr/bin/node
module.exports = class Rectangle {
    constructor(w, h) {
        if(w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number' || !Number.isInteger(w) || !Number.isInteger(h)){
            // If w or h is not a positive integer or is 0, create an empty object
           return 'Rectangle {}';
        } else {
            // Initialize the instance attributes width and height
            this.width = w;
            this.height = h;
        }
    }
  print() {
        if (typeof this.width === 'undefined' || typeof this.height === 'undefined') {
            console.log('Invalid Rectangle');
        } else {
            for (let i = 0; i < this.height; i++) {
                console.log('X'.repeat(this.width));
            }
        }
    }
