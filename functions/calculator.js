function sum(num1, num2) {
  let calcResult = num1 + num2;
  return calcResult;
}
function substract(num1, num2) {
  let calcResult = num1 - num2;
  return calcResult;
}
function multiply(num1, num2) {
  let calcResult = num1 * num2;
  return calcResult;
}
function devide(num1, num2) {
  let calcResult = num1 / num2;
  return calcResult;
}

function calculator(a, b, operation) {
  if (operation === 'sum') {
    let result = sum(a, b);
    return result;
  } else if (operation === 'substract') {
    let result = substract(a, b);
    return result;
  } else if (operation === 'multiply') {
    let result = multiply(a, b);
    return result;
  } else if (operation === 'devide') {
    let result = devide(a, b);
    return result;
  } else {
    let result = 'please input sum, substract, multiply, devide';
    return result;
  }
}

let output = calculator(14, 7, 'devide');
console.log(output);
