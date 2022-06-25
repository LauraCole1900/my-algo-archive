// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized


// take in a string
// split the string on the spaces
// iterate over new array & capitalize first letter of each word
// rejoin words on spaces into new string


const titleCase = function (str) {
  const wordArr = str.split(" ");
  const capsArr = wordArr.map(word => (word[0].toUpperCase() + word.substring(1)));
  return capsArr.join(" ");
};


// Alternate using for loop & splitting each word into letters
const titleCase = function (str) {
  const result = [];

  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    const word = words[i].split("");

    word[0] = word[0].toUpperCase();

    result.push(word.join(""));
  }

  return result.join(" ");
};


const titleCaseWithBasicStyleguide = function (str) {
  const wordArr = str.toLowerCase().split(" ");
  const nonCapsArr = ["a", "an", "and", "as", "as if", "as long as", "at", "but", "by", "even if", "for", "from", "if", "if only", "in", "into", "like", "near", "now that", "nor", "of", "off", "on", "on top of", "once", "onto", "or", "out of", "over", "past", "so", "so that", "than", "that", "the", "till", "to", "up", "upon", "with", "when", "yet"];
  const capsArr = wordArr.map((word, i) => {
    if (i !== 0 && i !== wordArr.length - 1 && (nonCapsArr.includes(word) || nonCapsArr.includes(`${word} ${wordArr[i + 1]} ${wordArr[i + 2]}`) || nonCapsArr.includes(`${wordArr[i - 1]} ${word} ${wordArr[i + 1]}`) || nonCapsArr.includes(`${wordArr[i - 2]} ${wordArr[i - 1]} ${word}`))) {
      return word;
    } else {
      return (word[0].toUpperCase() + word.substring(1))
    }
  })
  return capsArr.join(" ");
};


console.log(titleCase("a christmas carol"));
console.log(titleCase("the quick brown fox jumped over the lazy dog"));

console.log(titleCaseWithBasicStyleguide("a christmas carol"));
console.log(titleCaseWithBasicStyleguide("the quick brown fox jumped over the lazy dog"));
console.log(titleCaseWithBasicStyleguide("As long as I love you I'll be there"));
console.log(titleCaseWithBasicStyleguide("Stand by even if nothing happens"));
console.log(titleCaseWithBasicStyleguide("On top of olD smokey"));


// List of words not generally capitalized: and, as, as if, as long as, at, but, by, even if, for, from, if, if only, in, into, like, near, now that, nor, of, off, on, on top of, once, onto, or, out of, over, past, so, so that, than, that, till, to, up, upon, with, when, yet

// Good article on capitalization rules: https://whenyouwrite.com/what-words-do-you-not-capitalize-in-a-title/
