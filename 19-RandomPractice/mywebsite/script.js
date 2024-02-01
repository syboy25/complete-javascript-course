"use strict";
const heading = document.firstElementChild.lastElementChild.firstElementChild;

heading.innerHTML = "Good Bye";

const checkbox = () => document.querySelector("input").click();

const thirdList = document.getElementsByClassName("list")[2];

const firstListItem = (document.querySelector("li a").style.color = "red");

const button = (document.querySelector("button").style.backgroundColor =
  "yellow");

const changeFontSize = document.querySelector("h1").classList.toggle("huge");
console.log(button);

console.log(firstListItem);

// console.log(thirdList);
