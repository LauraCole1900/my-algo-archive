// Write a function that takes 2 parameters - the first is an array, the second is an element that may or may not be in the array. 
// Without using any built in array methods, return true if the element is in the array or false otherwise. 

// Ex:
// Input: [1,2,3]  1
// Output: true

// Input: [1,2,3]  4
// Output: false

// Input: ['code', 'dev', 'nerd']  'nerd'
// Output: false

// Input: ['code', 'dev', 'nerd']  'genius'
// Output: false

const testElement = (arr, el) => {
  for (const item of arr) {
    if (item === el) {
      return true;
    }
  }
  return false
};


// Official solution:
const includes = function (arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    if (elem === arr[i]) {
      return true;
    }
  }
  return false;
}

console.log(testElement(['code', 'dev', 'nerd'], 'nerd'));
console.log(testElement([1, 2, 3], 4));
console.log(testElement([1, 2, 3], 1));
console.log(testElement(['code', 'dev', 'nerd'], 'genius'));
