function incr(number) {
  if (typeof number === 'number') {
    return number + 1; // Increment the number and return the result
  } else {
    console.error('Invalid argument. The argument must be a number.');
    return undefined; // Return undefined for an invalid argument
  }
}

function incrementAndCall(number, theFunction) {
  if (typeof number === 'number' && typeof theFunction === 'function') {
    const incrementedNumber = incr(number); // Increment the number
    theFunction(incrementedNumber); // Call the provided function with the incremented number as an argument
  } else {
    console.error('Invalid arguments. The first argument must be a number, and the second argument must be a function.');
  }
}

// Example usage:
function myFunction(result) {
  console.log("The result is:", result);
}

incrementAndCall(5, myFunction); // This will call myFunction with the incremented value: "The result is: 6"
