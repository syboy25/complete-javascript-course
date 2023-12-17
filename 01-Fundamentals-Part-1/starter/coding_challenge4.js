const bill = 270; 
const tip = bill >=50 && bill <= 300 ? bill*.15 : bill > 300 ? 'no tip': bill*.20;
const total = bill + tip
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
 