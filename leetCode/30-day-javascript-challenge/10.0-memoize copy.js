// @ts-check

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  // ? declarative programming way
  //! imperative programming

  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      //if (object.hasOwnProperty(key)) both are old approaches
      return cache[key];
    }
    cache[key] = fn(...args);
    return cache[key];
  };
}
// this code is an example of Decorator design pattern

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */