//! Incomplete!!!

// Write code to create a function that accepts a string and returns all permutations of that string


// Takes in a string
// Splits string into array?
// Iterates over array -> nested for loop?
// Re-joins letters in new order
// Checks whether given solution is already in array -- what about duplicate letters?
// Pushes solution to array


// Keeps duplicates
const permutationString = function (str) {
  if (!str || typeof str !== "string") {
    return "Please enter a string"
  } else if (str.length === 1) {
    return str;
  }

  const strArr = str.split("")
  let resultsArray = [];

  strArr.map((letter, i) => {
    let remainingLetters = str.slice(0, i) + str.slice(i + 1, str.length);
    for (let permut of permutationString(remainingLetters)) {
      resultsArray.push(letter + permut)
    }
  })
  return resultsArray;
};


// Removes duplicates
const permutationString = function (str) {
  if (!str || typeof str !== "string") {
    return "Please enter a string"
  } else if (str.length === 1) {
    return str;
  }

  let resultsArray = [];

  for (let i = 0; i < str.length; i++) {
    const letter = str[i]
    if (str.indexOf(letter) !== i) {
      continue
    }
    let remainingLetters = str.slice(0, i) + str.slice(i + 1, str.length);
    for (let permut of permutationString(remainingLetters)) {
      resultsArray.push(letter + permut)
    }
  }
  return resultsArray;
};

// const permutationString = function (str) {

// };

console.log(permutationString("dog"));
console.log(permutationString("sing"));
console.log(permutationString("bobby"));
