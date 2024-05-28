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
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
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
    const [newX, newY] = f(x, y);
    return g(newX, newY);
  };
}

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {function} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */
function memoizeTransform(f) {
  return () => {}
}

export {
  translate2d,
  scale2d,
  composeTransform,
  memoizeTransform
}