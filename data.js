/* exported cookieShops */

'use strict';
function getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

class CookieShops {
    constructor(location, minCustomer, maxCustomer, avgPerCustomer) {
        this.location = location;
        this.minCustomer = minCustomer;
        this.maxCustomer = maxCustomer;
        this.avgPerCustomer = avgPerCustomer;
    }
}

//table is gathering the correct info, need to attach to constructor:
function collectNewLocation(event) {
    event.preventDefault();
    
    var newLocation = event.target.newLocation.value;
    console.log('location: ', newLocation);
    
    var newMinCustomer = parseInt(event.target.newMinCustomer.value);
    console.log('new min customer: ', newMinCustomer);
    
    var newMaxCustomer = parseInt(event.target.newMaxCustomer.value);
    console.log('new max customer: ', newMaxCustomer);
    
    var newAvgCustomer = parseInt(event.target.newAvgCustomer.value);
    console.log('new avg cookies per customer: ', newAvgCustomer);
    
    cookieShops.push(new CookieShops(newLocation, newMinCustomer, newMaxCustomer, newAvgCustomer));
    console.log(cookieShops);
    
    var tablebody = document.getElementById('table-body');
    var row = document.createElement('tr');
    tablebody.appendChild(row);
    var StoreNameNew = document.createElement('td');
    StoreNameNew.textContent = newLocation;
    row.appendChild(StoreNameNew);
    var cookieTotals = 0
    for(var i = 0; i < hours.length; i++){
        var cookieSalesNew = Math.floor(getRandomIntInclusive(newMinCustomer, newMaxCustomer) * newAvgCustomer);
        var newTdElementNew = document.createElement('td');
        cookieTotals += cookieSalesNew;
        newTdElementNew.textContent = cookieSalesNew;
        row.appendChild(newTdElementNew);
    }
    var totalElement = document.createElement('td');
    totalElement.textContent = cookieTotals;
    row.appendChild(totalElement);
}

let cookieShops = [
    new CookieShops('PDX Airport', 23, 65, 6.3),
    new CookieShops('Pioneer Square', 3, 24, 1.2),
    new CookieShops('Powell\'s', 11, 38, 3.7),
    new CookieShops('St. John\'s', 20, 38, 2.3),
    new CookieShops('Waterfront', 2, 16, 4.6),
    new CookieShops('East Side', 11, 87, 6.66)
];



const submitLocation = document.getElementById('new-location-form');
submitLocation.addEventListener('submit', collectNewLocation);

