const age = 26;

//IF age is 18 and above then I like to drink wine ELSE age is below 18 then I like to drink water
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 🚰');

const drink = age >= 18 ? 'wine 🍷' : 'water 🚰';
console.log(drink);

let drink2;

if(age >= 18) {
    drink2 = 'wine 🍷';
} else{
    drink2 = 'water 🚰';
}
console.log(drink2); 

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 🚰'}`); //Using with template literals