// @ts-check

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
function translate2d(dx, dy) {
  return (x1, y1) => [dx + x1, dy + y1];
}

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {function} a composed function which takes an dx, dy parameter, returns the
 *  scaled coordinate pair in the form [dx, dy]
 */
function scale2d(sx, sy) {
  return (dx, dy) => [sx * dx, sy * dy]
}

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation.
 *
 * @param {function} f - The first function to apply.
 * @param {function} g - The second function to apply.
 *
 * @returns {function} A function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y].
 */
function composeTransform(f, g) {
  return function (x, y) {
    // const [newX, newY] = f(x, y);
    // return g(newX, newY);
    return g(...f(x, y));
  };
}
const moveCoordinatesRight2Px = translate2d(2, 0);
const doubleCoordinates = scale2d(2, 2);
const composedTransformations = composeTransform(
  moveCoordinatesRight2Px,
  doubleCoordinates,
);
const result = composedTransformations(0, 1);
console.log(result);
// result => [4, 2]

/**
 * Return a function that memoizes the last result. If the arguments are the same as the last call
 * and the cached value is the latest, the memoized result is returned.
 *
 * @param {function} f - The transformation function to memoize, assumed to take multiple arguments.
 * @returns {function} A function which takes the same arguments as `f` and will either return the saved result
 * if the arguments are the same and the cache is the latest on subsequent calls, or compute a new result if they are different.
 * The cache is managed to remove the oldest entries if it exceeds a certain limit.
 */
function memoizeTransform(f) {
  const cache = {};
  const order = []; // To keep track of the order of keys
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      // If the key is found and it is the latest one in the cache order
      if (order[order.length - 1] === key) {
        return cache[key];
      }
    }
    // Update the cache and the order
    cache[key] = f(...args);
    order.push(key);
    // If the order length exceeds a certain limit, clean up the oldest entries
    if (order.length > 100) {
      // Example limit, adjust as needed
      const oldestKey = order.shift();
      delete cache[oldestKey];
    }
    return cache[key];
  };
}

export {
  translate2d,
  scale2d,
  composeTransform,
  memoizeTransform
}
