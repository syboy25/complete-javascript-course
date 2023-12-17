//Math Operators
const todayYear = 2023
const ageSy = todayYear - 1996;
const ageJess = todayYear - 1991;
console.log(`Sy's age is ${ageSy}, \nJess's age is ${ageJess}`);

console.log(ageJess * 2, ageSy / 10, 2**3 ); //2**3 means 2 to the power of 3 = 2 * 2 * 2

//Using + operator to concatinate strings
const firstName = 'Itachi';
const lastName = 'Uchiha';
console.log(firstName + ' ' + lastName); 

//Assingment Operatiors 
let x = 10 + 5; 
x += 10; //x = x + 10 = 25
x *= 4; //x = x * 4 = 100
x++; //x = x + 1
x--;
x--;
console.log(x); 

//Comparison Operators
console.log(ageJess > ageSy); // >, <, >=, <=
console.log(ageSy >= 27);

const isFullAge = ageSy >= 18; 

console.log(todayYear - 1991 > todayYear - 1996);

let x, y;
x = y = 25-10-5; //x = y = 10
console.log(x, y);

const averageAge = (ageJess + ageSy) / 2
console.log(ageJess, ageSy, averageAge); 