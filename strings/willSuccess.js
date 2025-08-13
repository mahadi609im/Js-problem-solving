function willSuccess(result) {
  if (!Array.isArray(result)) {
    return 'invalid';
  }
  for (let i of result) {
    if (typeof i !== 'number') {
      return 'invalid';
    }
  }

  let trueValue = 0;
  let falseValue = 0;
  let final = true;
  for (let i of result) {
    if (i >= 50) {
      trueValue += 1;
    } else {
      falseValue += 1;
    }
  }

  // console.log(trueValue, falseValue);

  if (trueValue > falseValue) {
    final = true;
  } else {
    final = false;
  }
  return final;
}

let resultList = '100';
let output = willSuccess(resultList);
console.log(output);
