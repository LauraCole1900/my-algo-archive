// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method


// takes in a string
// split the string into an array
// iterate through the array in reverse
// on each iteration, concatenate the letter back onto a new string
// return the new string


const reverse = (str) => {
  let newStr = "";
  const strArr = str.split('');
  for (let i = strArr.length - 1; i >= 0; i--) {
    newStr = newStr.concat(strArr[i]);
  }
  return newStr;
};


// Alternate using +=:
const reverse = (str) => {
  let result = '';

  for (let i = str.length - 1; i >= 0; i--) {
    const letter = str[i];
    result += letter;
  }

  return result;
};


console.log(reverse("Hello world!"));
console.log(reverse("Goodbye world!"));
console.log(reverse("Yakko, Wakko and Dot!"));
