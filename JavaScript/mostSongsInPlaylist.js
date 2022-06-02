// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist


// Take in an array
// Sort the array
// Iterate through the array to add up durations & number of durations
// Each iteration, compare whether total is >60
// If no, increment count of durations
// If yes, return count of durations


const mostSongsInPlaylist = function (arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  let numSongs = 0;
  let totalDuration = 0;
  for (let i = 0; i < sortedArr.length; i++) {
    totalDuration = totalDuration + sortedArr[i];
    if (totalDuration > 60) {
      return numSongs;
    } else {
      ++numSongs;
    }
  }
  return numSongs;
};


// Alternate:
const mostSongsInPlaylist = function (arr) {
  const sortedArr = arr.sort();
  let totalMins = 0;
  let totalSongs = 0;

  for (let i = 0; i < sortedArr.length; i++) {
    const currentSongDuration = sortedArr[i];

    if (totalMins + currentSongDuration <= 60) {
      totalMins += currentSongDuration;
      totalSongs++;
    } else {
      return totalSongs;
    }
  }

  return totalSongs;
};


console.log(mostSongsInPlaylist([3, 7, 9, 10, 2, 23, 14, 5, 3, 3, 7, 9, 2, 1, 1, 6]));
console.log(mostSongsInPlaylist([13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
