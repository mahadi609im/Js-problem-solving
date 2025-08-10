// 12 inch 1 feet

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

let output = inchToFeet(75);
console.log(output);

// 12 inch 1 feet | output: __feet __inch
function inchToFeet2(inch) {
  const feet1 = 12
  let feet = inch / feet1
  let feetInt = Math.floor(feet)

  let feetMultiply = feet1 * feetInt
  let inchInt = inch - feetMultiply

  let result = `${feetInt} feet ${inchInt} inch.`;
  return result;
}

let output2 = inchToFeet2(32);
console.log(output2);
