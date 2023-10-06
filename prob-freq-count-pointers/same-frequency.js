/**
 *  sameFrequency
 *
 * Checks if two nums share the same digits
 *
 */

//  Create an obj to count freq of char in a string
function getNumsFrequency(numsStr) {
  const frequency = {};
  for (let num of numsStr) {
    frequency[num] = frequency[num] + 1 || 1;
  }
  return frequency;
}

// Takes two numbers and compares if they share the same values
function sameFrequency(num1, num2) {
  // convert nums to strings
  let str1 = num1.toString();
  let str2 = num2.toString();

  // check if each has the same # of characters
  if (str1.length !== str2.length) return false;

  // get frequency of each num as string
  const freq1 = getNumsFrequency(str1);
  const freq2 = getNumsFrequency(str2);

  // check if each has the same length of frequency keys
  if (Object.keys(freq1).length !== Object.keys(freq2).length) return false;

  // loop through num 1 frequency and compare to num2 vals
  for (let key in freq1) {
    if (freq1[key] !== freq2[key]) return false;
  }

  // return true
  return true;
}
