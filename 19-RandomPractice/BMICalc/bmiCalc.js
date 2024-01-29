"use strict";

function bmiCalculator(weight, height) {
  const bmi = Math.floor(weight / (height * 2));

  const interpretation = () => {
    if (bmi <= 18.5) {
      console.log(`Your BMI is ${bmi}, so you are underweight.`);
    } else if (bmi > 18.5 && bmi <= 24.9) {
      console.log(`Your BMI is ${bmi}, so you have normal weight.`);
    } else if (bmi > 24.9) {
      return `Your BMI is ${bmi}, so you are overweight.`;
    }
  };
  // const interpretation = () => {

  // }
  console.log(interpretation());
}

bmiCalculator(215, 1.9);
