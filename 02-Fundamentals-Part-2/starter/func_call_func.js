'use strict';

function growingAkatsukiMembers(members) {
    return members * 4;
}

function nameProcessor( pirates, ninjas) { //arguments pirates and ninjas
    // console.log(pirates, ninjas); //log the values of the parameters
    const newPirates = growingAkatsukiMembers(pirates);
    const newNinjas = growingAkatsukiMembers(ninjas); 
    const wanted = `We have ${newPirates} new pirates and ${newNinjas} new ninjas.`;//place the values in the string
    return wanted; //return the value of the function
}

const akatsukiMembers = nameProcessor(3,5);
console.log(akatsukiMembers);

