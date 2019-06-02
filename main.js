"use strict";

function daysInYear(int) {
  if (Number.isInteger(int) && int % 1 === 0) {
    function daysInYear(int) {
      return isLeapYear(int) ? 366 : 365;
    }
    function isLeapYear(int) {
      return int % 400 === 0 || (int % 100 !== 0 && int % 4 === 0);
    }
    return daysInYear(int);
  }
  throw new Error("exception");
}

console.log(daysInYear(2019));
// 365
console.log(daysInYear("2019"));
// // exception
console.log(daysInYear(2020));
// // 366
console.log(daysInYear(2020.2));
// // exception
console.log(daysInYear(2100));
// // 365
console.log(daysInYear({ year: 2100 }));
// // exception
