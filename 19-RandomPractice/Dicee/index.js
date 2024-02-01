"use strict";
//Generate Random Numbers
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

//Generate random numbers on images
const image1 = document
  .querySelector(".img1")
  .setAttribute("src", `images/dice${randomNumber1}.png`);

const image2 = document
  .querySelector(".img2")
  .setAttribute("src", `images/dice${randomNumber2}.png`);

//Roll button
const refreshButton = document.querySelector("button");

//Refresh page
const refreshPage = () => {
  window.location.reload();
};

//Refresh page on button click
refreshButton.addEventListener("click", refreshPage);

//show the winner
const winnerDisplay = document.querySelector("h1");

const getWinner = () => {
  if (randomNumber1 > randomNumber2) {
    winnerDisplay.innerHTML = "Player 1 wins!";
  } else if (randomNumber1 < randomNumber2) {
    winnerDisplay.innerHTML = "Player 2 wins!";
  } else {
    winnerDisplay.innerHTML = "Draw!";
  }
};

getWinner();

// const getWinner = document.addEventListener("click", () => {});
