/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
function getFirstCard(deck) {
  const [firstCard, ...rest] = deck;
  return firstCard;
}

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */
function getSecondCard(deck) {
  const [, secondCard, ...rest] = deck;
  return secondCard;
}

/**
 * Switch the position of the first two cards in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck with reordered cards
 */
function swapTopTwoCards(deck) {
  const [firstCard, secondCard, ...rest] = deck;
  return [secondCard, firstCard, ...rest];
}

/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 *
 * @returns {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */
function discardTopCard(deck) {
  const [topCard, ...rest] = deck;
  return [topCard, rest];
}

/** @type {Card[]} **/
const FACE_CARDS = ["jack", "queen", "king"];

/**
 * Insert face cards into the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */
function insertFaceCards(deck) {
  const [firstCard, ...rest] = deck;
  return [firstCard, ...FACE_CARDS, ...rest];
}

export {
  getFirstCard,
  getSecondCard,
  swapTopTwoCards,
  discardTopCard,
  insertFaceCards
}