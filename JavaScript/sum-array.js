// Write code to add all the numbers in `arr` and return the total


// have a running total
// iterate over array and add each number to total
// return total once every number has been added


const sumArray = function (arr) {
  let total = 0;
  arr.forEach(num => total += num);
  return total;
};


// Alternate with for loop:
const sumArray = function (arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    result += currentNumber;
  }

  return result;
};


// Alternate with reducer:
const sumArray = (arr) => {
  const reducer = (prevValue, currValue) => prevValue + currValue;
  return arr.reduce(reducer);
}


console.log(sumArray([2, 3, 4, 5]));
