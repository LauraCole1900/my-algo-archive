// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number


const fizzBuzz = function (arr) {
  arr.forEach(num => {
    if (num % 15 === 0) {
      console.log("Fizz Buzz");
    } else if (num % 5 === 0) {
      console.log("Buzz");
    } else if (num % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(num);
    }
  });
};


// Alternate using for loop:
const fizzBuzz = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];

    if (currentNumber % 15 === 0) {
      console.log("Fizz Buzz");
    } else if (currentNumber % 3 === 0) {
      console.log("Fizz");
    } else if (currentNumber % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(currentNumber);
    }
  }
};


// Alternate using switch case
const fizzBuzz = (arr) => {
  arr.forEach(num => {
    switch (0) {
      case num % 15:
        console.log("Fizz Buzz")
        break;
      case num % 5:
        console.log("Buzz")
        break;
      case num % 3:
        console.log("Fizz")
        break;
      default:
        console.log(num)
    }
  })
};

fizzBuzz([1, 2, 3, 4, 5, 12, 13, 15, 23, 30]);
