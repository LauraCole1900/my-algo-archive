// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string


// take in a string
// iterates over string
// if current character is included in the count array, skip to the next character
// within each iteration, iterates over string starting at current character and compares each remaining character to the current character
// object of counts


const characterCount = function (str) {
  let countObj = {};
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const currChar = str[i]
    if (Object.keys(countObj).includes(currChar)) {
      continue;
    } else {
      for (let j = i; j < str.length; j++) {
        if (str[j] === currChar) {
          ++count;
        }
      }
      countObj = { ...countObj, [currChar]: count };
      count = 0;
    }
  }
  return countObj;
};


// Alternate using for-in loop
const characterCount = function (str) {
  let charMap = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char in charMap) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  return charMap;
};


// Same as previous, but with ternary:
const characterCount = function (str) {
  let charMap = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    char in charMap ? charMap[char]++ : charMap[char] = 1;
  }

  return charMap;
};


console.log(characterCount("she sells sea shells by the sea shore"));
console.log(characterCount("peter piper picked a peck of pickled peppers"));