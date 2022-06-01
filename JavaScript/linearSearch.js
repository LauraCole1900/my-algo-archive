// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods


// Takes in array and a number
// Iterate over array and compare each to see if number is in the array
// If true, return index
// Else return -1


const linearSearch = function (arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};


console.log(linearSearch([2, 5, 4, 9, 11], 11));
console.log(linearSearch([1, 2, 3, 4, 5], 11));
console.log(linearSearch([42, 35, 84, 611], 11));
console.log(linearSearch([14, 13, 12, 11, 10], 11));