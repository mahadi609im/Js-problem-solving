function uniqueValue(arr) {
  let uniqueItems = [];

  for (let i of arr) {
    if (!uniqueItems.includes(i)) {
      uniqueItems.push(i);
    }
  }

  return uniqueItems;
}

let arrItems = ['one', 'two', 'two', 'three', 'four', 'four', 'five'];
let outputUnq = uniqueValue(arrItems);
console.log(outputUnq);
