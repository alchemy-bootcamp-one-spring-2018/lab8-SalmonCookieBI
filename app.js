'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

class Location {
    constructor(location, maximum, minimum, avg) {
        this.location = location;
        this.max = max;
        this.min = min;
        this.avg = avg;

        randomMaximumNum(min, max) {
            return this.maximum = Math.floor(Math.random() * (max - min) + min);  
        }
    }
}
// var maximum;
// function randomMaximumNum(min, max) {
//     maximum = Math.floor(Math.random() * (max - min) + min);
//     return maximum;  
// }

// randomMaximumNum(50, 100);
// console.log(maximum);