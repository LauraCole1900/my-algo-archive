// Return `true` if any combination of two numbers in the given array multiply into 20; else return `false`.


// take in array
// iterate over array
// on each iteration, iterate over the other numbers and multiply
// if the product is ever 20, return true
// else return false


const multiplyInto20 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const product = arr[i] * arr[j];
      if (product === 20) {
        return true;
      }
    }
  }
  return false;
};


// Alternate:
const multiplyInto20 = function (arr) {
  const numMap = {};

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

    let neededNumber = 20 / currentNum;

    if (numMap[neededNumber]) {
      return true;
    }
    numMap[currentNum] = true;
  }

  return false;
};


console.log(multiplyInto20([1, 2, 3, 4, 5, 6]));
console.log(multiplyInto20([2, 4, 6, 10, 23]));
console.log(multiplyInto20([1, 1, 2, 3, 5, 8]));
