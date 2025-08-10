function count_zero(binary) {
  let count0 = 0;
  for (let i of binary) {
    if (i == '0') {
      count0 += 1;
    }
  }
  return count0;
}

let output = count_zero('010101110101110000');
console.log(output);
