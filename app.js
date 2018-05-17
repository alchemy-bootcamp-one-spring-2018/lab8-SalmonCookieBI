'use strict';

//object constructor
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
//form data retrieving function
function submitLocationData(event) {
    event.preventDefault();
    var locationInput = event.target.location.value;
    var minimum = parseInt(event.target.minimum.value);
    var maximum = parseInt(event.target.maximum.value);
    var averageCookies = parseInt(event.target.average.value);
    arrayOfLocationObjects.push(new Location(locationInput, minimum, maximum, averageCookies));

    locationColumn();
}
    
    
var pdxAirport = new Location('PDX Airport', 23, 65, 6.3);
var pioneerSquare = new Location('Pioneer Square', 3, 24, 1.2);
var powells = new Location('Powell\'s', 11, 38, 3.7);
var stjohns = new Location('St. John\'s', 20, 38, 2.3);
var waterfront = new Location('Waterfront', 2, 16, 4.6);
    
var arrayOfLocationObjects = [pdxAirport, pioneerSquare, powells, stjohns, waterfront];
    
var headerArray = ['Location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

// time slot arrays for total in footer
var sixAm = [];
var sevenAm = [];
var eightAm = [];
var nineAm = [];
var tenAm = [];
var elevenAm = [];
var twelvePm = [];
var onePm = [];
var twoPm = [];
var threePm = [];
var fourPm = [];
var fivePm = [];
var sixPm = [];
var sevenPm = [];
var eightPm = [];

var arrayOfHours = [sixAm, sevenAm, eightAm, nineAm, tenAm, elevenAm, twelvePm, onePm, twoPm, threePm, fourPm, fivePm, sixPm, sevenPm, eightPm];

//creates header
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

//populates table body with given data
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
            if(j < headerArray.length - 1) {
                var cookieNumbers = arrayOfLocationObjects[i].randomCustomerNum() * Math.floor(arrayOfLocationObjects[i].avg);
                console.log('cookie num', cookieNumbers);
                cell.textContent = cookieNumbers;

                arrayOfHours[j - 1].push(cookieNumbers);
                totalCookies += cookieNumbers;
            }
        }
        child.appendChild(cell).textContent = totalCookies;
    }
}

locationColumn();

//https://www.w3schools.com/jsref/jsref_reduce.asp
function getSum(total, num) {
    return total + num;
}

var grandTotal = 0;

//inserts footer with totals
function insertFooter() {
    var tfoot = document.querySelector('tfoot');
    var tr = document.createElement('tr');
    tfoot.appendChild(tr);
    var td = document.createElement('td');
    tr.appendChild(td).textContent = 'Total';
    for(var i = 0; i < arrayOfHours.length; i++) {
        td = document.createElement('td');
        var allLocationsTotalPh = arrayOfHours[i].reduce(getSum);
        tr.appendChild(td).textContent = allLocationsTotalPh;
        grandTotal += allLocationsTotalPh;
        var gtTd = document.createElement('td');
    }
    tr.appendChild(gtTd).textContent = grandTotal;
    console.log('grand total', grandTotal);
}

insertFooter();

console.log('hours array', arrayOfHours);

var formData = document.querySelector('form');
formData.addEventListener('submit', submitLocationData);