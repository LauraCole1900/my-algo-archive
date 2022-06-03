// Without using the built-in sort method, write code to merge two sorted arrays into a new sorted array


// take in two arrays
// merge the two arrays
// duplicates?
// iterate over the new array
// compare each entry to the previous
// if current entry > previous entry, continue
// if current entry < previous entry, switch them
// repeat while unsorted?


const mergeSorted = function (arr1, arr2) {
  const mergedArr = [...arr1, ...arr2]
  let done = false;
  while (!done) {
    done = true;
    for (let i = 0; i < mergedArr.length; i++) {
      if (mergedArr[i - 1] > mergedArr[i]) {
        done = false;
        const tempVar = mergedArr[i - 1];
        mergedArr[i - 1] = mergedArr[i];
        mergedArr[i] = tempVar;
      }
    }
  }
  return mergedArr;
};


// Alternate:
const mergeSorted = function (arr1, arr2) {
  let result = [];

  const idx1 = 0;
  const idx2 = 0;

  while (idx1 < arr1.length && idx2 < arr2.length) {
    let num1 = arr1[idx1];
    let num2 = arr2[idx2];

    if (num1 < num2) {
      result.push(num1);
      idx1++;
    } else {
      result.push(num2);
      idx2++;
    }
  }

  while (idx1 < arr1.length) {
    let num1 = arr1[idx1];
    result.push(num1);
    idx1++;
  }

  while (idx2 < arr2.length) {
    let num2 = arr2[idx2];
    result.push(num2);
    idx2++;
  }

  return result;
};


console.log(mergeSorted([1, 5, 4, 87, 6, 12], [42, 23, 36, 1, 15, 30]));
console.log(mergeSorted([1, 16, 23, 879, 37, 612], [402, 213, 6, 1, 15, 30]));


// Removing duplicates:
const mergeSortUndupe = function (arr1, arr2) {
  let unDupedArr = [];
  const mergedArr = [...arr1, ...arr2]
  let done = false;
  while (!done) {
    done = true;
    for (let i = 0; i < mergedArr.length; i++) {
      if (mergedArr[i - 1] > mergedArr[i]) {
        done = false;
        const tempVar = mergedArr[i - 1];
        mergedArr[i - 1] = mergedArr[i];
        mergedArr[i] = tempVar;
      }
    }
  }
  mergedArr.map(num => {
    if (!unDupedArr.includes(num)) {
      unDupedArr.push(num)
    }
  })
  return unDupedArr;
};


console.log(mergeSortUndupe([1, 5, 4, 87, 6, 12], [42, 23, 36, 1, 15, 30]));
console.log(mergeSortUndupe([1, 16, 23, 879, 37, 612], [402, 213, 6, 1, 15, 30]));
