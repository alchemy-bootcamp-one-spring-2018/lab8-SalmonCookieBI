'use strict';
/* globals arrStores */
/* exported getColumnTotals updateFooterTotals */

var headerRow = ['Locations', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', 'Total'];
var footerRow = ['Locations', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12', 'T13', 'T14', 'T15', '12', '13', '14', '15'];
var cookiesPerHour = [];
var sumCookiesPerHour = [];


function createHeader() {
    var tbl = document.getElementById('cookie-table');
    var tblHead = document.createElement('thead');
    var row = document.createElement('tr');
    
    for(var j = 0; j < headerRow.length; j++) {
        var cell = document.createElement('th');
        var cellText = document.createTextNode(headerRow[j]);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    tblHead.appendChild(row);
    tbl.appendChild(tblHead);
}


// First loop creates rows based on index of class Store
// Second, nested loop creates rows based on headerRow.length
// and creates random values based on min/max/avg of arrStores data
function salesData() {
    var tbl = document.getElementById('cookie-table');
    var tblBody = document.createElement('tbody');
    
    for(var i = 0; i < arrStores.length; i++) {
        var row = document.createElement('tr');
        
        for(var j = 0; j < headerRow.length; j++) {
            var cell = document.createElement('td');
            var cellText = document.createTextNode(arrStores[i].random());
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
}


function createFooter() {
    var tbl = document.getElementById('cookie-table');
    var tblFoot = document.createElement('tfoot');
    var row = document.createElement('tr');
    
    for(var j = 0; j < headerRow.length; j++) {
        var cell = document.createElement('td');
        var cellText = document.createTextNode(footerRow[j]);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    tblFoot.appendChild(row);
    tbl.appendChild(tblFoot);
}

// Function only works if cells[i] is hard-coded to column number (e.g. 1)
function getColumnTotals() {
    var rows = document.getElementById('cookie-table').getElementsByTagName('tr');
    var cookiesPerStore = [];

    for(var i = 0; i < rows.length - 2; i++) {
        cookiesPerStore[i] = (parseFloat(rows[i + 1].cells[1].firstChild.data));
        console.log('getColumnTotals "i" value: ' + i);
    }
    cookiesPerHour.push(cookiesPerStore);
    console.log(cookiesPerStore);
    
    console.table(cookiesPerHour);

}


function keepLocationColumn() {
    for(var i = 0; i < arrStores.length; i++) {
        var locate = document.getElementById('cookie-table').rows[i + 1].cells[0];
        locate.innerHTML = arrStores[i].location;
    }
}


function sumColumnTotals() {
    for(var i = 0; i < cookiesPerHour.length; i++) {
        var sum = cookiesPerHour[i].reduce(
            function(total, num){ return total + num; }
            , 0);
        
        console.log('Sum of column: ' + sum);
        sumCookiesPerHour.push(sum);
    }
}

// "I" IS SET TO 1. NEEDS TO BE headerRows.length ONCE ARRAY TOTALING FIXED
// updateCells = rows[i] won't take "i"; only takes hard-coded number
function updateFooterTotals() {
    var rows = document.getElementById('cookie-table').getElementsByTagName('tr');
    for(var i = 0; i < 1; i++) {
        var updateCells = rows[6].cells[i + 1];
        updateCells.innerHTML = sumCookiesPerHour[i];
    }
}


createHeader();
salesData();
createFooter();
getColumnTotals();
keepLocationColumn();
sumColumnTotals();
updateFooterTotals();