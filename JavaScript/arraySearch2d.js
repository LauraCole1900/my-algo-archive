// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array


// accepts 2d array
// iterates over top level of array
// iterates over 2nd level of array and increments counter for each X found


const arraySearch2D = function (arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "X") {
        ++counter
      }
    }
  }
  return counter;
};


console.log(arraySearch2D([["O", "O", "X"], ["O", "X", "X"], ["X", "O", "O"]]));
console.log(arraySearch2D([["X", "X", "O"], ["O", "O", "X"], ["X", "O", "X"]]));
