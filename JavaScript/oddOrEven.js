// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

const oddOrEven = function (num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};


// Alternate using truthy/falsy values
const oddOrEven = function(num) {
  if (num % 2) {
    return "odd"
  } else {
    return "even"
  }
};


// Alternate using ternary:
const oddOrEven = function (num) {
  return num % 2 === 0 ? "even" : "odd";
};

console.log(oddOrEven(7));
console.log(oddOrEven(8));
console.log(oddOrEven(42));
console.log(oddOrEven(193));
