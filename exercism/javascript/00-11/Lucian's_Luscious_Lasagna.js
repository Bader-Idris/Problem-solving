const EXPECTED_MINUTES_IN_OVEN = 40;
const remainingMinutesInOven = (e) =>
  EXPECTED_MINUTES_IN_OVEN - e;
const preparationTimeInMinutes = (e) =>
  e + e;
const totalTimeInMinutes = (a, b) =>
  a + a + b;
export {
  EXPECTED_MINUTES_IN_OVEN,
  remainingMinutesInOven,
  preparationTimeInMinutes,
  totalTimeInMinutes,
};
