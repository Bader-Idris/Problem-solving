// @ts-check

/**
 * Creates a counter object with increment, decrement, and reset methods.
 *
 * @param {number} init - The initial value of the counter.
 * @returns {{ increment: () => number, decrement: () => number, reset: () => number }}
 *          An object with `increment`, `decrement`, and `reset` methods.
 */
const createCounter = function (init) {
  let count = init;
  return {
    /**
     * Increments the counter by 1 and returns the new value.
     *
     * @returns {number} The incremented counter value.
     */
    increment: () => ++count,

    /**
     * Resets the counter to its initial value.
     *
     * @returns {number} The reset counter value.
     */
    reset: () => (count = init),

    /**
     * Decrements the counter by 1 and returns the new value.
     *
     * @returns {number} The decremented counter value.
     */
    decrement: () => --count,
  };
};

/* was
var createCounter = function(init) {
    let count = init;
    return {
        increment: () => ++count,
        reset: () => (count = init),
        decrement: () => --count
    };
};
*/

/**
 * Example usage:
 * const counter = createCounter(5);
 * console.log(counter.increment()); // 6
 * console.log(counter.reset()); // 5
 * console.log(counter.decrement()); // 4
 */
