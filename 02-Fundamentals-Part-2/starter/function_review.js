'use strict';

const calAge = (birthYear) => {
    return 2024-birthYear;
}

const yearsUntilHokage = (birthYear, firstName) => {
    const age = calAge(birthYear);
    const hokage = 40 - age;

    console.log(hokage);

    if(hokage < 40){
        return hokage;
    } else {
        return -1;
            }       
    }

    //  return hokage < 40 ? `${firstName} is eligible for Hokage in ${hokage} years` : `${firstName} is already eligible`;

console.log(yearsUntilHokage(1996, 'Durin'))
