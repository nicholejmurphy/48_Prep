/** constructNote
 *
 * accepts two strings: a message and some letters.
 * return true if the message can be built with the letters that you are given;
 * otherwise, it should return false.
 *
 * Inputs:
 *  All lowercase, no spaces, no special characters
 *
 * Constraints:
 *  Time Complexity: O(M + N): If M is the length of message and N is
 *  the length of letters
 *
 * Examples:
 *  constructNote('aa', 'abc') // false
 *  constructNote('abc', 'dcba') // true
 *  constructNote('aabbcc', 'bcabcaddff') // true
 *
 */

// Create a frequency counter for each character in a string
function frequencyCounter(str) {
  const counter = {};
  for (let char of str) {
    counter[char] = counter[char] + 1 || 1;
  }
  return counter;
}

function constructNote(message, letters) {
  // Get a frequency obj for the characters in each string
  const messageFreq = frequencyCounter(message);
  const lettersFreq = frequencyCounter(letters);

  // Check if the lettersFreq contains key
  // Check if lettersFreq contains a value < char count of messageFreq
  for (let key in messageFreq) {
    if (!lettersFreq[key]) return false;
    if (messageFreq[key] > lettersFreq[key]) return false;
  }
  return true;
}
