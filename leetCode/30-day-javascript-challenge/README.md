# leetCode explanation

because the platform requires enrolling into their paid accounts I found a tutorial on Youtube provided by neetCode channel, this is its 30 days of leetCode challenge [playlist](https://www.youtube.com/playlist?list=PLQpVsaqBj4RIpDQIVowFni58LsK4cM9Qz)

## functioning coding, **JavaScript Closures**

An important concept in JavaScript coding is `Closures`, and we investigate it through the first six lessons. It is based on `hoisting scope`, which is the ability to access a variable outside of its function, as shown below:

```javascript
function outerFunction() {
  let outerVariable = 'I am outside!';
  
  function innerFunction() {
    console.log(outerVariable); // Accessing the outer variable
  }
  
  return innerFunction;
}

const myFunction = outerFunction();
myFunction(); // Logs: 'I am outside!'
```

---

NaN usually happens when `0/0`, it's falsy as well as `-0` beside known falsy values, and to revise it, `undefined` is for defined variables with nothing, and `null` is a falsy value, not nothing.

instead of tending to shorten the code carelessly, as doing this

```js
if (userInput) {
  uploadToDB(userInput)
}
```

we should rather use this explicit typing

```js
if (userInput !== null && userInput !== "") {
  uploadToDB(userInput)
}
// for safety from risks!
```

> Javascript is a weakly typed language!  
> Python is a strongly typed language! (not too string, but stronger than js)

---

Array reducing is all about aggregation, it's basically providing a computed one value from an iteration as providing the average of a list of digits

```js
const nums = [1,2,6,4,5];
function fn(init, n) => init + n;
nums.reduce(fn, 0)
```

---

For more details about the advanced functioning until memoize day, check [this](../../exercism/javascript/12-23/coordinate-transformation.js) exercism's difficult solution

8th solution is laughable, `(...args) => args.length;`

9th is great to understand for frameworks, vue uses it for instance, `v-once`, well to simply apply this, we can initiate a falsy statement then in the Fn explicitly say if (ourVar) return undefined;

```js
const once = function (fn) {
  let called = false;
  return function (...args) {
    if (called) return undefined;
    called = true;
    return fn(...args)
  };
};
// a better approach is to use numeric caching
```

To add the key `this` into a separate method, we can use `apply(outerFn)` as this:

```js
const person {
  name: "Hanady"
}
function printName() {
  console.log(this.name)
}//undefined yet
printName.apply(person)// apply(, [argArr])
```

we add array of arguments to be applied to our formerly to initiated function, this could be risky when people know the naming of our methods!

---

10th lesson memoize is important, and its tutorial is:

This question asks you to write a function that modifies a provided function such that the provided function will only be called if the arguments have not been passed before. If they have been passed before, it should return the previous output without calling the provided function. This type of optimization is called **memoization** and is an extremely important example of a **higher-order function**.

To give a concrete example of memoization, here is some code
without memoization.

```js
let callCount = 0;
const add = (a,b) => {
  callCount += 1;
  return a + b;
}
add(2,2)//4
console.log(callCount)//1
add(2,2)//4
console.log(callCount)//2
add(2,2)//4
console.log(callCount)//3
```

as expected `callCount` is incremented every time `add` is called.

However if we apply **memoization:**

```js
let callCount = 0;
const add = (a,b) => {
  callCount += 1;
  return a + b;
}
const memoizedAdd = memoize(add);
add(2,2)//4
console.log(callCount)//1
add(2,2)//4
console.log(callCount)//1
add(2,2)//4
console.log(callCount)//1
```

We can see that `callCount` is only incremented the first time.

> mentor -neetCoder- saids **memoization** is a fancy word for **caching**, which is a technique of **Dynamic programming**

It's important to know that memoization only works for **pure functions**. which always return same results.

an example of what's not pure function, `Date.now`.

---

**Memoization Use-cases in Web Development**

There are countless use-cases of memoization but we can discuss a few.

**Caching Website Files**

A large website often consists of many JavaScript files which are dynamically downloaded when a user visits different pages. A pattern is sometimes employed where the filename is based on a hash of the file's content. That way, when the web browser requests a filename that was already requested before, it can load the file locally from disk rather than have to download it again.

**React Components**

**React** is a highly popular library for building user interfaces, especially for single-page applications. One of its core principles is the idea of breaking down your application into separate **components**. Each of these components is responsible for rendering a distinct part of the app's HTML.

For example you might have a component like this:

```jsx
const TitleComponent = (props) => {
  return <h1>{props.title}</h1>;
}
```

The above function will get called every time the parent component renders, even if `title` was not changed. Performance can be improved by calling `React.memo` on it, avoiding unnecessary renders.

```jsx
const TitleComponent = React.memo((props) => {
  return <h1>{props.title}</h1>;
})
```

blab-blab

**Caching API calls**

To less expenses of using dbs, we use 🔴 memoization 🔴 *IMPORTANT*


and many advanced things that are solved in memoize II, `memory management` && `Handling Arbitrary Inputs`

So, we'll be hash mapping any added result with objects!
This appears that using JSON.stringify in Osama's 50 paid projects course, is tensely using this approach!

10.1 is not freely available, check it for its useful `nesting functions`.
