let nums = [1, 2, 2, 3, 4, 4, 5];

let uniqueValue = nums.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);
console.log(uniqueValue);

// Output: [1, 2, 3, 4, 5]
