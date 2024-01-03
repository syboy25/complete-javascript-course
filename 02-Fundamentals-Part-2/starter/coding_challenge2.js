'use strict'; 

const calcTip = (bill) => {

    if(bill >=50 && bill <= 300){
        return bill *.15;
    } else{
        return bill *.20;
    }
   

    // if(bill >= 50 && bill <= 300){
    //     const tip = bill*.15
    // }
    // const bill = 270; 
    //  tip = bill >=50 && bill <= 300 ? bill*.15 : bill > 300 ? 'no tip': bill*.20;
    
}

// console.log(calcTip());

const bills = [125, 545, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(totals);

bills.push(360);

tips.push(calcTip(bills[3]));

totals.push(bills[3] + tips[3])

console.log(totals);
