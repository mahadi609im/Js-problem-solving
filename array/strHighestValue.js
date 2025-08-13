const list = ['rahim', 'robin', 'rafi', 'roooooooon', 'rashed'];

let highestValue = list[0];

for (let i of list) {
  if (i.length > highestValue.length) {
    highestValue = i;
  }
}

console.log(highestValue);
