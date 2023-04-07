'use strict';

/**
 * checks to see if the word can be built using the letter argument's contents
 * takes in two lowercase strings.
 * returns boolean.
 */
function canConstructWord(word, letters) {
  const letterCount = getFrequency(letters);

  for (let char of word) {
    if (!letterCount[char]) {
      return false;
    } else {
      letterCount[char]--;
      if (letterCount[char] < 0) {
        return false;
      }
    }
  }
  return true;
}

function getFrequency(letters) {
  const freqCount = {};

  for (let letter of letters) {
    let currLetter = freqCount[letter] || 0;
    freqCount[letter] = currLetter + 1;
  }
  return freqCount;
}

/** Write a frequency counter
 * pass the letters into the counter
 * return count obj
 *
 * loop the word and subtract 1 at each letter key in the counter
 * if < 0 || undefined return false
 * return true
 *
 */
