//////////// Problem 1: Fahrenheit → Celsius ///////////////
//Formula: (°F−32)×9/5

function fToC(f) {
  let calcF = ((f - 32) * 5) / 9;
  return calcF;
}

let outputF = fToC(68);
console.log(outputF);
// Exp: 68°F → 20°C
