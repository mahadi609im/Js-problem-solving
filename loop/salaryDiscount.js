/******* Problem 06 : (Current Salary ) ******/
var experience = 30;
var startingSalary = 45000;

//write your code here
for (var i = 1; i <= experience; i++) {
  var salary5 = (startingSalary * 5) / 100;

  startingSalary += salary5;

  var fixedSalary = startingSalary.toFixed(2);
}

console.log(fixedSalary);
