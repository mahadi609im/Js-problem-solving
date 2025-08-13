function calculateSleepTime(timeArr) {
  if (!Array.isArray(timeArr)) {
    return 'invalid';
  }

  for (let i of timeArr) {
    if (typeof i !== 'number') {
      return 'invalid';
    }
  }

  let sumOfSec = 0;
  for (let i of timeArr) {
    sumOfSec += i;
  }

  let oneMin = 60;
  let oneHr = oneMin * 60; // 1 ghonta paisi - 3600
  let hour = Math.floor(sumOfSec / oneHr); // total second a koto ghonta  - 6
  let bakiSec = sumOfSec % oneHr; // baki bache second gula // 2755
  let min = Math.floor(bakiSec / 60); // baki second theke minute - 45
  let second = bakiSec % 60; // baki second - 55
  let miliSecond = second * 1000;

  let outputReturn = {};
  outputReturn.hours = hour;
  outputReturn.minutes = min;
  outputReturn.seconds = second;
  outputReturn.miliSeconds = miliSecond;
  return outputReturn;
}

let seconds = [3600];
let output = calculateSleepTime(seconds);
console.log(output);
