"use strict";

const bottlesOfBeer = [];
const beerSong = () => {
  let beer = 100;

  while (beer >= 1) {
    if (beer <= 100) {
      beer--;
      console.log(
        `${beer} bottles of beer on the wall, ${beer} of beer. Take 1 down, pass it around, ${
          beer - 1
        } bottles of beer on the wall.`
      );
      if (beer === 1) {
        console.log(
          `${beer} bottles of beer on the wall, ${beer} of beer. Take 1 down, pass it around, no more bottles of beer on the wall.`
        );
      }
    } else if (beer < 1)
      console.log(
        "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more 99 bottles of beer on the wall."
      );
  }
};
