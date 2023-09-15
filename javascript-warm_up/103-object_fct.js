#!/usr/bin/node

const myObject = {
  type: 'object',
  value: 12
};

console.log(myObject);

// Define the "incr" function to increment the "value" property
myObject.incr = function () {
  if (typeof this.value === 'number') {
    this.value++;
  } else {
    console.error('Value is not a number.');
  }
};

myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
