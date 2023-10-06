/**
 * sepereatePositive
 *
 * Accepts an array of non-zero integers.
 *
 * Separate the positive integers to the left and the
 * negative integers to the right.
 *
 * The positive numbers and negative numbers need not be in sorted order.
 *
 * The problem should be done in place
 * (in other words, do not build a copy of the input array).
 *
 */
function separatePositive(arr) {
  // keep track of lift and right indicies
  let left = 0;
  let right = arr.length - 1;

  // If the left pointing value is < 0, push it to the end.
  // We then know the right-most value is in it's correct place,
  // so move the right pointing index left ( -1 )
  // Otherwise, check the next value and move left right ( +1 )
  while (left < right) {
    if (arr[left] < 0) {
      arr.push(arr.splice(left, 1)[0]);
      right--;
    } else left++;
  }

  return arr;
}
