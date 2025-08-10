function avarageValue(arr) {
  let count = arr.length;
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }

  let average = sum / count;
  return average;
}

let x = avarageValue([2, 4, 6, 8, 10]);
console.log(x);
