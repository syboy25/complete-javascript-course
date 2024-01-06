"use strict";
//Array of Temparutes
// - Each degree is for one day
// -
const temp1 = [17, 21, 23];

const printForecast = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C in ${i + 1} days...`;
  }

  console.log("..." + str);
};

printForecast(temp1);

// console.log(printForecast(temperatures));

// const temperatures2 = [12, 5, -5, 0, 4];

const printForecast2 = () => {
  for (let i = 0; i < temp1.length; i++) {
    console.log(`${temp1[i]} celius in ${i + 1} days.`);
  }
};

printForecast2(temp1);
