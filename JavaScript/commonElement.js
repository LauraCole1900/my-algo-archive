// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method


// take in two arrays
// iterate over the first array
// on each iteration, iterate over the second array and compare the two elements
// if the element matches, set that element as the value of a variable
// return the variable


const commonElement = function (arrA, arrB) {
  let commonEl;
  arrA.forEach(num => {
    for (let i = 0; i < arrB.length; i++) {
      if (num === arrB[i]) {
        commonEl = num;
      }
    }
  })
  return commonEl;
};


// Alternate pushing elements to an object:
const commonElement = function (arrA, arrB) {
  let elements = {};

  for (let i = 0; i < arrA.length; i++) {
    const num = arrA[i];
    elements[num] = true;
  }

  for (let i = 0; i < arrB.length; i++) {
    const num = arrB[i];

    if (elements[num] === true) {
      return num;
    }
  }
};


// Alternate using Set:
const commonElement = function (arrA, arrB) {
  const elements = new Set();

  for (let i = 0; i < arrA.length; i++) {
    const num = arrA[i];
    elements.add(num);
  }

  for (let i = 0; i < arrB.length; i++) {
    const num = arrB[i];

    if (elements.has(num)) {
      return num;
    }
  }
};


console.log(commonElement([5, 3, 4, 10], [0, 4, 9, 99]));
console.log(commonElement([82, 43, 17, 0, -81], [1, 0, -1, -2, -10]));
console.log(commonElement([10, 8, 6, 4, 2], [8, 80, 800, 8000, 80000]));
console.log(commonElement([18, 42, 116, 34, 2], [5, 13, 597, 51, 29]));
