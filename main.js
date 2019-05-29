'use strict';

function daysInYear(int) {
  const year = int;

  if (year % 1 === 0 && typeof year === 'number') {
    function daysInYear(year) 
    {
      
      return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
    }
    return daysInYear(year);
  }
  throw 'exception';
}

console.log(daysInYear(2019));
 // 365
console.log(daysInYear('2019'));
 // exception
console.log(daysInYear(2020));
 // 366
console.log(daysInYear(2020.2));
 // exception
console.log(daysInYear(2100));
 // 365
console.log(daysInYear({year: 2100}));
 // exception