# Typescript Tutorial

great pragmatical exercises in exercism to implement what we learned in typescript before!

after solving the opening the gate printing hello world in typescript, we started to solve efficient challenges in ts, check them out!

> by the way, you need to learn how to transpile ts with its config file to make ts useful
>; **although you can customize it**

## Two fer

This is the [first lesson](./01-12/two-fer.ts) after hello world!

It's extremely easy in ts, because of its typing restrictions, and it's the same as what I've done in bash, so no need to overthinking

## Resistor color

In this lesson, I used many good Array methods, which are extremely useful in full stack applications, and I made it as json data we create in the backend, *very useful*

Check its file [here](./01-12/resistor-color.ts)
After checking the values, it appeared very easy, and I could make it as simple array, but this more professional with uuids and other random id sorting!

AI said: I could be more professional in time complexity, using `Maps`, or `binary searching` algorithm or even an advanced one is `Trie data structure`, yes its time complexity is O(n), but we could get better results, the third one gives O(m) 

This is the Map approach by Gemini:

```ts
const colorsMap: Map<string, number> = new Map();
for (const color of colorsArr) {
  colorsMap.set(color.name, color.value);
}
export const colorCode = (getValueByName: string): number => {
  return colorsMap.get(getValueByName) || -1; // Return -1 if color not found
};
```

And this is the binary searching approach:

```ts
export const colorCode = (getValueByName: string): number => {
  let low = 0;
  let high = colorsArr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const color = colorsArr[mid];
    if (color.name === getValueByName) {
      return color.value;
    } else if (color.name < getValueByName) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1; // Return -1 if color not found
};
```

## resistor-color-duo

Check its file [here](./01-12/resistor-color-duo.ts)
