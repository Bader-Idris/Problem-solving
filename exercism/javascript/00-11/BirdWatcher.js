export const totalBirdCount = (birdsPerDay)=> {
  let results = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    results += birdsPerDay[i];
  }
  return results;
}
export const birdsInWeek = (birdsPerDay, week) => {
  let weeklyBirds = 0;
  for (let i = 7 * (week - 1); i < 7 * week; i++){
    weeklyBirds += birdsPerDay[i];
  }
  return weeklyBirds;
}
export const fixBirdCountLog = (birdsPerDay) => {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
        birdsPerDay[i] += 1;
    }
  }
  return birdsPerDay;
}