//////////// Problem 1: Fahrenheit → Celsius ///////////////
//Formula: (°F−32)×9/5

function fToC(f) {
  let calcF = ((f - 32) * 5) / 9;
  return calcF;
}

let outputF = fToC(68);
console.log(outputF);
// Exp: 68°F → 20°C



//////////// Problem 2: Kilometer → Miles ////////////
//Formula: miles=kilometer×0.621371

function kToM(kilo) {
   let miles = kilo * 0.621371;
   return miles
}

let outputM = kToM(5)
console.log(outputM)
// Exp: 5 km → 3.106855 miles



//////////// Problem 3: Hours → Minutes → Seconds ////////////
//Formula: minutes- hr * 60, second- min * 60

function hms(hr) {
   let min = hr * 60
   let sec = min * 60
   let result = `hour: ${hr} - min: ${min} - sec: ${sec}`
   return result
}

let outputH = hms(2)
console.log(outputH)

// Exp: 2 hours → 120 minutes → 7200 seconds


//////////// Problem 4: Weeks & Days ////////////
//Formula: minutes- hr * 60, second- min * 60

function weekOrDays(day) {
   let week = 7
   let weekCount = parseInt(day / week);
   let dayMultiply = week * weekCount
   let days = day - dayMultiply
   let result = `${weekCount} weeks & ${days} days`;
   return result
}

let outputD = weekOrDays(31)
console.log(outputD)
// Exp: 10 days → 1 week 3 days


//////////// Problem 5: BMI Calculator ////////////
//Formula: bmi = weight(kg) / height(m)^2

function bmiCalc(weight, height) {
   let bmi = weight / (height * height)
   return bmi
}

let outputBmi = bmiCalc(60, 1.65)
console.log(outputBmi)
// Exp:  60 kg, 1.65 m → 22.04