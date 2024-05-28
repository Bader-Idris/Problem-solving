// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
function twoSum(array1, array2) {
  return (
    parseInt(array1.join("")) +
    parseInt(array2.join(""))// default radix = 10, no need to invoke it
  );
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
function luckyNumber(value) {
  const stringValue = value.toString();
  const NumericLength = stringValue.length;
  const halfLength = Math.floor(NumericLength / 2);

  let isPalindrome = true;
  for (let i = 0; i < halfLength; i++) {
    if (stringValue[i] !== stringValue[NumericLength - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
function errorMessage(input) {
  if (!input) return "Required field";
  if (Number.isNaN(Number(input)) || input == '0') return "Must be a number besides 0";
  return ""
}


//! better than be code!
/*
export function errorMessage(input) {
  if (!input) {
    return 'Required field'
  }
  return Number(input) ? '' : 'Must be a number besides 0'
}
*/
export {
  twoSum,
  luckyNumber,
  errorMessage
}