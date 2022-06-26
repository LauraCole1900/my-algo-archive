//! Incomplete!!!

// Write code to create a function that accepts a string and returns all permutations of that string


// Takes in a string
// Splits string into array?
// Iterates over array -> nested for loop?
// Re-joins letters in new order
// Checks whether given solution is already in array -- what about duplicate letters?
// Pushes solution to array


const permutationString = function (str) {
  if (!str || typeof str !== "string") {
    return "Please enter a string"
  } else if (str.length === 1) {
    return str;
  }

  let resultsArray = [];

  str.map((letter, i) => {

  })
  return resultsArray;
};

// const permutationString = function (str) {

// };

// const permutationString = function (str) {

// };