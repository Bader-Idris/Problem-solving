// @ts-check

/**
 * Creates an expectation object for a given value, providing methods to assert equality or inequality.
 *
 * @param {string} val - The value to be tested.
 * @returns {{ toBe: (val2: string) => void, notToBe: (val2: string) => void }} An object with methods to assert equality (`toBe`) or inequality (`notToBe`).
 */
const expect = function(val) {
  return {
    /**
     * Asserts that the value is strictly equal to the provided value.
     * Throws an error if the values are not equal.
     *
     * @param {string} val2 - The value to compare against.
     * @throws {Error} Throws an error if the values are not equal.
     */
    toBe: (val2) => val === val2 || (() => { throw new Error("Not Equal"); })(),

    /**
     * Asserts that the value is not strictly equal to the provided value.
     * Throws an error if the values are equal.
     *
     * @param {string} val2 - The value to compare against.
     * @throws {Error} Throws an error if the values are equal.
     */
    notToBe: (val2) => val !== val2 || (() => { throw new Error("Equal"); })()
  };
};

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"

// change its name because it's used in built-in js