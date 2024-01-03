'use strict';

//Function Declaration 
function calcAge1(birthYear) { //placeholder 
    return 2037 - birthYear;
}

const age1= calcAge1(1996); 

//Function Expression

//Anonymous function. An expression that produces an value
const calcAge2 = function (birthYear) { //value stored into calcAge2. calAge2 is the function
    return 2037 - birthYear;
}

const age2 = calcAge2(1995);

console.log(age1 , age2);

