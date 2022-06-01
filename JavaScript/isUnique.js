// Write code to create a function that accepts an array numbers
// Return `true` if no number appears in the array more than once, else return `false`


// Takes in array
// Iterate over array
// Each iteration, compare current entry to remaining entries
// If there's a match, return false
// Else return true


const isUnique = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        return false;
      }
    }
  }
  return true;
};


// Alternate:
const isUnique = function (arr) {
  const numMap = {};

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];

    if (numMap[currentNumber] === true) {
      return false;
    }

    numMap[currentNumber] = true;
  }

  return true;
};


console.log(isUnique([2, 4, 6, 8, 10]));
console.log(isUnique([12, 23, 126, 26, 12]));
console.log(isUnique([-2, 34, 16, 30, 100]));
console.log(isUnique([1, 1, 2, 3, 5]));
