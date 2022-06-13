// Write a function that takes in a string and outputs the number of vowels (not counting y).

// Ex:
// Input: "hello"
// Output: 2

// Input: "you are great!"
// Output: 6

// Input: "why?"
// Output: 0


// Taking in a string
// Compare it to vowels - I need to define the vowels. Array?
// I need to see if that vowel array includes the specific character I'm looking at - that sounds like I'm iterating. For loop?
// If they match, I need to increase the count of vowels by 1 - I need a variable for count of vowels


function countMyVowels(str) {
  var vowelsArr = ["a", "e", "i", "o", "u"];
  var countOfVowels = 0;
  var strCased = str.toLowerCase();
  for (var i = 0; i < strCased.length; i++) {
    if (vowelsArr.includes(strCased[i])) {
      countOfVowels++
    }
  }
  console.log(countOfVowels)
}

console.log(countMyVowels("hello"));
console.log(countMyVowels("you are great!"));
console.log(countMyVowels("why?"));
console.log(countMyVowels("DrIllTime!"));


// Alternate:
function vowelCounter(str) {
  var vowelCount = 0;
  var vowels = ["a", "e", "i", "o", "u"];
  var casedStr = str.toLowerCase();
  for (var i = 0; i < casedStr.length; i++) {
    if (vowels.includes(casedStr[i])) {
      vowelCount++
    }
  }
  console.log("Number of vowels", vowelCount);
}

console.log(vowelCounter("hello"));
console.log(vowelCounter("you are great!"));
console.log(vowelCounter("why?"));
console.log(vowelCounter("DrIllTime!"));
