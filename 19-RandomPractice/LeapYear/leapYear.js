"use strict";

// const isLeapYear = (year) => {
//   if (year % 4 === 0) {
//     if (year % 100 !== 0) {
//       if (year % 400 === 0) {
//         console.log(`Year ${year} is not a leap year.`);
//       }
//     }
//   } else {
//     console.log(`Year ${year} is not a leap year.`);
//   }
// };

// isLeapYear(2001);

// const yearDividedBy4 = Math.floor(2 / 100);
// const remainder4 = 2001 % 4;
// const remainder100 = 2001 % 100;
// const remainder400 = 2001 % 400;
// console.log(remainder4, remainder100, remainder400);

("use strict");
function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year.";
      } else {
        return "Not leap year";
      }
    } else {
      return "Leap year.";
    }
  } else {
    return "Not leap year.";
  }
}

console.log(isLeap(2000));
