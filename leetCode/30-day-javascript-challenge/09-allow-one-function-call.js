// @ts-check

// ? declarative programming way

//! imperative programming

/**
 * @param {Function} fn
 * @return {Function}
 */
const once = function (fn) {
  let isCalled = false;
  return function (...args) {
    if (isCalled) return undefined;
    isCalled = true;
    // return fn(...args)// workable but underneath one is more professional
    return fn.apply(this, args)
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
