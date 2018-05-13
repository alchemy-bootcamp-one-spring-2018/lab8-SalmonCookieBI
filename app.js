/* globals stores addTableRow hourlyTotals hoursArray collectNewStore*/

'use strict';

// event listener(s)
var addForm = document.getElementById('add-form');
addForm.addEventListener('submit', collectNewStore);

var parentElement;

// create a header
var headerArray = hoursArray;
headerArray.push('Location Totals');
hoursArray.unshift('Locations');
parentElement = document.getElementById('table-header');
addTableRow(headerArray, parentElement);

// add all the locations to a table (loop through list of stores)
parentElement = document.getElementById('table-body');
for(var i = 0; i < stores.length; i++) {
    stores[i].writeRow(parentElement);
}

// create a footer (include the hourly totals across all stores)
parentElement = document.getElementById('table-footer');
addTableRow(hourlyTotals, parentElement);



