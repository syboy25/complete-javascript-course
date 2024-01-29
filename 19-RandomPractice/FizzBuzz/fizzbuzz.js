"use strict";

const output = [];
// let count = 1;
//Output display
// const resultOutput = document.querySelector("#resultOutput");
//Button
const btnOutput = document.querySelector("#btnOutput");

//shows the fizz-buzz-fizzbuzz
const displayOutput = (message) => {
  document.querySelector("#resultOutput").textContent = message;
};
//FizzBuzz
const fizzBuzz = () => {
  for (let count = 1; count < 101; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
    // count++;
    displayOutput(output);
  }
  // displayOutput(output);
};

btnOutput.addEventListener("click", fizzBuzz);

// fizzBuzz();

//shows the fizz-buzz-fizzbuzz
// const displayOutput = (message) => {
//   document.querySelector("#resultOutput").textContent = message;
// };
