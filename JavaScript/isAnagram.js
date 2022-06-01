// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false


// Takes in two strings
// Sorts both
// Compares the sorted strings
// Return true if they're the same, else return false


const isAnagram = function (strA, strB) {
  const sortedStrA = strA.toLowerCase().split("").sort((a, b) => a > b ? 1 : -1).join("").trim()
  const sortedStrB = strB.toLowerCase().split("").sort((a, b) => a > b ? 1 : -1).join("").trim()
  if (sortedStrA === sortedStrB) {
    return true;
  } else {
    return false;
  }
};


// Same as above, but using ternary:
const isAnagram = function (strA, strB) {
  const sortedStrA = strA.toLowerCase().split("").sort((a, b) => a > b ? 1 : -1).join("").trim()
  const sortedStrB = strB.toLowerCase().split("").sort((a, b) => a > b ? 1 : -1).join("").trim()
  return sortedStrA === sortedStrB ? true : false;
};


// Alternate:
const isAnagram = function (strA, strB) {
  if (strA.length !== strB.length) {
    return false;
  }

  const aLetterMap = {};
  const bLetterMap = {};
  const strLength = strA.length;

  for (let i = 0; i < strLength; i++) {
    let aLetter = strA[i];
    let bLetter = strB[i];

    aLetterMap[aLetter] = (aLetterMap[aLetter] || 0) + 1;
    bLetterMap[bLetter] = (bLetterMap[bLetter] || 0) + 1;
  }

  for (let key in aLetterMap) {
    if (aLetterMap[key] !== bLetterMap[key]) {
      return false;
    }
  }

  return true;
};


console.log(isAnagram("It's a great day", "it's Taco Tuesday"));
console.log(isAnagram("abc", "cba"));
console.log(isAnagram("octagonal", "tganoalco"));
console.log(isAnagram("obsidian", "danisboba"));
console.log(isAnagram("targaryen", "gratawyen"));
