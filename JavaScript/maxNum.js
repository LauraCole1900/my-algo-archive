// Write code to return the largest number in the given array


// sort the array
// need to parse? -- no, because JS automatically parses numbers when they're used in math operations
// return the last number


const maxNum = function (arr) {
  arr.sort((a, b) => a - b);
  return arr.at(-1);
};


// Alternate using for loop:
const maxNum = function (arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let currentNum = arr[i];

    if (currentNum > max) {
      max = currentNum;
    }
  }

  return max;
};


console.log(maxNum([2, 4, 1, 256, 16, 12]));