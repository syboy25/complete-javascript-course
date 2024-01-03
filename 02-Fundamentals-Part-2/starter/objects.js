'use strict';

//Object Literal - literally writing down the objects contents
const sy = {
    firstName: 'Sy',
    lastName: 'Herring',
    age: 2037-1996,
    job: 'Assassin',
    friends: ['Itachi', 'Luffy', 'Tonjiro']
}; 

//Difference between object and arrays: Objects does not matter the order in which you retrieve the data. 

//Getting properties from an object

//Dot notation: looks cleaner and simple to use 
console.log(sy.lastName);
console.log(sy['lastName']);

//Bracket Notation: when you want to compute the propert name

const nameKey = 'Name';
console.log(sy['first' + nameKey]);
console.log(sy['last' + nameKey]);

const interestIn = prompt('What do you want to know about Sy?')

// if(sy[interestIn]){f
//     console.log(sy[interestIn]);
// } else {
//     console.log('Wrong request!')
// }

//Adding properties to an object
sy.location = 'Colombia';
sy['twitter'] = '@syboy25'; 
console.log(sy)

//Practice Challenge
//Sy had 3 friends, and his best friend is called Luffy

if(sy[interestIn] == sy.friends){
    console.log(`${sy.firstName} has ${sy.friends.length}, and his best friend is called ${sy.friends[1]}`)
} else if (sy[interestIn] == sy.job){
    console.log(`${sy.firstName}'s job is an ${sy.job}`)
} else if (sy[interestIn] == sy.age){
    console.log(`${sy.firstName} is an ${sy.age} years old.`)
} else {
    console.log('Information is not going to work')
}
