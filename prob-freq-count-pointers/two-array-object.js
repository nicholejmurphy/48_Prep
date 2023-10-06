/** twoArrayObject
 *
 * accept two arrays of varying lengths.
 * The first array consists of keys and the second one consists of values.
 * Your function should return an object created from the keys and values.
 * If there are not enough values, the rest of keys should have a value of null.
 * If there not enough keys, just ignore the rest of values.
 *
 * Examples:
 * twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
 * twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
 * twoArrayObject(['x', 'y', 'z'], [1, 2]) // {'x': 1, 'y': 2, 'z': null}
 *
 */
function twoArrayObject(keys, values) {
  // Create a new obj to store key value pairs
  const pairs = {};

  // Loop through keys and assign value with same index
  for (let i = 0; i < keys.length; i++) {
    // If no index of value, set value to null
    pairs[keys[i]] = values[i] || null;
  }

  return pairs;
}
