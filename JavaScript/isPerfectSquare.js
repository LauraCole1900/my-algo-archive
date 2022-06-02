// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method


// takes in a number
// iterates through numbers until the square of the number is greater than or equal to the number
// if the square of the current number equals the given number, return true
// else return false


const isPerfectSquare = function (num) {
  for (let i = 0; i * i <= num; i++) {
    if (i * i === num) {
      return true;
    }
  }
  return false;
};


// Alternate:
const isPerfectSquare = function (num) {
  let i = 0;

  while (true) {
    const currentSquare = i * i;

    if (currentSquare === num) {
      return true;
    } else if (currentSquare > num) {
      return false;
    } else {
      i++;
    }
  }
};


// Andrew solution
const isPerfectSquare = (input) => {
  for (let i = 0; ; i++) {
    let squaredOutput = i * i;
    if (squaredOutput === input) {
      return true;
    } else
      if (squaredOutput > input) {
        return false;
      }
  }
}


console.log(isPerfectSquare(25));
console.log(isPerfectSquare(50));
console.log(isPerfectSquare(144));
console.log(isPerfectSquare(5005));
