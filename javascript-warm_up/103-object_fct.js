function incrementAndCall(number, callback) {
  if (typeof number === 'number' && typeof callback === 'function') {
    const incrementedNumber = number + 1; // Increment the number
    callback(incrementedNumber); // Call the provided callback function with the incremented number
  } else {
    console.error('Invalid arguments. The first argument must be a number, and the second argument must be a function.');
  }
}
