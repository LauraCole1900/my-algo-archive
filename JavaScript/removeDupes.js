// Write a function that takes in an array of integers and returns the array with duplicates removed

// Ex:
// Input: [1,2,2,3]
// Output: [1,2,3]

// Input: [4,5,4,4,7,5]
// Output: [4,5,7]

// Input: [1,2,3,5]
// Output: [1,2,3,5]


const removeDups = arr => {
  let newArr = [];
  arr.map(item => {
    if (!newArr.includes(item)) {
      newArr.push(item)
    }
  })
  return newArr;
};

console.log(removeDups([1, 2, 2, 3]));
console.log(removeDups([4, 5, 4, 4, 7, 5]));
console.log(removeDups([1, 2, 3, 5]));


// Official solution:
var deduper = function (numArr) {
  var newArr = [];
  for (var i = 0; i < numArr.length; i++) {
    if (!newArr.includes(numArr[i])) {
      newArr.push(numArr[i]);
    }
  }
}


// Set and spread solution:
const setDups = arr => {
  let newArr = [...new Set(arr)];
  console.log(newArr);
}


// Phil solution:
const originalArray = [1, 1, 1, 3, 6, 6, 7, 9, 9];

originalArray.forEach((num, index) => {
  console.log((`${num} - ${index} - ${originalArray.indexOf(num)}`));
});

const noDupes = originalArray.filter((num, index) => {
  return originalArray.indexOf(num) === index;
});
