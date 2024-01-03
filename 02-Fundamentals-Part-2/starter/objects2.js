'use strict'; 
const sy = {
    firstName: 'Sy',
    lastName: 'Herring',
    birthYear: 1996,
    job: 'Assassin',
    friends: ['Itachi', 'Luffy', 'Tonjiro'],
    hasHunterLicense: true,

    //functions attached to an object is called a method
    // calcAge: function(birthYear){
    //     return 2037 - birthYear;
    // }

    calcAge: function() {
        this.age = 2037-this.birthYear;
        return this.age;
    },

    getSummary: function() {

        return `${this.firstName} is a ${this.age}-year old ${this.job} and has ${this.hasHunterLicense ? 'a' : 'no'} Hunter's License.`;
        // if(this.hasHunterLicense == true){
        //     // this.calcAge()
        //     return `${this.firstName} is a ${this.age}-year old ${this.job} and has hunter's license`;
        // } else {
        //     return `${this.firstName} is a ${this.age}-year old ${this.job} without a hunter's license`;
        // }
    }
}; 

console.log(sy.calcAge())

console.log(sy.age);

// Practice challenge: "sy is a 41-year old teacher and has a driver license"

console.log(sy.getSummary())