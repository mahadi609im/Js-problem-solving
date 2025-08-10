//////////// Problem 2: Kilometer → Miles ////////////
//Formula: miles=kilometer×0.621371

function kToM(kilo) {
  let miles = kilo * 0.621371;
  return miles;
}

let outputM = kToM(5);
console.log(outputM);
// Exp: 5 km → 3.106855 miles
