function executeXTimes(x, theFunction) {
  for (let i = 0; i < x; i++) {
    theFunction();
  }
}

// Example usage:
function myFunction() {
  console.log("Hello, world!");
}

executeXTimes(5, myFunction); // This will execute myFunction 5 times.
