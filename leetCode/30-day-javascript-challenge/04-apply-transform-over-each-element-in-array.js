// @ts-check

/**
 * Applies a function to each element in an array and returns a new array with the results.
 *
 * @param {number[]} arr - The array to map over.
 * @param {(element: number, index: number) => number} fn - The function to apply to each element. It receives the element and its index as arguments.
 * @returns {number[]} A new array with the results of applying `fn` to each element of `arr`.
 */
const map = function (arr, fn) {
  let newArr = [];
  for (let n = 0; n < arr.length; n++) {
    newArr.push(fn(arr[n], n));
  }
  return newArr;
  // this is what I failed to achieve, it's faster than above one, because of using less Fns
};

// var map = function(arr, fn) {
//   const res = new Array(arr.length);
//   for (const i in arr) {
//     res[i] = fn(arr[i], Number(i));
//   }
//   return res
// }
