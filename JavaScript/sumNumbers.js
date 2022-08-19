// Write a function that takes in an integer and outputs the sum of all the numbers from 1 to that integer.

// Ex:
// Input: 2
// Output: 3 (because 1 + 2 = 3)

// Input: 4
// Output: 10  (because 1 + 2 + 3 + 4 = 10)

// Input: 10
// Output: 55


// iterate over all numbers up to num
// add each number to the previous total
// at the end, return the total


function sumNums(num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
};


function sumNums(num) {
  var total = 0;
  var n = 0;
  while (n <= num) {
    total = total + n;
    n++;
  }
  return total;
};


function sumNums(num) {
  var total = 0;
  while (num > 0) {
    total = total + num;
    num--;
  }
  return total;
};


console.log(sumNums(5));
console.log(sumNums(2));
console.log(sumNums(4));
console.log(sumNums(10));
