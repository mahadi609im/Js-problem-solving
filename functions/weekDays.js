//////////// Problem 4: Weeks & Days ////////////
//Formula: minutes- hr * 60, second- min * 60

function weekOrDays(day) {
  let week = 7;
  let weekCount = parseInt(day / week);
  let dayMultiply = week * weekCount;
  let days = day - dayMultiply;
  let result = `${weekCount} weeks & ${days} days`;
  return result;
}

let outputD = weekOrDays(31);
console.log(outputD);
// Exp: 10 days → 1 week 3 days
