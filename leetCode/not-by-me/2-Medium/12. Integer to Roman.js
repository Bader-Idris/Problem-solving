/**
 * @param {number} num
 * @return {string}
 */
const map = new Map([
    [1, 'I']
    [5, 'V']
    [10, 'X']
    [50, 'L']
    [100, 'C']
    [500, 'D']
    [1000, 'M']
]);
var intToRoman = function(num) {

  let base = 1;
  const result = [];
  while (num > 0) {
    const last = num % 10;
    if (last <4) {
      for (let k = last; k > 0; k--) {
        result.unshift(map.get(base))
      }
    } else if(last === 4)result.unshift(...[map.get(base), map.get(base*5)])
    else if(last === 5)result.unshift(map.get(base*5))
    else if(last <9){
      for (let k = last; k > 5; k--) {
        result.unshift(map.get(base))
      }
      result.unshift(map.get(base*5))
    }else{
      result.unshift(...[map.get(base),map.get(base*10)])
    }
    base *= 10;
    num =(num - last)/10
  }
  return result.join('');
};