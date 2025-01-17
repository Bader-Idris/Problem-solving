// @ts-check

/**
 * Get the position (index) of the card in the given stack
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} position of the card in the stack
 */
function getCardPosition(stack, card) {
  return stack.indexOf(card)
}

/**
 * Determine if the stack contains the card
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {boolean} true if card is in the stack, false otherwise
 */
function doesStackIncludeCard(stack, card) {
  return stack.includes(card);
}

/**
 * Determine if each card is even
 *
 * @param {number[]} stack
 *
 * @returns {boolean} true if all cards are even, false otherwise
 */
function isEachCardEven(stack) {
  // let isEven = false;
  // stack.forEach((card) =>
  //   card % 2 === 0
  //     ? (isEven = true)
  //     : (isEven = false)
  // );
  // return isEven;

  return stack.every((card) => card % 2 === 0);//second approach
}

/**
 * Check if stack contains odd-value card
 *
 * @param {number[]} stack
 *
 * @returns {boolean} true if the array contains odd card, false otherwise
 */
function doesStackIncludeOddCard(stack) {
  return stack.some((card) => card % 2 !== 0);
}

/**
 * Get the first odd card from the stack
 *
 * @param {number[]} stack
 *
 * @returns {number | undefined} the first odd value
 */
function getFirstOddCard(stack) {
  return stack.find((card) => card % 2 !== 0);
}

/**
 * Determine the position of the first card that is even
 *
 * @param {number[]} stack
 *
 * @returns {number} position of the first card that is even
 */
function getFirstEvenCardPosition(stack) {
  return stack.findIndex((card) => card % 2 === 0);
}

export {
  getCardPosition,
  doesStackIncludeCard,
  isEachCardEven,
  doesStackIncludeOddCard,
  getFirstOddCard,
  getFirstEvenCardPosition,
}