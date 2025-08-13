function cashOut(money) {
  if (money < 0) {
    return 'invalid';
  } else if (typeof money !== 'number') {
    return 'invalid';
  } else {
    let cashOutCharge = 1.75;
    let output = (money * cashOutCharge) / 100;
    return output;
  }
}

let cashOutCharge = cashOut(2000);
console.log(cashOutCharge);
