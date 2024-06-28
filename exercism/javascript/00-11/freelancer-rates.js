export const dayRate = (e) => e * 8;
export const daysInBudget = (
  budget,
  ratePerHour
) =>
  Math.floor(
    budget / dayRate(ratePerHour)
  );
export const priceWithMonthlyDiscount =
  (ratePerHour, numDays, discount) => {
    const monthDays = 22;
    const monthlyRate =
      monthDays * dayRate(ratePerHour);
    const extraDaysRate =
      dayRate(ratePerHour) *
      (numDays % monthDays);
    const discountedRate =
      monthlyRate * (1 - discount);
    return Math.ceil(
      Math.floor(numDays / monthDays) *
        discountedRate +
        extraDaysRate
    );
  };
