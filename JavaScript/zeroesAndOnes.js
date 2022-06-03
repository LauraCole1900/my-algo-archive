// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false


// takes in a string
// iterates over string
// if 0, increments counter for 0; if 1, increments counter for 1
// compares the two counters
// if equal, return true
// else return false


const zeroesAndOnes = function (str) {
  let zeroCount = 0;
  let oneCount = 0;
  for (num of str) {
    if (num === "0") {
      zeroCount++;
    } else if (num === "1") {
      oneCount++;
    } else {
      continue;
    }
  }
  if (zeroCount === oneCount) {
    return true;
  } else {
    return false;
  }
};


// Alternate:
var zeroesAndOnes = function (str) {
  var zeroes = 0;
  var ones = 0;

  for (var i = 0; i < str.length; i++) {
    var num = str[i];

    if (num === "0") {
      zeroes++;
    } else if (num === "1") {
      ones++;
    }
  }

  return zeroes === ones;
};


// Andrew solution:
const compareNumbers = (string) => {
  const array = string.split('');
  const num0 = array.filter((num) => num.includes(0));
  const num1 = array.filter((num) => num.includes(1));
  return (num0.length === num1.length) ? true : false
}


console.log(zeroesAndOnes("11001001"));
console.log(zeroesAndOnes("1100100"));
console.log(zeroesAndOnes("110010"));
console.log(zeroesAndOnes("11001"));
