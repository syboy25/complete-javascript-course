"use strict";
const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

//start game
const startGame = () => {
  $(document).on("keydown", () => {
    if (!started) {
      $("h1").text(`Level: ${level} `);
      nextSequence();
      started = true;
    }
  });
};

startGame();

//clicking the buttons
$(".btn").click((event) => {
  const userChosenColour = event.target.id;
  console.log(userChosenColour);
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

//check answer
const checkAnswer = (currentLevel) => {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    } else {
      console.log("wrong");
    }
  }
};

//next sequence of pattern
const nextSequence = () => {
  userClickedPattern = [];

  level++;
  $("h1").text(`Level: ${level++} `);

  const randomNumber = Math.floor(Math.random() * 4);
  console.log(randomNumber);
  const randomColour = buttonColours[randomNumber];
  console.log(randomColour);
  gamePattern.push(randomColour);
  console.log(gamePattern);

  $(`#${randomColour}`).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomColour);
};

//Play sound
const playSound = (colour) => {
  const sound = new Audio(`sounds/${colour}.mp3`);
  sound.play();
};

//animation
const animatePress = (currentColour) => {
  $(`.${currentColour}`).addClass("pressed");

  setTimeout(() => {
    $(`.${currentColour}`).removeClass("pressed");
  }, 100);
};
