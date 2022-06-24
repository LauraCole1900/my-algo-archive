// Write a function that takes an array of numbers and a function as parameters. The function parameter should return true if the input meets a certain condition or false otherwise. Your function should return true if the function parameter returns true for _any_ of the array elements in the array parameter or false otherwise. 

// Ex:

// Input: [1,2,3]  function(num){return num === 2}
// Output: true

// Input: [1,5,3]  function(num){return num === 2}
// Output: false

// Input: [1,2,3]  function(num){return num % 2 === 0}
// Output: true

// Input: [1,5,3]  function(num){return num % 2 === 0}
// Output: false


// Needs to iterate over and apply the callback to the array
// If any array element is true according to the callback, return true and break out of the loop


const testForTrue = (arr, cb) => {
  let isTrue = false;
  for (num of arr) {
    const output = cb(num);
    if (output === true) {
      return isTrue = true;
    }
  }
  return isTrue;
};


// Official solution:
const any = function (arr, cb) {
  const isTrue = false;

  for (let i = 0; i < arr.length; i++) {
    const cbOutput = cb(arr[i]);
    if (cbOutput) {
      isTrue = cbOutput;
    }
  }

  return isTrue;
};
