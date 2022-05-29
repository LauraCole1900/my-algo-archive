// Write code to create a function that accepts a string and returns the string in camelCase


// take in a string
// lowercase the string
// split the string on spaces to create an array
// starting with the second word in the array, capitalize each word
// join the string on nothing
// return the new string


const camelCase = function (str) {
  let casedArr = [];
  const wordArr = str.toLowerCase().split(" ");
  casedArr.push(wordArr[0]);
  for (let i = 1; i < wordArr.length; i++) {
    const casedWord = wordArr[i][0].toUpperCase() + wordArr[i].substring(1);
    casedArr.push(casedWord);
  }
  const newStr = casedArr.join("");
  return newStr;
};


// Alternate
const camelCase = function (str) {
  let result = "";
  const words = str.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const letters = word.split("");

    if (i > 0) {
      letters[0] = letters[0].toUpperCase();
    }

    result += letters.join("");
  }

  return result;
};


console.log(camelCase("Camel CASE"));
console.log(camelCase("A christmas carol"));
console.log(camelCase("Annie the cat is cool"));
