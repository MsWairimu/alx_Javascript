#!/usr/bin/node

const myObject = {
  type: 'object',
  value: 12
};

console.log(myObject);

function incr() {
  if (typeof this.value === 'number') {
    this.value++;
  } else {
    console.error('Value is not a number.');
  }
}

myObject.incr = incr;

myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
