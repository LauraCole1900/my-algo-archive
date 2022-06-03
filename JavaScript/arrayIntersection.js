// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays


// takes in two arrays
// sorts the arrays to make comparing easier
// iterates over the first array
// each iteration, iterates over the second array, starting where it broke off the previous iteration?
// if current character from array 1 is exactly equal to current character from array 2:
// push character to array, set second array index to index + 1, break?


const arrayIntersection = function (arr1, arr2) {
  let resArr = [];
  let contIdx = 0;
  const sort1 = arr1.sort((a, b) => a - b);
  const sort2 = arr2.sort((a, b) => a - b);

  sort1.forEach(num => {
    for (let i = contIdx; i < sort2.length; i++) {
      if (num === sort2[i]) {
        resArr.push(num);
        contIdx = i + 1;
        break;
      }
    }
  })

  return resArr;
};


// Alternate solution:
const arrayIntersection = function (arr1, arr2) {
  let numMap = {};
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    const num = arr1[i];

    if (numMap[num] === undefined) {
      numMap[num] = 1;
    } else {
      numMap[num]++;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    const num = arr2[i];

    if (numMap[num]) {
      result.push(num);
      numMap[num]--;
    }
  }

  return result;
};


console.log(arrayIntersection([1, 2, 3, 3, 6], [6, 3, 7, 2, 2]));
console.log(arrayIntersection([1, 2, 3, 4, 5], [5, 0, 3, 10, -2, 1]));
console.log(arrayIntersection([13, 12, 13, 14, 13, -9, 7], [11, 7, 13, -19, 13, 111, 13]));
console.log(arrayIntersection([99, 88, 77, 66], [55, 44, 33, 22, 11]));
console.log(arrayIntersection([1, 1, 2, 3, 5, 8, 13], [1, 21, 13, 1, 34, 1, 55]));
