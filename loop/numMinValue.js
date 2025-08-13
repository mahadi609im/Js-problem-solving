let list = [4, 6, 51, 13, 61, 11, 21, 34, 2, 22];

let minValue = list[0];
let maxValue = list[1];

for (let i of list) {
  if (minValue > i) {
    minValue = i;
  } else if (maxValue < i) {
    maxValue = i;
  }
}

console.log(minValue);
console.log(maxValue);