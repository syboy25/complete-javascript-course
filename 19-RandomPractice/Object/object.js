const houseKeeper1 = {
  firstName: "Angela",

  lastName: "Bassett",

  yearsOfExperience: 10,

  gender: "Female",

  ethnicity: "African-American",

  age: 28,

  cleaningReportoire: ["bathroom", "lobby", "bedroom"],
};

// console.log(houseKeeper1);
// console.log(houseKeeper1.firstName);

function StrawHatPirates(name, age, birthPlace, position, hasShinshuriki) {
  this.name = name;
  this.age = age;
  this.birthPlace = birthPlace;
  this.position = position;
  this.hasShinshuriki = hasShinshuriki;
  this.powerup = () => {
    return "Gear 3";
  };
}

const strawHatPirate1 = new StrawHatPirates(
  "Luffy",
  "19",
  "Foosha Village",
  "Captain",
  ["Nine Tails", "One Tail"]
);

const strawHatPirate2 = new StrawHatPirates(
  "Zoro",
  "22",
  "The East Blue",
  "Commander",
  ["Eight Tails"]
);

console.log(JSON.stringify(strawHatPirate2));

console.log(strawHatPirate1.name);
console.log(strawHatPirate1.powerup());
