// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

//Amplitude is the difference between the minimum and maximum temperature that occured for that day.
//Find the max and min of the temparatures
//What is a sensor error ? And what to do?
const calcAmplitude = (temps) => {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== "number") continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }

  //   let min = temps[0];
  //   for (let j = 0; j < temps.length; j++) {
  //     if (temps[j] < min) min = temps[j];
  //   }

  //   let amp = max - min;

  console.log(max, min);

  return max - min;
};

const amplitude = calcAmplitude(temperatures);
console.log(amplitude);

// calcAmplitude(temperatures);

//How to ignore erros?
//Find max value
//Find min value
//subtract min from max (amplitude) and return it

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays
const calcAmplitudeNew = (t1, t2) => {
  const array1 = ["a"];

  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== "number") continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }

  //   let min = temps[0];
  //   for (let j = 0; j < temps.length; j++) {
  //     if (temps[j] < min) min = temps[j];
  //   }

  //   let amp = max - min;

  console.log(max, min);

  return max - min;
};

const amplitudeNew = calcAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
