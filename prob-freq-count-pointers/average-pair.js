/** averagePair
 *
 * Given a sorted array of integers and a target average,
 * determine if there is a pair of values in the array where
 * the average of the pair equals the target average.
 *
 * There may be more than one pair that matches the average target.
 *
 * Constraints:
 * Time Complexity => O(N)
 *
 * Examples:
 * averagePair([1, 2, 3], 2.5); // true
 * averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
 * averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
 * averagePair([], 4); // false
 */

function averagePair(arr, target) {
  // Check if array is empty
  if (!arr.length) return false;

  // Track to pointers for left and right indicies
  let left = 0;
  let right = arr.length - 1;

  // While left < right,
  while (left < right) {
    //Check if average of nums === target //true
    let avg = (arr[left] + arr[right]) / 2;
    if (avg === target) return true;
    // if avg > target, right--, otherwise left++
    if (avg > target) {
      right--;
    } else {
      left++;
    }
  }
  // return false if loop completes and target not reached
  return false;
}
