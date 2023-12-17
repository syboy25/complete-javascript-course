const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95; 

const markBMI = markWeight / (markHeight ** 2);
const johnBMI = johnWeight / (johnHeight ** 2);

console.log(`Mark \nweight: ${markWeight}kg \nheight: ${markHeight}m \nBMI: ${markBMI} `);
console.log(`John \nweight: ${johnWeight}kg \nheight: ${johnHeight}m \nBMI: ${johnBMI} `);

let markHigherBMI = markBMI > johnBMI; 
console.log(markHigherBMI); 
if (markBMI < johnBMI)
{
    console.log("John has a higher BMI than Mark");
    
}   else
    {
        console.log("Mark's BMI is greater than John's BMI");
    }