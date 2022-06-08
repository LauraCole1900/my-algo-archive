// Write a function that takes two strings and returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty


// takes in two strings
// split the strings into arrays
// filter the second array based on what's included in the first array
// compare the length of the second array and the result array
// if same, return true
// else return false
// duplicates? - This solution doesn't account for duplicates


const concertFlyer = function (magazine, flyer) {
  const magArr = magazine.split(" ");
  const flyerArr = flyer.split(" ");
  const resultArr = flyerArr.filter(word => magArr.includes(word));
  return resultArr.length === flyerArr.length ? true : false;
};


// Alternate that accounts for duplicates:
const concertFlyer = function (magazine, flyer) {
  let resArr = [];
  let contIdx = 0;
  const magArr = magazine.split(" ");
  const flyerArr = flyer.split(" ");
  const magSort = magArr.sort((a, b) => a > b ? 1 : -1);
  const flyerSort = flyerArr.sort((a, b) => a > b ? 1 : -1);

  magSort.forEach(word => {
    for (let i = contIdx; i < flyerSort.length; i++) {
      if (word === flyerSort[i]) {
        resArr.push(word);
        contIdx = i + 1;
        break;
      }
    }
  })

  return resArr.length === flyerArr.length ? true : false;
}


// Alternate:
const concertFlyer = function (magazine, flyer) {
  const magazineWords = magazine.split(' ');
  const flyerWords = flyer.split(' ');

  let magazineMap = {};
  let flyerMap = {};

  for (let i = 0; i < magazineWords.length; i++) {
    const word = magazineWords[i];
    if (!magazineMap[word]) {
      magazineMap[word] = 1;
    } else {
      magazineMap[word]++;
    }
  }

  for (let i = 0; i < flyerWords.length; i++) {
    const word = flyerWords[i];
    if (!flyerMap[word]) {
      flyerMap[word] = 1;
    } else {
      flyerMap[word]++;
    }
  }

  for (let key in flyerMap) {
    if (magazineMap[key] !== flyerMap[key]) {
      return false;
    }
  }

  return true;
};


console.log(concertFlyer("hello world", "hello"));
console.log(concertFlyer("Why are there so many songs about rainbows?", "so many songs"));
console.log(concertFlyer("Give me one grand today night", "Give one grand today"));
console.log(concertFlyer("I've got a lovely bunch of coconuts", "two times two is four"));
console.log(concertFlyer("What's so amazing that keeps us stargazing", "stargazing whats keeps us so amazing"));
console.log(concertFlyer("Raindrops on roses and whiskers on kittens", "kittens whiskers on roses whiskers"));
