//////////// Problem 3: Hours → Minutes → Seconds ////////////
//Formula: minutes- hr * 60, second- min * 60

function hms(hr) {
  let min = hr * 60;
  let sec = min * 60;
  let result = `hour: ${hr} - min: ${min} - sec: ${sec}`;
  return result;
}

let outputH = hms(2);
console.log(outputH);

// Exp: 2 hours → 120 minutes → 7200 seconds
