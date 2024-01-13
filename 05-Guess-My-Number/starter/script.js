'use strict';

//selecting classname from HTML
// console.log(document.querySelector('h1').textContent);
// document.querySelector('h1').textContent = '🎉Correct Number!🎉 ';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 15;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.floor(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highscore = 0;

const displayMessage = messsage => {
  document.querySelector('.message').textContent = messsage;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    // document.querySelector('h1').textContent = 'No number!⛔ ';
    displayMessage('No number!⛔ ');
  }
  //When a player wins
  else if (guess === secretNumber) {
    document.querySelector('h1').textContent = '🎉YOU GUESSED IT RIGHT!🎉 ';
    // document.querySelector('.message').textContent = '🎉Correct Number!🎉 ';
    displayMessage('🎉Correct Number!🎉');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      displayMessage(
        guess == secretNumber - 2 ||
          guess == secretNumber + 2 ||
          guess == secretNumber - 1 ||
          guess == secretNumber + 1
          ? 'You are close!😬 '
          : // : (document.querySelector('.message').textContent =
          guess > secretNumber
          ? 'Too high!😐 '
          : 'Too low!🥱'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('h1').textContent = 'You just lost the game! 😒';
      document.querySelector('.score').textContent = 0;
    }
  }

  //When guess is 1 or 2 numbers away
  //   else if (
  //     guess == secretNumber - 2 ||
  //     guess == secretNumber + 2 ||
  //     guess == secretNumber - 1 ||
  //     guess == secretNumber + 1
  //   ) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'You are close!😬 ';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('h1').textContent = 'You just lost the game! 😒';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } //When guess is too high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high!😐 ';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('h1').textContent = 'You just lost the game! 😒';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } //When guess it too low
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //       document.querySelector('.message').textContent = 'Too low!🥱 ';
  //     } else {
  //       document.querySelector('h1').textContent = 'You just lost the game! 😒';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  document.querySelector('h1').textContent = 'Guess Again! ';

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
