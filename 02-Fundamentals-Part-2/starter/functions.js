'use strict'

function logger() {
    console.log('My name is Sy') //code in the function to be executed
}

// calling / running / invoking function
logger(); 

function nameProcessor( pirates, ninjas) { //arguments pirates and ninjas
    console.log(pirates, ninjas); //log the values of the parameters

    const wanted = `Wanted ${pirates} pirates and ${ninjas} ninjas.`;//place the values in the string
    return wanted; //return the value of the function
}

const numberWanted = nameProcessor(5, 8); //called the nameProcessor with two arguments. The 5 and 8 are the actual values of pirates and ninjas. Saving the value value of nameProcessor 

console.log(numberWanted); // Returns values and string `Wanted ${pirates} pirates and ${ninjas} ninjas.`

console.log(nameProcessor(5, 8)) // Returns values and string `Wanted ${pirates} pirates and ${ninjas} ninjas.`

const akatsukiMembers = nameProcessor(10, 9);
console.log(akatsukiMembers);