let person1 = { name: 'Mahadi', gender: 'fmale', age: 24 };
let person2 = { name: 'faru', gender: 'fmale', age: 35 };

function validProposel(person1, person2) {
  if (typeof person1 !== 'object' && typeof person2 !== 'object') {
    return 'invalid';
  }

  if (
    typeof person1.name !== 'string' &&
    typeof person1.gender !== 'string' &&
    typeof person1.age !== 'number'
  ) {
    return 'invalid';
  }

  if (
    typeof person2.name !== 'string' &&
    typeof person2.gender !== 'string' &&
    typeof person2.age !== 'number'
  ) {
    return 'invalid';
  }

  let ageDiff = Math.abs(person1.age - person2.age);
  if (person1.gender !== person2.gender && ageDiff < 7) {
    return true;
  } else {
    return false;
  }
}

let output = validProposel(person1, 'mizan');
console.log(output);
