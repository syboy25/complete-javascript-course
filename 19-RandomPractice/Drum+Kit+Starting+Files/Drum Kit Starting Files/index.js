"use strict";

// const handleClick = () => {
//   const tomDrum1 = new Audio("sounds/tom-1.mp3");

//   tomDrum1.play();
// };

//Button press
const letterBtns = document.querySelectorAll("button.drum").length;

for (let i = 0; i < letterBtns; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    const button = this.innerHTML;
    console.log(button);

    makeSound(button);
  });
}

//Keyboard press
const keydownSound = document.addEventListener("keydown", (event) => {
  makeSound(event.key);
});

//Sound
const makeSound = (key) => {
  switch (key) {
    case "w":
      const crash = new Audio("sounds/crash.mp3");
      crash.play();
      // document.addEventListener("keydown", (e) => {
      //   if (e.key === "w") {
      //     crash.play();
      //   }
      // });
      //   }
      // });

      break;

    case "a":
      const kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();

      // document,
      //   addEventListener("keydown", (e) => {
      //     if (e.key === "a") {
      //       kickBass.play();
      //     }
      //   });

      break;

    case "s":
      const snare = new Audio("sounds/snare.mp3");
      snare.play();

      // document.addEventListener("keydown", (e) => {
      //   if (e.key === "s") {
      //     snare.play();
      //   }
      // });
      break;

    case "d":
      const tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();

    // document.addEventListener("keydown", (e) => {
    //   if (e.key === "d") {
    //     tom1.play();
    //   }
    // });
    // break;

    case "j":
      const tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();

      // document.addEventListener("keydown", (e) => {
      //   if (e.key === "j") {
      //     tom2.play();
      //   }
      // });
      break;

    case "k":
      const tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();

      // document.addEventListener("keydown", (e) => {
      //   if (e.key === "k") {
      //     tom3.play();
      //   }
      // });

      break;
    case "l":
      const tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();

      // document.addEventListener("keydown", (e) => {
      //   if (e.key === "l") {
      //     tom4.play();
      //   }
      // });
      break;
    default:
  }
};
// wordBtn.querySelectorAll();
debugger;
