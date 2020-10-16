// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

/*
The internal variable can be accessed by the nest function because of the lexical environment allowing the function to look outside of itself(in an outward direction) so to speak to look for that variable, if the variable was within another funtion not on the same scope or outer scope it would not be able to access the variable 
*/


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

summation = function( number ) {
  let summat = 0

  for(let i = 1; i <= number; i++) {
    summat = summat + i;
  }
  return summat
}

console.log(summation(4))