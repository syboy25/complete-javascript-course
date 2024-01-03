'use strict';

const akatsuki = ['Itachi', 'Oruchimaru', 'Hidan', 'Pain', 'Obito'];


//Push method: adds elements to the end of an array

const newLength= akatsuki.push('Konan');

console.log(akatsuki);

console.log(newLength);

//Unshift method: adds elements to the beginning of an array

akatsuki.unshift('Dedara');
console.log(akatsuki);

//Pop method: removes the last element of the array
akatsuki.pop();
const popped = akatsuki.pop();
console.log(popped);
console.log(akatsuki);

//Shift: Removes the first element in the array
akatsuki.shift();
console.log(akatsuki);

//indexOf(): returns the position or location in the array of an element
console.log(akatsuki.indexOf('Itachi'));


//Will return true or false whether the element is within the array or not. 
console.log(akatsuki.includes('Hidan'));


//Arrays are not type coversion 

if(akatsuki.includes('Itachi')) {
    console.log('You have a friend named Itachi'); 
}