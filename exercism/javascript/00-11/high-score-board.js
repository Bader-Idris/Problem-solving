/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */
function createScoreBoard() {
  return {"The Best Ever": 1000000}
}

/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */
function addPlayer(
  scoreBoard,
  player,
  score
) {
  // let newObj = Object.assign(scoreBoard, {[player]: score});
  // return newObj//! underneath is less memory consuming!
  scoreBoard[player] = score;
  return scoreBoard;
}

/**
 * Removes a player from a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @returns {Record<string, number>} updated score board
 */
function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];
  return scoreBoard
}

/**
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */
function updateScore(
  scoreBoard,
  player,
  points
) {
  if (scoreBoard[player] !== undefined) {
    scoreBoard[player] += points;
  } else {
    console.log(
      `Player '${player}' not found in the scoreBoard.`
    );
  }
  return scoreBoard;
}

/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */
function applyMondayBonus(scoreBoard) {
  for (const score in scoreBoard) {
    scoreBoard[score] += 100;
  }
  return scoreBoard
}

/**
 * Normalizes a score with the provided normalization function.
 *
 * @param {Params} params the parameters for performing the normalization
 * @returns {number} normalized score
 */
function normalizeScore(params) {
  const { score, normalizeFunction } = params;
  return normalizeFunction(score);
}

// export {
//   createScoreBoard,
//   addPlayer,
//   removePlayer,
//   updateScore,
//   applyMondayBonus,
//   normalizeScore
// }