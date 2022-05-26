// Write code to create a function that returns the factorial of `num`


// Multiply all numbers from given number down to 1


const factorial = function (num) {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result = result * i;
  }
  return result;
};


console.log(factorial(5));
