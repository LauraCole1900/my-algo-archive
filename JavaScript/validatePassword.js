// Write a function that takes a string as a parameter and determines if it is a valid password with the following constraints:

// 1. It must be at least 8 characters long
// 2. It must contain at least 1 capital letter
// 3. It must contain at least 1 lower case letter

// Output true if the string is a valid password or false otherwise.

// Ex:
// Input: RexTheDog
// Output: true

// Input: rexthedog
// Output: false

// Input: REXTHEDOG
// Output: false

// Input: Dog
// Output: false


// Takes in string
// Sets boolean for length, uppercase & lowercase
// Iterates over password
// Tests each condition for each letter
// If each boolean flips to true, return true
// Else return false


const isValidPass = (password) => {
  let length = false;
  let uppers = false;
  let lowers = false;

  if (password.length >= 8) {
    length = true;
  }

  if (length) {
    for (let i = 0; i < password.length; i++) {
      if (password[i].toLowerCase() === password[i]) {
        lowers = true;
      }
      if (password[i].toUpperCase() === password[i]) {
        uppers = true
      }
      if (lowers && uppers) {
        return true;
      }
    }
  }
  return false;
}



// Official solution:
var isValidPass = function (password) {
  var hasLower = false;
  var hasUpper = false;

  if (password.length < 8) {
    return false;
  }

  for (var i = 0; i < password.length; i++) {
    if (password[i].toLowerCase() === password[i]) {
      hasLower = true;
    }
    if (password[i].toUpperCase() === password[i]) {
      hasUpper = true;
    }
  }

  return hasLower && hasUpper;
};


console.log(isValidPass("RexTheDog"));
console.log(isValidPass("rexthedog"));
console.log(isValidPass("REXTHEDOG"));
console.log(isValidPass("Dog"));
