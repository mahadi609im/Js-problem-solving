let words = ['I', 'love', 'JavaScript'];

let concatStr = words.reduce((acc, curr) => acc + curr + ' ', '');
console.log(concatStr);
