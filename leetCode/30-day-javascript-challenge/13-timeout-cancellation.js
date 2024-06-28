// @ts-check

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
const cancellable = function(fn, args, t) {
  // let funYo = (resolve, reject) => {
  //   setTimeout(resolve, t);
  // };
  // // return new Promise(funYo)
  // return fn(...args) {
  //   setTimeout(() => {
      
  //   }, t);
  // };
  // return await new Promise(func => setTimeout(func, t));
};

const result = [];
const f = (x) => x * 5;
const args = [2], t = 20, cancelTimeMs = 50;
const start = performance.now();
const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({"time": diff, "returned": f(...argsArr)});
}
const cancel = cancellable(log, args, t);
const maxT = Math.max(t, cancelTimeMs);
setTimeout(cancel, cancelTimeMs);
setTimeout(() => {
    console.log(result); // [{"time":20,"returned":10}]
}, maxT + 15)

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */

