'use strict';

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi; 
    }
}
mark.calcBMI();

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi; 
    }
}

john.calcBMI();



console.log(mark.bmi > john.bmi ? `${mark.fullName}'s bmi (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`: `${john.fullName}'s bmi (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)