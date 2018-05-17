/* exported stores collectNewStore*/

'use strict';

// This array will keep track of the totals per hour for all stores
var hourlyTotals = [];
hourlyTotals[0] = 'Total per hour';
var grandTotal = 0;

// this defines the hour periods that we are tracking.  Changing this will automatically change the number of columns in the table.
var hoursArray = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', 'Noon', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

// this function takes an array of data, puts each item into a td, and adds the completed row to the specified parent
function addTableRow(columnValueArray, parentElement) {
    var newRow = document.createElement('tr');
    for(var i = 0; i < columnValueArray.length; i++) {
        var newCell = document.createElement('td');
        newCell.textContent = columnValueArray[i];
        newRow.appendChild(newCell);
    }
    parentElement.appendChild(newRow);
}

// Generate random number between min and max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class Store {

    constructor(name, minCustomers, maxCustomers, cookiesPerCustomer) {
        this.name = name;
        this.minCustomers = minCustomers;
        this.maxCustomers = maxCustomers;
        this.cookiesPerCustomer = cookiesPerCustomer;
    }

    // this function creates an array that represents a row (one Store) of the table.  In addition, it increments the global hourly totals variable.
    createValueArray() {
        var totalCookies = 0;
        var hourlyValues = [];
        // first value is the store name
        hourlyValues[0] = this.name;
        // values 1 through qtyHoursTracked are cookie quantities (randomly generated between min and max)
        for(var i = 1; i < hoursArray.length - 1; i++) {
            var numberOfCookies = parseInt(getRandomInt(this.minCustomers, this.maxCustomers) * this.cookiesPerCustomer);
            hourlyValues[i] = numberOfCookies;
            // each element of hourlyTotals has to be initialized to zero
            if(isNaN(hourlyTotals[i])) {
                hourlyTotals[i] = 0;
            }
            hourlyTotals[i] += numberOfCookies;
            totalCookies += numberOfCookies;
        }
        grandTotal += totalCookies;
        // last value of array is the total number in the array/row
        hourlyValues[hoursArray.length - 1] = totalCookies;
        hourlyTotals[hoursArray.length - 1] = grandTotal;
        return hourlyValues;
    }

    writeRow(parentElement) {
        var columnValueArray = this.createValueArray();
        addTableRow(columnValueArray, parentElement);
    }

}

// Create array of Stores
const stores = [
    new Store('PDX Airport', 23, 65, 6.3),
    new Store('Pioneer Square', 3, 24, 1.2),
    new Store('Powell\'s', 11, 38, 3.7),
    new Store('St. John\'s', 20, 38, 2.3),
    new Store('Waterfront', 2, 16, 4.6)
];

// this function will add a new store to the list (called by the collectNewStore event)
function addNewStore(newLocation, newMin, newMax, newAverage) {
    const parentElement = document.getElementById('table-body');
    const newStore = new Store(newLocation, newMin, newMax, newAverage);
    stores.push(newStore);
    newStore.createValueArray();
    newStore.writeRow(parentElement);
}

function collectNewStore(event) {
    event.preventDefault();
    // get inputted values
    var newStoreName = event.target.newLocation.value;
    var newStoreMin = Number(event.target.newMin.value);
    var newStoreMax = Number(event.target.newMax.value);
    var newStoreAverage = Number(event.target.newAverage.value);
    // validation checks
    if(newStoreMin > newStoreMax) {
        event.target.errorMsg.value = 'Min cannot be more than max';
        return;
    }
    // passed validation.  Clear form and create new store.
    event.target.errorMsg.value = '';
    event.target.newLocation.value = '';
    event.target.newMin.value = '';
    event.target.newMax.value = '';
    event.target.newAverage.value = '';
    addNewStore(newStoreName, newStoreMin, newStoreMax, newStoreAverage);
}



