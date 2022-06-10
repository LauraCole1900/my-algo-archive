// Write a function to take a string and return true if it contains valid sets of matching brackets, else return false


// take in a string containing brackets/parens
// look for a matching closer BEFORE hitting a closer for a different type of bracket
// switch case?
// how to find the previous bracket?
// push each bracket to array and pop them off once they close?


const validBrackets = function (str) {
  let bracketArr = [];

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "(":
      case "[":
      case "{":
        bracketArr.push(str[i]);
        continue;
      case ")":
        if (bracketArr.pop() !== "(") {
          return false;
        }
        continue;
      case "}":
        if (bracketArr.pop() !== "{") {
          return false;
        }
        continue;
      case "]":
        if (bracketArr.pop() !== "[") {
          return false;
        }
        continue;
      default:
        continue;
    }
  }

  return bracketArr.length === 0;
};


// Alternate using if statements:
// This is the official solution!
const validBrackets = function (str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
      continue;
    }

    if (char === ")") {
      if (stack.pop() !== "(") {
        return false;
      }
      continue;
    }

    if (char === "}") {
      if (stack.pop() !== "{") {
        return false;
      }
      continue;
    }

    if (char === "]") {
      if (stack.pop() !== "[") {
        return false;
      }
    }
  }

  return stack.length === 0;
};


console.log(validBrackets("( )"));
console.log(validBrackets("[ ( ) ]"));
console.log(validBrackets("{ } [ ( [] ) ]"));
console.log(validBrackets("( )[ ]{ }"));
console.log(validBrackets("( ]"));
console.log(validBrackets("( [ ) ]"));
