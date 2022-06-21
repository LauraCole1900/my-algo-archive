// Write a function that takes an array of numbers and returns an array with each number doubled. 

// Ex:
// Input: [1,2,3]
// Output: [2,4,6]

// Input: [-1,-2,-3]
// Output: [-2, -4, -6]


// Take in an array
// Iterate over the array
// Double each item
// Return a new array with the doubled items


const doubler = (arr) => {
  const newArr = [];
  arr.forEach(item => {
    const doubledItem = item * 2;
    newArr.push(doubledItem);
  });
  return newArr;
};


const doubler = (arr) => {
  const newArr = arr.map(item => item * 2);
  return newArr;
};


const doubler = (arr) => arr.map(item => item * 2);


// Official solution:
const double = function (arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const newNum = arr[i] * 2;
    newArr.push(newNum);
  }

  return newArr;
};

console.log(doubler([1, 2, 3]))
console.log(doubler([-1, -2, -3]))
console.log(doubler([3, 6, 24]))
