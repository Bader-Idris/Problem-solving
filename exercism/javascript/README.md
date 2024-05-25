# guidance to new ideas

They use nodejs to test our code so we need to use export to each function they ask to pass their tasks

> To check exercises [**go to**](https://exercism.org/tracks/javascript/exercises)

JS currently has 147 exercises, so I separate them in dozens

Prior solved tasks to 2024 are 8

## Hello world

the easiest task ever! check its file [**here**](./00-11/helloWorld.js)

## Lucian's Luscious Lasagna

That was difficult, especially the instructions for a  L2 speakers as me. I see it too easy now, but I remember how I suffered with solving it 😭, That was a year ago in 2023

check its file [**here**](./00-11/Lucian's_Luscious_Lasagna.js)

This exercise unlocked three more of them:

* Annalyn's Infiltration
* Freelancer Rates
* Poetry Club Door Policy

and 4 concepts:

* Booleans
* Numbers
* Arithmetic Operators
* Strings

## annalyn's-infiltration

> Notice: This is sincerely bad, using non-helpful key names

The reason I was deceived to using non-useful naming in js is when I initially saw compiled code in real world Wep Apps, check how bad is the code [**here**](./00-11/annalyn's-infiltration.js)

It unlocked two more concepts:

* Comparison
* Conditions

## freelancer-rates

This has a little math and working in Inc. concepts which caused me to stuck in solving it!

check its file [**here**](./00-11/freelancer-rates.js)

It unlocked One more concept:

* Arrays

## Poetry Club Door Policy

This exercise had common array and string methods, Check its file [at](./00-11/PoetryClubDoorPlicy.js)

## Elyses Enchantments

This exercise had advanced array manipulation, Check its file [at](./00-11/ElysesEnchantments.js)

## Vehicle Purchase

This exercise had comparisons, Check its file [at](./00-11/VehiclePurchase.js)

## Bird Watcher

This exercise had looping, Check its file [at](./00-11/BirdWatcher.js)

All these were in 2023

---

## raindrops

I just converted the shell solution to this js, check its file [**here**](./00-11/raindrops.js)

Using for loop with string and array pushing based on sorted conditions

## mixed juices

I tried using a `for...of` loop, but then I realized that using `while` is better because mentors explained it in this lesson. So, I decided to follow their advice to improve my code. It was sincerely difficult. The funny thing is that they classified it as an easy level. You can check its file [**here**](./00-11/mixed-juices.js).

## high-score-board

> objects are called dictionaries and maps in other languages

maps in other languages are often need to be in same data type as we do in ts arrays: number[] or string[]

> In js it's only type of key is restricted to strings in objects

because in js is versatile in object types, so they're key entities for OOP.

remember that to delete an object we use the `delete` keywords, and to check a key it's best to use `hasOwnProperty` method. as

```js
const obj = { greeting: 'hello world' };
obj.hasOwnProperty('greeting');// true
```

`for...in` loops are tend to work with objects!

this explains many good things in object, that I forgot:

```js
const obj = { howdy: 123, sthYo: 321 };
const obj2 = { cloudy: 123, blab: 321 };
const scoreKeys = Object.keys(obj)
const scoreValues = Object.values(obj)
Object.assign(obj, {[obj2[0]]: obj2[0],})

// another two good ways to assign keys to objects:
let obj = { key1: 'value1', key2: 'value2' };
obj = { ...obj, key3: 'value3' };
// and
let obj = { key1: 'value1', key2: 'value2' };
obj['key3'] = 'value3';
```

The exercise is rich in data, refer to it when needing to manipulate objects! it even includes JSdoc they created

> check its file [**here**](./00-11/high-score-board.js)

The conversion from `object.function(param)` was challenging, and I sought assistance from ChatGPT to help me with it. Surprisingly, it turned out to be quite easy after all 😁🤪🤯. It's amazing because it enhances **dynamic programming**!

```js
function normalizeScore(params) {
  const { score, normalizeFunction } = params;
  return normalizeFunction(score);
}
const params = {
  score: 2100,
  normalizeFunction: function (score) {
    return score / 2 + 100;
  },
};
console.log(normalizeScore(params))//1150
```

Another man was even better!

```js
function normalizeScore(params) {
  return params.normalizeFunction(params.score);
}
```

## 12th Amusement Park

Main idea of this exercise is `null && undefined` values
check its file [**here**](./00-11/amusement-park.js), It was confusing, and I got help from other solutions to solve two struggling Fns, `simpleTicketStatus` and `revokeTicket` simpler than expected!

```js
let miEsposa = null;// null empty value
let miEsposa1;// undefined; no value at all
// it's like trying to empathizing with a woman
```

> Instructor:

* If a variable is declared without a value (initialization), it is `undefined`.
* If you try to access a value for a non-existing key in an object, you get `undefined`.
* If a function does not return a value, the result is `undefined`.
* If an argument is not passed to a function, it is `undefined`, unless that argument has a default value.

🔴IMPORTANT🔴

*If you try to retrieve a nested value in an object but the parent key does not exist, JavaScript will throw an error.* To easily avoid this, **optional chaining** was added to the language specification in 2020. With the optional chaining operator `?.` useful with `null` and `undefined` as well.

**Nullish Coalescing**, ecma2020 operator `??` is useful with adding default values when encountering `null` or `undefined` values

```js
let amount = null;
amount = amount ?? 1;
// => 1

amount = 0;
amount = amount ?? 1;
// => 0
```

For more documentary check [mdn for it](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment).

---

> **Second dozen!**

## 13th Markdown

level=medium
check its file [**here**](./12-23/markdown.js)

## 14th rectangles

level=medium
check its file [**here**](./12-23/rectangles.js)
