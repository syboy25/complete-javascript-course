'use strict';
const akatsuki = ['Itachi', 'Oruchimaru', 'Hidan', 'Pain', 'Obito'];

console.log(akatsuki);

const skillLevel = new Array(95,85,80,94,96);

console.log(akatsuki[0]);
console.log(akatsuki[2]);

console.log(akatsuki.length);

console.log(akatsuki[akatsuki.length-1]);


akatsuki[1] = 'Konan'; //changes element one's name to Konan
console.log(akatsuki);


const firstName= 'Itachi'
// makes a variable named Itachi and assign it an array with the variable firstName, string Uchiha, the number 25, the string akatsuki member and the akatsuki array
const Itachi = [firstName, 'Uchiha', 25, 'akatsuki member', akatsuki]; 
console.log(Itachi)

const calcAge = (birthYear) => {
    return 2030-birthYear;
}

const years = [1990, 1996, 2000, 2010, 2020];

const age1= calcAge(years[0]);

const age2= calcAge(years[1]);

const age3= calcAge(years[years.length-1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])]

console.log(ages);