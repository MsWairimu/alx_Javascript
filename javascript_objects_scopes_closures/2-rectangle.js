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
}
//Write a class Rectangle that defines a rectangle: 
//You must use the class notation for defining your class
//The constructor must take 2 arguments w and h
//Initialize the instance attribute width with the value of w
//Initialize the instance attribute height with the value of h
//If w or h is equal to 0 or not a positive integer, create an empty object
//The constructor method is defined with two parameters, w and h, which represent the width and height of a rectangle. Inside the constructor, there's a conditional (if) statement that checks several conditions to determine if the given w and h values are valid for creating a rectangle. It checks if either w or h is less than or equal to 0, if they are not of type 'number', or if they are not integers using typeof and Number.isInteger(). If any of these conditions are met, the constructor creates an instance of the Rectangle class with width and height attributes set to undefined, effectively representing an empty or invalid rectangle. If none of the conditions are met, the constructor initializes the width and height attributes with the provided w and h values, creating a valid rectangle.
