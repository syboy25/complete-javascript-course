"use strict";

const guestList = ["Angela", "Timmy", "Jimmy", "Jack", "Kim", "Lara"];

// console.log(guestList.length);

const checkList = () => {
  const guestName = prompt(`What is your name? `);

  //   console.log(guestName, typeof guestName);

  if (guestList.includes(guestName) === true) {
    console.log(`Welcome back ${guestName}.`);
  } else if (guestList.includes(guestName) === false) {
    const addName = prompt(
      `${guestName} is not on the list. Would you like to add the name?`
    );

    if (addName === "yes") {
      guestList.push(guestName);
      const newGuestList = guestList;
      console.log(newGuestList);
    } else {
      console.log("You may not pass go.");
    }
  } else {
    console.log(`You may not pass go.`);
  }
};

checkList();
