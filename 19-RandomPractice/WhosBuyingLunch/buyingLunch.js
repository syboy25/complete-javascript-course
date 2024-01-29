"use strict";

const namesList = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {
  const randomName = Math.floor(Math.random() * names.length);

  const name = names[randomName];

  return `${name} is going to buy lunch today!`;
}

const result = whosPaying(namesList);
console.log(result);
