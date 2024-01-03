'use strict';

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;

// console.log(calcAverage(20,50,23));
// calcAverage(23, 25, 29);

let scoreDolphins = calcAverage(44, 23, 71);
// console.log(scoreDolphins);

let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreKoalas);

const checkWinner = (avgDolphins , avgKaolas) => {
    if( avgDolphins >= 2*avgKaolas){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKaolas})`)
    } else if (avgKaolas >= 2*avgDolphins){
        console.log(`Koalas win (${avgKaolas} vs. ${avgDolphins})`)
    } else{
        console.log('No teams wins...')
    }
}

checkWinner(scoreDolphins, scoreKoalas)


//Test 2
scoreDolphins = calcAverage(85,54,41)

scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas)



// const checkWinner = (avgDolphins, avgKaolas) =>  {
//     if(avgDolphins == 2*scoreKoalas) {
//         console.log(${ ()})
//     }
// }