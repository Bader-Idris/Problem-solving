// @ts-check

/**
 * A function that returns a closure function that returns a greeting message.
 * @returns {function(): string} A closure function that returns "Hello, Closures!"
 */
const createHelloWorld = () => () =>
  "Hello World";
