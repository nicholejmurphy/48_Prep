/**
 * isSubsequence
 *
 * Takes in two strings and checks whether the characters
 * in the first string form a subsequence of the characters
 * in the second string.
 *
 * In other words, the function should check whether the
 * characters in the first string appear somewhere in the
 * second string, without their order changing.
 *
 */
function isSubsequence(target, string) {
  // keep track of pointer for each string
  let targetIdx = 0;
  let strIdx = 0;

  // Check if each targetIdx is located in order in the string
  // If found ( targetIdx + 1 && strIdx +1), otherwise, keep
  // looking until either index has met its length.
  // If targetIdx meets its length.. return true
  // If strIdx meets its length.. return false
  while (targetIdx < target.length) {
    if (strIdx === string.length) return false;
    if (target[targetIdx] === string[strIdx]) {
      targetIdx++;
    } else strIdx++;
  }
  return true;
}
