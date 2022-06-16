// Write a function that takes in a number and returns the corresponding day of the week.

// Ex:
// Input: 1
// Output: 'Monday'

// Input: 5
// Output: 'Friday'

// Input: 8
// Output: undefined


// Takes in a number
// Compares number to array index (needs an array of days)
// Returns day at index num


const numToDay = (num) => {
  const dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  if (num < dayArr.length) {
    return dayArr[num];
  } else {
    return undefined;
  }
};

console.log(numToDay(1));
console.log(numToDay(5));
console.log(numToDay(8));


// Alternate, using ternary:
const weekDay = (num) => {
  const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return num <= daysArr.length ? daysArr[num] : '+++ Out of cheese error! +++';
}

console.log(weekDay(1));
console.log(weekDay(5));
console.log(weekDay(8));


// Alternate, using switch case:
var getDay = function (dayNum) {
  switch (dayNum) {
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    case 7:
      return 'Sunday';
    default:
      return undefined;
  }
};

console.log(getDay(1));
console.log(getDay(5));
console.log(getDay(8));


// Molly solution (similar to above):
function dayOfWeek(number) {
  if (number === 1) {
    console.log("Monday");
  } else if (number === 2) {
    console.log("Tuesday");
  } else if (number === 3) {
    console.log("Wednesday");
  } else if (number === 4) {
    console.log("Thursday");
  } else if (number === 5) {
    console.log("Friday");
  } else if (number === 6) {
    console.log("Saturday");
  } else if (number === 7) {
    console.log("Sunday");
  } else {
    console.log(undefined);
  }
}

dayOfWeek(1);
dayOfWeek(5);
dayOfWeek(8);
