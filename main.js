'use strict';

function daysInYear(year) {
  if (Number.isInteger(year) && Number.isFinite(year)) {
    return isLeapYear(year);
  }
  throw new Error('exception');
}

function isLeapYear(currYear) {
  if (currYear % 400 === 0 || (currYear % 100 !== 0 && currYear % 4 === 0)) {
    return 366;
  }
  return 365;
}

console.log(daysInYear(2019));
// 365
console.log(daysInYear('2019'));
// // exception
console.log(daysInYear(2020));
// // 366
console.log(daysInYear(2020.2));
// // exception
console.log(daysInYear(2100));
// // 365
console.log(daysInYear({ year: 2100 }));
// // exception
