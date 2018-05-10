'use strict';

var headerArray = ['Location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var arrayOfLocationObjects = [pdxAirport, pioneerSquare, powells, stjohns, waterfront];
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
var pioneerSquare = new Location('Pioneer Square', 3, 24, 1.2);
var powells = new Location('Powell\'s', 11, 38, 3.7);
var stjohns = new Location('St. John\'s', 20, 38, 2.3);
var waterfront = new Location('Waterfront', 2, 16, 4.6);



//console.log(pdxAirport.randomCustomerNum(minimum, maximum));

function hoursHeader() {
    var parent = document.getElementById('table-head');
    for(var i = 0; i < headerArray.length; i++) {
        var child = document.createElement('th');
        console.log('loop working');
        parent.appendChild(child);
        child.textContent = headerArray[i];
    }
}

function locationColumn() {
    var parent = document.getElementsByTagName('tbody');
    for(var i = 0; i < arrayOfLocationObjects.length; i++) {
        var child = document.createElement('tr');
        parent[0].appendChild(child);
        child.textContent = pdxAirport.location;
    }
}
hoursHeader();
locationColumn();
console.log(pdxAirport.location);

// var maximum;
// function randomMaximumNum(min, max) {
//     maximum = Math.floor(Math.random() * (max - min) + min);
//     return maximum;  
// }

// randomMaximumNum(50, 100);
// console.log(maximum);