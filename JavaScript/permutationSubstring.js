// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false


// split strings into arrays
// filter second array by contents of first array
// compare length of second array to length of filter results
// return true if the same
// else return false
// case-sensitive?
// do spaces count?


const permutationSubstring = function (str, sub) {
  const strArr = str.split("");
  const subArr = sub.split("");
  const filtered = subArr.filter(num => strArr.includes(num));
  return subArr.length === filtered.length ? true : false;
};


// Alternate:
const permutationSubstring = function (str, sub) {
  let charMap = {};

  for (let i = 0; i < sub.length; i++) {
    const char = sub[i];

    if (char in charMap) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char in charMap) {
      charMap[char] -= 1;
    }
  }

  for (let key in charMap) {
    if (charMap[key] > 0) {
      return false;
    }
  }

  return true;
};


console.log(permutationSubstring("tbacowa", "bat"));
console.log(permutationSubstring("nAtsuiPlwuan", "Austin"));
console.log(permutationSubstring("nnhsuieaero", "summer"));
console.log(permutationSubstring("octmantisplantic", "atlantic ocean"));
