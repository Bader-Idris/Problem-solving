// @ts-check

/**
 * Filters an array based on a provided function and returns a new array with the elements that satisfy the condition.
 *
 * @param {number[]} arr - The array to filter.
 * @param {(element: number, index: number) => boolean} fn - The function to test each element. It receives the element and its index as arguments and returns a boolean.
 * @returns {number[]} A new array with the elements that satisfy the condition specified by `fn`.
 */
const filter = function (arr, fn) {
  // declarative programming
  // return arr.filter(fn);

  // imperative programming
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;
  /* a better do to less iteration approach is using while loop
  const result = [];
  let i = 0;
  const len = arr.length;
  while (i < len) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
    i++;
  }
  return result;
   */
};

/**
 * Example usage:
 * const result = filter([1, 2, 3, 4], (element, index) => element % 2 === 0);
 * console.log(result); // [2, 4]
 */
