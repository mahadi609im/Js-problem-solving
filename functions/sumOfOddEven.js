function sumOfOddNum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 1) {
      sum += i;
      console.log(i, sum);
    }
  }

  return sum;
}

let oddOutput = sumOfOddNum(100);
console.log('total : ', oddOutput);

console.log('-------------------------------');

function sumOfEvenNum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      sum += i;
      console.log(i, sum);
    }
  }

  return sum;
}

let evenOutput = sumOfEvenNum(50);
console.log('total : ', evenOutput);
