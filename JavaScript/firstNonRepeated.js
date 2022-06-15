// Write a function that takes in a string and outputs the *first* occurrence of a character that does not repeat itself in that string.


// Ex:
// Input: “the quick brown fox jumps over the calm kitten quietly”
// Output: "b"

// Input: “this hat is the greatest!”
// Output: "g"

// Input: “what a wonderful day it has been!”
// Output: "o"


// Takes in a string
// Compares all characters in the string to each other -- how?
// Needs to iterate over the string
// compare indexOf and lastIndexOf?
// Returns the first character that doesn't occur more than once


function noRepeats(str) {
  let count = 0;
  let countedChar = {};
  for (let i = 0; i < str.length; i++) {
    if (Object.keys(countedChar).includes(str[i])) {
      continue;
    } else {
      for (let j = i; j < str.length; j++) {
        if (str[j] === str[i]) {
          ++count;
        }
      }
      countedChar = { ...countedChar, [str[i]]: count }
      count = 0;
    }
  }
  return Object.keys(countedChar).find(a => countedChar[a] === 1);
}

console.log(noRepeats("this hat is the greatest!"));
console.log(noRepeats("the quick brown fox jumps over the calm kitten quietly"));
console.log(noRepeats("what a wonderful day it has been!"));


// Alternate:
function firstNonRepeatChar(str) {
  var charCount = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (charCount[char]) {
      charCount[char]++;
      // console.log({ charCount });
    }
    else {
      charCount[char] = 1;
    }
  }
  for (var j in charCount) {
    if (charCount[j] == 1) {
      // console.log(j);
      return j;
    }
  }
}

console.log(firstNonRepeatChar("the quick brown fox jumps over the calm kitten quietly"));
console.log(firstNonRepeatChar("this hat is the greatest!"));
console.log(firstNonRepeatChar("what a wonderful day it has been!"));
