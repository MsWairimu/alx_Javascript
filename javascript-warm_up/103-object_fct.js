function createObject(value) {
  const obj = {
    type: 'object',
    value: value
  };

  obj.incr = function() {
    obj.value++;
  };

  return obj;
}

const obj1 = createObject(12);
const obj2 = createObject(13);
const obj3 = createObject(14);
const obj4 = createObject(15);

console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);

// Increment the value of obj2
obj2.incr();
console.log(obj2);
