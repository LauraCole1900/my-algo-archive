// Write a function that takes in an array of numbers and outputs the average of all the numbers.


// Ex:
// Input: [ 1 , 4 , 7 ]
// Output: 4

// Input: [ 10, 5 ]
// Output: 7.5

// Input: [ 1.5, 3, 2.5, 1 ]
// Output: 2


// iterates over array and adds each number to the rolling total
// divides the total by the length of the array


function averageArr(arr) {
  let total = 0;

  arr.forEach(num => {
    total += num
  });
  let average = total / arr.length;
  console.log(average);
};


// Alternate:
var averageArr = function (numArr) {
  var sum = 0;
  for (var i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  return sum / numArr.length;
};


averageArr([1, 4, 7]);
averageArr([10, 5]);
averageArr([1.5, 3, 2.5, 1]);
