function incrementAndCall(number, theFunction) {
  if (typeof number === 'number' && typeof theFunction === 'function') {
    number++; // Increment the number
    theFunction(number); // Call the provided function with the incremented number as an argument
  } else {
    console.error('Invalid arguments. The first argument must be a number, and the second argument must be a function.');
  }
}
