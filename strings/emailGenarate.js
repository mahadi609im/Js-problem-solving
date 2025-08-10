/******* Problem 05 - ( PH Email Generator ) ******/
var student = { name: 'jhankar', roll: 1014, department: 'cse' };

//write your code here
var studentMail =
  student.name + student.roll + '.' + student.department + '@ph.ac.bd';

var mail = studentMail.toLowerCase();

console.log(mail);
