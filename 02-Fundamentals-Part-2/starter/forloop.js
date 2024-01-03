//For loops keep running while condition is TRUE
// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep} 🏋️ `)
// }


//Looping Through Arrays
const itachi = [
    'Itachi',
    'Uchiha',
    2037-1996,
    'Assassin',
    ['Obito','Sasuke', 'Kakashi'],
    true
];

const types = [];

for(let i = 0; i < itachi.length; i++){
    console.log(itachi[i], typeof itachi[i])

    //Filling types array
    // types[i] = typeof itachi[i]; 
    types.push(typeof itachi[i]);
}


console.log(types);

const years = [1996, 2000, 2004, 2008, 2012];
const ages = [];

for(let i = 0; i < years.length; i++){
    ages.push(2037-years[i])


}

console.log(ages);

//Continue and break 

//Continue will keep going through the loop until all the strings all found
console.log('---ONLY STRINGS---');
for(let i = 0; i < itachi.length; i++){

    if(typeof itachi[i] !== 'string') continue; 
    console.log(itachi[i], typeof itachi[i]);
}

//Break will stop the loop once it hits something that is not a string
console.log('---BREAK WITH NUMBER---');
for(let i = 0; i < itachi.length; i++){
    if(typeof itachi[i] === 'number') break;
    console.log(itachi[i], typeof itachi[i]);
}

// console.log('---ONLY NUMBERS---');
// for(let i = 0; i < itachi.length; i++){
//     if(typeof itachi[i] !== 'number') continue;
//     console.log(itachi[i], typeof itachi[i]);
// }

// console.log('---ONLY OBJECTS---');
// for(let i = 0; i < itachi.length; i++){
//     if(typeof itachi[i] !== 'object') continue;
//     console.log(itachi[i], typeof itachi[i]);
// }

// console.log('---ONLY BOOLEANS---');
// for(let i = 0; i < itachi.length; i++){
//     if(typeof itachi[i] !== 'boolean') continue;
//     console.log(itachi[i], typeof itachi[i]);
// }
