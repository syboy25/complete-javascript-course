'use strict';
//Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1996);

console.log(`Age will be ${age3}`)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    // return retirement; 
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1996, 'Itachi')); 
console.log(yearsUntilRetirement(2001, 'Tonjiro')); 

