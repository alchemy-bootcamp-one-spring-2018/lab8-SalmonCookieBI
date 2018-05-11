/* globals stores addTableRow hourlyTotals */

var parentElement;

// create a header
parentElement = document.getElementById('table-header');
var headerArray = ['Locations', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', 'Noon', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', 'Location Totals'];
addTableRow(headerArray, parentElement);

// initialize variables to keep track of hourly totals
var hourlyTotals = [];

// add all the locations to a table (loop through list of stores)
parentElement = document.getElementById('table-body');
for(var i = 0; i < stores.length ; i++) {
    stores[i].writeRow(parentElement);
}


// create a footer (include the hourly totals across all stores)
parentElement = document.getElementById('table-footer');
addTableRow(hourlyTotals, parentElement);