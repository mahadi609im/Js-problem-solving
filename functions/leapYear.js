function leapYear(year) {
  if (year % 400 == 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(year, 'is a leap year');
  } else {
    console.log(year, 'not a leap year');
  }
}

leapYear(400);
leapYear(2000);
leapYear(1900);
leapYear(2024);
leapYear(2023);
