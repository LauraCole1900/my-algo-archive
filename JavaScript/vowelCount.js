// Write code to return the the number of vowels in `str`


// Define the vowels
// Loop over the string
// Lower case the current letter
// If the current letter is included in vowel array, increment count


const vowelCount = function (str) {
  const vowelArr = ["a", "e", "i", "o", "u"]
  let numVowels = 0;

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (vowelArr.includes(letter.toLowerCase())) {
      ++numVowels;
    }
  }
  return numVowels;
};


// Alternate using for loops
const vowelCount = function (str) {
  let result = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < str.length; i++) {
    const letter = str[i].toLowerCase();

    if (vowels.indexOf(letter) !== -1) {
      result += 1;
    }
  }

  return result;
};


// Alternate using ||
const vowelCount = function (str) {
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    const letter = str[i].toLowerCase();

    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      result += 1;
    }
  }

  return result;
};


// Alternate using forEach
const vowelCount = function (str) {
  const vowelArr = ["a", "e", "i", "o", "u"]
  let numVowels = 0;

  str.forEach(letter => {
    if (vowelArr.includes(letter.toLowerCase())) {
      ++numVowels;
    }
  })
  return numVowels;
};


// Alternate using for-of
const vowelCount = function (str) {
  const vowelArr = ["a", "e", "i", "o", "u"]
  let numVowels = 0;

  for (let letter of str) {
    if (vowelArr.includes(letter.toLowerCase())) {
      ++numVowels;
    }
  }
  return numVowels;
};


// Matthew solution
const vowelCount = findVowels => {
  let vowels = ''
  findVowels.toLowerCase().split('').forEach(char => {
    if (['a', 'e', 'i', 'o', 'u'].includes(char)) vowels += char
  })
  return vowels.length
}


console.log(vowelCount("Coding is exciting"));
console.log(vowelCount("It's all Greek to me"));
console.log(vowelCount("Aberdeen!"));
