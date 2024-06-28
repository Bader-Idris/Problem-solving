function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default: return 2.5;
  }
}
function limesToCut(wedgesNeeded, limes) {
  if (limes.length == 0 || wedgesNeeded == 0) return 0;
  const limeSizes = [
    { size: "small", value: 6 },
    { size: "medium", value: 8 },
    { size: "large", value: 10 },
  ];
  const limesNumericArray = [];
  let limesNO = 0;
  let w = 0, count = 0;
  while (w < limes.length) {
    const foundSize = limeSizes.find((item) => item.size === limes[w]);
    if (foundSize) {
      limesNumericArray.push(foundSize.value);
      limesNO += foundSize.value;
      count++;
    }
    if (limesNO > wedgesNeeded) {
      break; // Exit the loop if the total wedges exceed the required number
    }
    w++;
  }
  return count;
}
function remainingOrders(timeLeft, orders = []) {
  let o = orders.length - 1,
    count = 0;
  const resultedArr = [];
  while (o >= 0) {
    count += timeToMixJuice(orders[o]);
    if (count >= Math.ceil(timeLeft)) break;
    resultedArr.unshift(orders[o]); // Push the orders in reverse order
    o--;
  }
  if (Math.ceil(count) == timeLeft)
    resultedArr.length = 0;
  return resultedArr;
}
// export {
//   timeToMixJuice,
//   limesToCut,
//   remainingOrders,
// };