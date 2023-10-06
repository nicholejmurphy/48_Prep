/**
 * longestFall
 *
 * accepts an array of integers, and returns the length
 * of the longest consecutive decrease of integers.
 *
 * Examples:
 *   longestFall([5, 3, 1, 3, 0]) // 3, 5-3-1 is the longest consecutive sequence of decreasing integers
 *   longestFall([2, 2, 1]) // 2, 2-1 is the longest consecutive sequence of decreasing integers
 *   longestFall([2, 2, 2]) // 1, 2 is the longest consecutive sequence of decreasing integers
 *   longestFall([5, 4, 4, 4, 3, 2]) // 3, 4-3-2 is the longest
 *   longestFall([9, 8, 7, 6, 5, 6, 4, 2, 1]) // 5, 9-8-7-6-5 is the longest
 *   longestFall([]) // 0
 */

function longestFall(arr) {
  // check if arr is empty
  if (!arr.length) return 0;

  // Keep track of highest count
  let topCount = 0;

  // if array is not empty, each num counts as 1 fall
  // current count will always default to one
  let currentCount = 1;

  // loop through arr, check if next idx is < current
  // if so, currentCount++;
  // otherwise check the next
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      currentCount++;
    } else {
      currentCount = 1;
    }
    if (currentCount > topCount) {
      topCount = currentCount;
    }
  }

  return topCount;
}
