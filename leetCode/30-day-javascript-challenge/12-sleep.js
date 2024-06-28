// @ts-check

// ? declarative programming way

//! imperative programming

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, millis);
  });
  // return await new Promise(func => setTimeout(func, millis));
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

// neetCoder says: promises are the backbone of modern async js concept

let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100

