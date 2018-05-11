'use strict';

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
    //randomMinimumNum(min, max) {
    //     return this.minimum = Math.floor(Math.random() * ();
}
    
    
var pdxAirport = new Location('PDX Airport', 23, 65, 6.3);
var pioneerSquare = new Location('Pioneer Square', 3, 24, 1.2);
var powells = new Location('Powell\'s', 11, 38, 3.7);
var stjohns = new Location('St. John\'s', 20, 38, 2.3);
var waterfront = new Location('Waterfront', 2, 16, 4.6);
    
var arrayOfLocationObjects = [pdxAirport, pioneerSquare, powells, stjohns, waterfront];
    
    
//console.log(pdxAirport.randomCustomerNum(minimum, maximum));
    
var headerArray = ['Location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
function hoursHeader() {
    const tHead = document.querySelector('#table-head');
    const tr = document.createElement('tr');
    tHead.appendChild(tr);
    for(let i = 0; i < headerArray.length; i++) {
        const th = document.createElement('th');
        tr.appendChild(th);
        console.log(headerArray[i]);
        th.textContent = headerArray[i];
    }
    
}
hoursHeader();

function locationColumn() {
    var parent = document.querySelector('tbody');
    for(var i = 0; i < arrayOfLocationObjects.length; i++) {
        var child = document.createElement('tr');
        parent.appendChild(child);
        //tr.id = 'row-' + i;
        child.textContent = arrayOfLocationObjects[i].location;
        for(var j = 0; j < headerArray.length - 1; j++) {
            var cell = document.createElement('td');
            child.appendChild(cell);
            cell.textContent = arrayOfLocationObjects[i].randomCustomerNum(23, 65);
        }
    }
}

locationColumn();
// console.log(arrayOfLocationObjects);

function tableData() {
    var parent = document.querySelectorAll('tr');



}

tableData();
// var maximum;
// function randomMaximumNum(min, max) {
//     maximum = Math.floor(Math.random() * (max - min) + min);
//     return maximum;  
// }

// randomMaximumNum(50, 100);
// console.log(maximum);