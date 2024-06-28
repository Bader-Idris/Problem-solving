// converted from what I solved in bash to this js:
export const convert = (arg1) => {
  if (!arg1 || arg1 === 0) {
    throw new Error("please provide a valid number");
  }
  const divisors = [3, 5, 7];
  const names = ["Pling", "Plang", "Plong"]

  let result = ""
  for (let i = 0; i < divisors.length; i++) {
    if (arg1 % divisors[i] === 0) {
      result += names[i];
    }
  }
  return result || `${arg1}`;
};

// Example usage
// const result = raindrops(15); // "PlingPlang"
// console.log(result);
