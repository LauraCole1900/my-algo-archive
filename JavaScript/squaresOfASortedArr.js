// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order


// take in an array of numbers
// iterate over the array
// create new array of products of each number multiplied by itself
// sort the new array
// return the resulting sorted array


const sortedSquares = function (arr) {
  const squaredArr = arr.map(num => num * num);
  const resultArr = squaredArr.sort((a, b) => a - b);
  return resultArr;
};


// Alternate (doesn't sort them?):
const sortedSquares = function (arr) {
  const result = new Array(arr.length);

  let idx1 = 0;
  let idx2 = arr.length - 1;
  let idx3 = result.length - 1;

  while (idx1 <= idx2) {
    const left = arr[idx1];
    const right = arr[idx2];

    if (Math.abs(left) > Math.abs(right)) {
      result[idx3] = left ** 2;
      idx1++;
    } else {
      result[idx3] = right ** 2;
      idx2--;
    }

    idx3--;
  }

  return result;
};


console.log(sortedSquares([1, 2, 3, 4, 5]));
console.log(sortedSquares([-2, 14, 3, -10, 12]));
console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
console.log(sortedSquares([]));
