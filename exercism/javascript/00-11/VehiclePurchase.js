export const needsLicense = (kind) =>
  kind === "car" || kind === "truck";
export const chooseVehicle = (
  option1,
  option2
) =>
  option1 < option2
    ? `${option1} is clearly the better choice.`
    : `${option2} is clearly the better choice.`;
export const calculateResellPrice = (
  originalPrice,
  age
) =>
  age < 3
    ? originalPrice * 0.8
    : age <= 10
    ? originalPrice * 0.7
    : originalPrice * 0.5;
