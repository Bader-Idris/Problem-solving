// @ts-check

/*
? declarative programming way
const fn1 = x => x + 1;
const fn2 = x => 2 * x;

console.log(fn1(fn2(4)))
*/

/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = function (functions) {
  // second solution
  const fn = (accumulator, fns) => fns(accumulator);
  return function(x) {
    return functions.reduceRight(fn, x)
  }

  // initial solution
  return function (x) {
    //! imperative programming
    for (const fn of functions.reverse()) {
      x = fn(x)
    }
    return x;
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4)) // 9