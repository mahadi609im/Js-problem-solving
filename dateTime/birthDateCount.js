let guessDate = new Date('2003-08-08');
let now = new Date();

let diffMs = Math.abs(guessDate - now);
let diffDays = diffMs / (1000 * 60 * 60 * 24);

let days = Math.floor(diffDays);

let month = Math.floor(days / 30);

let daysLeft = days % 30

let week = Math.floor(daysLeft / 7);
let day = daysLeft % 7

console.log(
`You have been alive for: ${month} months, ${week} weeks, and ${day} days (Total ${days} days)`

);
