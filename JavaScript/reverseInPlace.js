// Write code to return a new array with all of the characters in `arr` reversed.
// You may NOT use the built-in reverse method


// loop over first half of array
// set current order to desired order by destructuring arr


const reverseInPlace = (arr) => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
  }
  return arr;
};


// Alternate:
const reverseInPlace = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  return arr;
};


console.log(reverseInPlace([1, 2, 3, 4, 5, 6, 7]));
console.log(reverseInPlace(["alligator", "cat", "giraffe", "musk ox", "panda", "tiger", "zebra"]));
console.log(reverseInPlace(["alligator", "cat", 14, 42, "panda", "tiger", 300]));
