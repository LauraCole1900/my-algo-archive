// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome


// Loop through the string
// Compare the first and last letters and return false if not equal
// Compare the second and second from last letters and return false if not equal
// Continue in this manner until all letters are checked
// After all letters are checked, return true


const isPalindrome = function (str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - (i + 1)]) {
      return false;
    }
  }
  return true;
};


// Alternate reversing the string by splitting and iterating over array in reverse
const isPalindrome = function (str) {
  let newStr = '';
  const strArr = str.split('');
  for (let i = strArr.length - 1; i >= 0; i--) {
    newStr = newStr.concat(strArr[i]);
  }
  if (newStr === str) {
    return true;
  } else {
    return false;
  }
}

// Same as previous, but using ternary:
const isPalindrome = function (str) {
  let newStr = '';
  const strArr = str.split('');
  for (let i = strArr.length - 1; i >= 0; i--) {
    newStr = newStr.concat(strArr[i]);
  }
  return newStr === str ? true : false;
}

// Same as previous, but just returning newStr === str:
const isPalindrome = function (str) {
  let newStr = '';
  const strArr = str.split('');
  for (let i = strArr.length - 1; i >= 0; i--) {
    newStr = newStr.concat(strArr[i]);
  }
  return newStr === str;
}


// Alternate using split, reverse, join
const isPalindrome = function (str) {
  return str.split("").reverse().join("") === str;
}


// Alternate using forward for loop:
const isPalindrome = function (str) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};


console.log(isPalindrome("noon"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("RexTheDog"));
console.log(isPalindrome("tacocat"));
console.log(isPalindrome("racer"));
