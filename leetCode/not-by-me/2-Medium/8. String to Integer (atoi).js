/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = (s) => {
  s = s.trimStart();
  const max32BitInt = 2 ** 31 - 1;
  const min32BitInt = 2 ** 31 * -1;
  const zeroCharCode = "0".charCodeAt(0);
  const nineCharCode = "9".charCodeAt(0);
  const firstChar = s[0];
  let result = '0';
  let sign = 1;
  let idx = 0;

  if (firstChar === '-' || firstChar === '+') {
    if (firstChar === '-') sign = -1;
    idx = 1;
  }
  for (let i = idx; i < s.length; i++) {
    const char = s[i];
    const code = char.charCodeAt(0);

    if(code<zeroCharCode || code> nineCharCode)break;
    result = result === '0' ? char : result + char;
  }
  result = +result * sign;
  if (result > max32BitInt) result = max32BitInt;
  if (result < min32BitInt) result = min32BitInt;
  return result;
};
// it helps to understand how parseInt have been created🔴
// second faster wy using parseInt in a clever way is
var myAtoi = (s)=> {
  const max32BitInt = 2 ** 31 - 1;
  const min32BitInt = 2 ** 31 * -1;

  let num = parseInt(s);
  if (Number.isNaN(num)) num = 0;
  if (num > max32BitInt) num = max32BitInt;
  if (num < min32BitInt) num = min32BitInt;
  return num;
}
//  check it out!