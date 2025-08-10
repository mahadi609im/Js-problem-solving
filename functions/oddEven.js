function isOdd(number) {
  if (number % 2 !== 0) {
    return 'Odd Number';
  } else {
    return 'Even Number';
  }
}

for (let i = 1; i <= 100; i++) {
  console.log(i, isOdd(i));
}
