// Write a function to find the longest word in a given string.
// sample-input: I am learning Programming to become a programmer

let sampleInput = 'I am learning Programming to become a programmer';

let inputArr = sampleInput.split(' ');
let arr = [];
for (let i of inputArr) {
  arr.push(i.length);
}
let maxIdx = Math.max(...arr);
console.log(maxIdx);

let findOut = inputArr.filter(i => i.length === maxIdx);

let result = '';
result += findOut;
console.log(result);

// sample-output: Programming
