const n = Math.random();
const loveCalc = () => {
  const person1 = prompt("Enter name 1: ");
  const person2 = prompt("Enter name 2: ");
  const lovePercentage = Math.floor(Math.random() * 100) + 1;

  console.log(`${person1} and ${person2} are ${lovePercentage}% compatible.`);

  if (lovePercentage >= 90) {
    console.log("You guys are in love like Kanye loves Kanye");
  } else {
    console.log(`Your compability is ${lovePercentage}%`);
  }
};

loveCalc();
// console.log(n);
