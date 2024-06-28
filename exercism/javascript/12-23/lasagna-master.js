/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Calculates if the lasagna is done or not!
 * 
 * @param {number} timer - Remaining time in minutes.
 * @returns {string} Status of the lasagna based on the remaining time.
 */
function cookingStatus(timer) {
  if (timer === 0) return "Lasagna is done.";
  else if (timer > 0) return "Not done, please wait.";
  else return "You forgot to set the timer.";
}

/**
 * Estimates the preparation time to make a lasagna based on its ingredients.
 * 
 * @param {string[]} foodLayersArray - Array containing food layers.
 * @param {number} [timeInMinutes=2] - Average preparation time per layer in minutes.
 * @returns {number} Total preparation time in minutes.
 */
function preparationTime(foodLayersArray, timeInMinutes = 2) {
  return foodLayersArray.length * timeInMinutes;
}

/**
 * Computes needed quantities of noodles and sauce.
 * 
 * @param {string[]} ingredients - Array of ingredients.
 * @returns {{noodles: number, sauce: number}} Object with properties for noodles and sauce quantities.
 */
function quantities(ingredients) {
  let noodles = 0, sauce = 0;
  ingredients.forEach((el) => {
    if (el === "sauce") sauce += 0.2;
    if (el === "noodles") noodles += 50;
  });
  // can use filter as this instead:
  // noodles: ingredients.filter(i => i === 'noodles').length * 50
  return { noodles, sauce };

  /*
  function quantities(ingredients) {
    const { noodles, sauce } = ingredients.reduce((acc, el) => {
      if (el === "sauce") {
        acc.sauce += 0.2;
      } else if (el === "noodles") {
        acc.noodles += 50;
      }
      return acc;
    }, { noodles: 0, sauce: 0 });

    return { noodles, sauce };
  }
  */
}

/**
 * Adds the secret ingredient to the client's recipe.
 * 
 * @param {string[] | function(): string[]} sentIngredients - Sent ingredients, either as an array or a function returning an array.
 * @param {string[]} clientRecipe - Your recipe array.
 * @returns {void}
 */
function addSecretIngredient(sentIngredients, clientRecipe) {
  const ingredients = typeof sentIngredients === 'function' ? sentIngredients() : sentIngredients;
  const secretIngredient = ingredients[ingredients.length - 1];
  clientRecipe.push(secretIngredient);
}

/**
 * Scales the recipe to the desired number of portions.
 * 
 * @param {Object.<string, number>} recipe - A recipe object that holds the amounts needed for 2 portions.
 * @param {number} [portions=2] - The number of portions to scale the recipe to.
 * @returns {Object.<string, number>} A new object with the scaled amounts.
 */
function scaleRecipe(recipe, portions = 2) {
  let newObj = {}
  Object.entries(recipe).forEach(([key, value]) => {
    newObj[key] = value * (portions / 2);
  });
  return newObj;
}

export {
  cookingStatus,
  preparationTime,
  quantities,
  addSecretIngredient,
  scaleRecipe
};