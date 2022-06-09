// Write a function that takes an array and a positive integer and "rotates" the array to the left by the integer
// Modify the original array rather than returning a new one
// There is no need to return from this function


// take in array and number
// break off first number
// stick first number on back of array
// repeat designated number of times


const leftRotation = (arr, positions) => {
  let repeat = 0;
  while (repeat < positions) {
    const firstEl = arr.shift();
    arr.push(firstEl);
    repeat++;
  }
};


// Alternate, doesn't pass provided tests

// take in array and a number
// number indicates the index at which to break the array
// stick the pieces back together in the order second, first

const leftRotation = (arr, positions) => {
  const sliceArr = arr.slice(positions);
  arr = arr.slice(0, positions);
  arr = sliceArr.concat(arr);
  return arr;
};


// Alternate, decrementing:
const leftRotation = (arr, positions) => {
  if (arr.length === 0) {
    return;
  }

  while (positions > 0) {
    const first = arr.shift();

    arr.push(first);

    positions--;
  }
};
