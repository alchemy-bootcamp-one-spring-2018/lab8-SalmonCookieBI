'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

class Location {
    constructor(location, minimum, maximum, avg) {
        this.location = location;
        this.minimum = minimum;
        this.maximum = maximum;
        this.avg = avg;
        this.customers = [];
    }

    randomCustomerNum(minimum, maximum) {
        return Math.floor(Math.random() * (maximum - minimum) + minimum);  
    }
    // randomMinimumNum(min, max) {
    //     return this.minimum = Math.floor(Math.random() * ();
}


var pdxAirport = new Location('PDX Airport', 23, 65, 6.3);


console.log(pdxAirport.randomCustomerNum(minimum, maximum));

// var maximum;
// function randomMaximumNum(min, max) {
//     maximum = Math.floor(Math.random() * (max - min) + min);
//     return maximum;  
// }

// randomMaximumNum(50, 100);
// console.log(maximum);