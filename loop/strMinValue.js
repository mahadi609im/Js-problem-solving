let heights2 = ['rahim', 'robin', 'rifa', 'ron', 'rashed'];

let len = 0;
let mins = [];

for (let i of heights2) {
  len = i.length;
  mins.push(len);
}

let minValue = mins[0];

for (let j of mins) {
  if (minValue > j) {
    minValue = j;
  }
}
console.log(heights2[minValue]);
