//////////// Problem 5: BMI Calculator ////////////
//Formula: bmi = weight(kg) / height(m)^2

function bmiCalc(weight, height) {
  let bmi = weight / (height * height);
  return bmi;
}

let outputBmi = bmiCalc(60, 1.65);
console.log(outputBmi);
// Exp:  60 kg, 1.65 m → 22.04
