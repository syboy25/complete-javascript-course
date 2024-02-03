"use strict";

const addEventListener = (typeOfEvent, callback) => {
  const eventThatHappened = {
    eventType: "keydown",
    key: "p",
    durationOfKeydown: 2,
  };

  if (eventThatHappened.eventType === typeOfEvent) {
    callback(eventThatHappened);
  }
};
addEventListener("keydown", (event) => {
  console.log(event);
});
