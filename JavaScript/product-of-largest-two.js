// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two


// sort the array
// multiplies last two numbers in sorted array


const productOfLargestTwo = function (arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const product = sortedArr[sortedArr.length - 1] * sortedArr[sortedArr.length - 2];
  return product;
};


// Alternate using for loop
const productOfLargestTwo = function (arr) {
  let largest = null;
  let secondLargest = null;

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];

    if (currentNumber > largest || largest === null) {
      secondLargest = largest;
      largest = currentNumber;
    } else if (currentNumber > secondLargest || secondLargest === null) {
      secondLargest = currentNumber;
    }
  }

  return largest * secondLargest;
};


// Andrew solution:
const productOfLargestTwo = (input) => {
  const highestNumber = Math.max(...input);
  const newInput = input.filter(a => a !== highestNumber);
  const secondHighest = Math.max(...newInput);
  const mathResult = highestNumber * secondHighest;
  return mathResult;
};


console.log(productOfLargestTwo([2, 5, 6, 3, 13, 25, 14]));
console.log(productOfLargestTwo([1, 29, 42, 16, 100, 39, 87]));
