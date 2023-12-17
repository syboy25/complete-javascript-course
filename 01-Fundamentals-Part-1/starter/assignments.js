// const country = "USA";
// const continent = "North America";
// let population = 579000000;
// let isIsland = false;
// let language;

// console.log(`Country: ${country} \nContinent: ${continent} \nPopulation: ${population}`);

// language = "Enlgish"; 
// isIsland = true; 

// console.log(typeof(country), typeof(population), typeof(isIsland), typeof(language));


// // population /= 2; 
// // population++; 
// // population = population > 6000000000
// console.log(`${country} is in ${continent}, and its ${population} million people speak ${language}`);

// if (population >  33000000)
// {
//     console.log(`${country}'s population is above average`)
// } else
//     {
//         console.log(`${country}'s population is ${33000000-population} is below average`)
//     }

// const numNeighbours = prompt('How many neighbour countries does your country have?')

const numNeighbours = Number(prompt('How many neighbour countries does your country have?'))
if (numNeighbours === 1)
{
    console.log('Only 1 border!');

} else if (numNeighbours > 1)
    {
        console.log('More than one border!');
    }
    else
    {
        console.log('No border');
    }
