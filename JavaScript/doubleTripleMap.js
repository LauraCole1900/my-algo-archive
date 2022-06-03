// Write code to create a function that accepts an array of numbers and returns a new array that corresponds to the original array
// If a element in the original array is even, the element at the same index in the new array should be double the original element
// If an element in the original array is odd, the element at the same index of the new array should be triple the original element


// take in array
// tests for odd or even
// doubles evens, triples odds


const doubleTripleMap = function (arr) {
  const newArr = arr.map(num => {
    if (num % 2 === 0) {
      return num * 2
    }
    return num * 3
  })
  return newArr;
};


// Alternate using ternary:
const doubleTripleMap = function (arr) {
  const newArr = arr.map(num => {
    return num % 2 === 0 ? num * 2 : num * 3
  })
  return newArr;
};


console.log(doubleTripleMap([4, 5, 6, 1, 0, -2, -6]));
console.log(doubleTripleMap([-4, 25, 16, 0, -2, 6]));
console.log(doubleTripleMap([11, 42, 23, 0, -3, -0, 9]));