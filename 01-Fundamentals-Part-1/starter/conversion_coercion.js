const inputYear = '1996';

//TYPE CONVERSION
//converts string into a number
console.log(Number(inputYear), inputYear); //returns number and string
console.log(Number(inputYear) + 18);  //returns 2014

console.log(String(23)); //converts into a string

//TYPE COERCION
console.log('I am ' +  23  + ' years old' ) //automatically converts 23 into a string
console.log('23' - '10' - 3); //automatically converted string ito numbers 
console.log('23' / '2'); //converts strings into numbers

let n = '1' + 1;
n = n - 1; 
console.log(n);