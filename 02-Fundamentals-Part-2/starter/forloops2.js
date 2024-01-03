'use strict';

const itachi = [
    'Itachi',
    'Uchiha',
    2037-1996,
    'Assassin',
    ['Obito','Sasuke', 'Kakashi'],
    true
];

// //Looping over arrays backwards
// for(let i = itachi.length-1; i >= 0; i--){
//     console.log(itachi[i]);
// }

// //Loop inside of an loop
// for(let exercise = 1; exercise <= 4; exercise++){
//     console.log(`-----Starting exercise ${exercise}`);

//     for(let rep = 1; rep <= 8; rep++){
//         console.log(`Exercise ${exercise}: Lifting weigths repetition ${rep} 🏋️`);
//     }
// }

const students = [
    {
        name: 'Alice',
        grades: [85, 90, 75]
    },
    {
        name: 'Bob',
        grades: [70, 80, 65]
    },
    // More students...
];

for (let i = 0; i < students.length; i++) {
    console.log(`${students[i].name}'s Grades:`);
    
    for (let j = 0; j < students[i].grades.length; j++) {
        console.log(`Subject ${j + 1}: ${students[i].grades[j]}`);
    }
    console.log('-------------------------');
}