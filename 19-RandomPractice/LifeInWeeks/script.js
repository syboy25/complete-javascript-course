"use strict";

function lifeInWeeks(age) {
  let days = 365 * (90 - age);
  let weeks = 52 * (90 - age);
  let months = 12 * (90 - age);

  console.log(`You have ${days} days, ${weeks} weeks, ${months} months left.`);
}

lifeInWeeks(24);
