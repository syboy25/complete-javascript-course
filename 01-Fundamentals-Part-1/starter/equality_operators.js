//Strict equality operator
const age = 18;
if(age === 18) console.log('You just became an adult');

//Loose equality operator
if(age == '18') console.log('You just became an adult');


//Practice 
const favouriteNum = Number(prompt("What's your favourite number? "));

console.log(favouriteNum); 

if(favouriteNum === 25)
{
    console.log(`That's awesome 25 is my favourite number too! You get brownie points!`);
} 
    else if(favouriteNum === favouriteNum && favouriteNum !== 0 && favouriteNum <0)
    {
        console.log(`Cool! ${favouriteNum} is an amazing number`); 
    } 
    else if (favouriteNum <= 0)
    {
        console.log('Booooo choose a higher number');
    }