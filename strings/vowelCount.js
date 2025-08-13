function countVolume(str) {
  if (typeof str !== 'string') {
    return 'please valid a input like string';
  } else {
    let vowel = 'aeiou';
    let count = 0;
    for (let i of str.toLowerCase()) {
      if (vowel.includes(i)) {
        count += 1;
      }
    }
    return count;
  }
}

let text = 'MahadIi';
let output = countVolume(text);
console.log(output);
