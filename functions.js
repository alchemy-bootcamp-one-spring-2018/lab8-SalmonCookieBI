/* exported stores */

function addTableRow(columnValueArray, parentElement) {
    var newRow = document.createElement('tr');
    for(var i = 0; i < columnValueArray.length; i++) {
        var newCell = document.createElement('td');
        newCell.innerHTML = columnValueArray[i];
        newRow.appendChild(newCell);
    }
    parentElement.appendChild(newRow);
}

// Generate random number
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// Build a location class
class Store {
    
    constructor(name, minCustomers, maxCustomers, cookiesPerCustomer) {
        this.name = name;
        this.minCustomers = minCustomers;
        this.maxCustomers = maxCustomers;
        this.cookiesPerCustomer = cookiesPerCustomer;
    }

    createValueArray() {
        var totalCookies = 0;
        var hourlyValues = [];
        hourlyValues[0] = this.name;
        for(var i = 1; i < 15; i++) {
            var numberOfCookies = getRandomInt(this.minCustomers, this.maxCustomers) * this.cookiesPerCustomer;
            hourlyValues[i] = numberOfCookies;
            totalCookies += numberOfCookies;
        }
        hourlyValues[16] = totalCookies;
    }
    // build a function in location class that calculates cookies for each hour of the day
    // For each hour of the day
    // find number of customers (a random number between the min and max customers)
    // multiply number of customer by cookies per sale
    // also keep track of total cookies per location

}

// Create array of locations
const stores = [
    new Store('PDX Airport', 23, 65, 6.3),
    new Store('Pioneer Square', 3, 24, 1.2),
    new Store('Powell\'s', 11, 38, 3.7),
    new Store('St. John\'s', 20, 38, 2.3),
    new Store('Waterfront', 2, 16, 4.6)
];


// Add new row function which takes array of data and creates a row and adds it to a parent.


