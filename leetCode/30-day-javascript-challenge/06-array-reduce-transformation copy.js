// @ts-check

/**
 * Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
 *
 * @param {number[]} nums - The array to reduce.
 * @param {(accumulator: number, currentValue: number) => number} fn - The function to apply on each element.
 * @param {number} init - The initial value of the accumulator.
 * @returns {number} The reduced value.
 */
const reduce = function (nums, fn, init) {
  //? declarative programming
  // return nums.reduce(fn, init)

  //! imperative programming
  // let result = init;
  // nums.forEach((n) => {
  //   result = fn(result, n);
  // });
  // return result;
  let result = init;
  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i]);
  }
  return result;
};
