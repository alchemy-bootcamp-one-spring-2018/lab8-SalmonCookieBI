'use strict';

class Location {
    constructor(location, minimum, maximum, avg) {
        this.location = location;
        this.minimum = minimum;
        this.maximum = maximum;
        this.avg = avg;
    }
    
    randomCustomerNum() {
        return Math.floor(Math.random() * (this.maximum - this.minimum) + this.minimum);
    }
}

function submitLocationData(event) {
    event.preventDefault();
    var locationInput = event.target.location.value;
    var minimum = parseInt(event.target.minimum.value);
    var maximum = parseInt(event.target.maximum.value);
    var averageCookies = parseInt(event.target.average.value);
    arrayOfLocationObjects.push(new Location(locationInput, minimum, maximum, averageCookies));
    console.log('inputs are:', locationInput, minimum, maximum, averageCookies);
    console.log(arrayOfLocationObjects);
    locationColumn();
}
    
    
var pdxAirport = new Location('PDX Airport', 23, 65, 6.3);
var pioneerSquare = new Location('Pioneer Square', 3, 24, 1.2);
var powells = new Location('Powell\'s', 11, 38, 3.7);
var stjohns = new Location('St. John\'s', 20, 38, 2.3);
var waterfront = new Location('Waterfront', 2, 16, 4.6);
    
var arrayOfLocationObjects = [pdxAirport, pioneerSquare, powells, stjohns, waterfront];
    


//console.log(pdxAirport.randomCustomerNum(minimum, maximum));
    
var headerArray = ['Location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];
function hoursHeader() {
    const tHead = document.querySelector('#table-head');
    const tr = document.createElement('tr');
    tHead.appendChild(tr);
    for(let i = 0; i < headerArray.length; i++) {
        const th = document.createElement('th');
        tr.appendChild(th);
        th.textContent = headerArray[i];
    }
    
}

hoursHeader();

function locationColumn() {
    var parent = document.querySelector('tbody');
    parent.textContent = '';
    for(var i = 0; i < arrayOfLocationObjects.length; i++) {
        var totalCookies = 0;
        var child = document.createElement('tr');
        parent.appendChild(child);
        child.textContent = arrayOfLocationObjects[i].location;
        for(var j = 1; j < headerArray.length; j++) {
            var cell = document.createElement('td');
            child.appendChild(cell);
            var cookieNumbers = arrayOfLocationObjects[i].randomCustomerNum() * Math.floor(arrayOfLocationObjects[i].avg);
            cell.textContent = cookieNumbers;
            totalCookies += cookieNumbers;
        }
        child.appendChild(cell).textContent = totalCookies;
    }
}

locationColumn();


var formData = document.querySelector('form');
formData.addEventListener('submit', submitLocationData);


    











// console.log(arrayOfLocationObjects);
var locationTotalsArray = [];

// function tableData() {
//     var parent = document.querySelector('tr');



// }

//tableData();
// var maximum;
// function randomMaximumNum(min, max) {
//     maximum = Math.floor(Math.random() * (max - min) + min);
//     return maximum;  
// }

// randomMaximumNum(50, 100);
// console.log(maximum);