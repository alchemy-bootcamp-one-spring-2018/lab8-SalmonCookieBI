'use strict';


/* globals Stores */
/* exported createHeader */

var headerRow = ['Locations', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', 'TOTAL'];

var arrStores = new Array();
arrStores[0] = new Stores('PDX Airport', 23, 65, 6.3);
arrStores[1] = new Stores('Pioneer Square', 3, 24, 1.2);
arrStores[2] = new Stores('Powell\'s', 11, 38, 3.7);
arrStores[3] = new Stores('St. John\'s', 20, 38, 2.3);
arrStores[4] = new Stores('Waterfront', 2, 16, 4.6);


//var footerRow = ['TOTAL', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', 'TEST', 'test'];


function createHeader() {
    var table = document.getElementsByTagName('table')[0];
    var thead = document.createElement('thead');
    table.appendChild(thead);

    var row = thead.insertRow(0);
    var cell = [];
    
    for(var i = 0; i < headerRow.length; i++) {
        cell[i] = row.insertCell(i);
        cell[i].textContent = headerRow[i];
    }
}



function salesData() {
    var table = document.getElementsByTagName('table')[0];
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);

    for(var i = 0; i < arrStores.length; i++) {
        arrStores[i].cookiesToSell();
    }
}



function createFooter() {
    var table = document.getElementsByTagName('table')[0];
    var tfoot = document.createElement('tfoot');
    table.appendChild(tfoot);

    var row = tfoot.insertRow(0);
    var cell = [];

    for(var i = 0; i < headerRow.length; i++) {
        cell[i] = row.insertCell(i);
        cell[i].textContent = headerRow[i];
    }
}





/* var arrSumCol = [];


var checkOnClick = document.getElementById('sum-table');
checkOnClick.addEventListener('click', function(){
    //sumRow();
    sumCol();
}); */

/* 
// var arrSumRow = new Array();
// var arrSumCol = [];

function sumRow() {

    // Onclick (testing), grabs trs from the page, row #
    // Loops through all cells - 1 (last cell is "Total")
    // Parses data and returns a floating point number
    // sum += val keeps running total
    // console logs return value
    //window.onclick = function() {
    
    var rowCells = document.querySelectorAll('tr:nth-child(1) td');
    var sumRow1 = 0;
    for(var i = 0; i < (rowCells.length - 1); i++) {
        var val = parseFloat(rowCells[i].firstChild.data);
        if(!isNaN(val)) {
            sumRow1 += val;
        }
    }

    console.log('Row sum ' + sumRow1);
    // console.log('Row sum ' + sumRow2);
    // console.log('Row sum ' + sumRow3);
    // console.log('Row sum ' + sumRow4);
    // console.log('Row sum ' + sumRow5);
    //};
} */


/* 
// locates table via querySelector, loads table.onclick (using to test)
// function locates table and then tr tags
// loops through td data, parses to return a floating point number
// declares var for one column, loops through rows to add up: sumCol +=
// console logs return value
function sumCol() {
    var rows =
        document.getElementById('sum-table').getElementsByTagName('tr');
    var sumCol1 = '';
    var sumCol2 = 0;
    var sumCol3 = 0;
    var sumCol4 = 0;
    var sumCol5 = 0;
    var sumCol6 = 0;
    var sumCol7 = 0;
    var sumCol8 = 0;
    var sumCol9 = 0;
    var sumCol10 = 0;
    var sumCol11 = 0;
    var sumCol12 = 0;
    var sumCol13 = 0;
    var sumCol14 = 0;
    var sumCol15 = 0;
    
    // includes the first column for visual context (string of locations)
    // omit the last row, which is to be used for totals later
    for(var i = 1; i < (rows.length - 1); i++) {
        sumCol1 += (rows[i].childNodes[0].firstChild.data + ', ');
    }
    arrSumCol.push(sumCol1);
    console.log('This is the array ' + sumCol1);

    for(i = 1; i < (rows.length - 1); i++) {
        sumCol2 += parseFloat(rows[i].childNodes[1].firstChild.data);
    }
    arrSumCol.push(sumCol2);
    console.log('This is the array ' + sumCol2);

    for(i = 1; i < (rows.length - 1); i++) {
        sumCol3 += parseFloat(rows[i].childNodes[2].firstChild.data);
    }
    
    for(i = 1; i < (rows.length - 1); i++) {
        sumCol4 += parseFloat(rows[i].childNodes[3].firstChild.data);
    }

    for(i = 1; i < (rows.length - 1); i++) {
        sumCol5 += parseFloat(rows[i].childNodes[4].firstChild.data);
    }

    for(i = 1; i < (rows.length - 1); i++) {
        sumCol6 += parseFloat(rows[i].childNodes[5].firstChild.data);
    }

    for(i = 1; i < (rows.length - 1); i++) {
        sumCol7 += parseFloat(rows[i].childNodes[6].firstChild.data);
    }

    for(i = 1; i < (rows.length - 1); i++) {
        sumCol8 += parseFloat(rows[i].childNodes[7].firstChild.data);
    }

    for(i = 1; i < (rows.length - 1); i++) {
        sumCol9 += parseFloat(rows[i].childNodes[8].firstChild.data);
    }

    for(i = 1; i < (rows.length - 1); i++) {
        sumCol10 += parseFloat(rows[i].childNodes[9].firstChild.data);
    }

    for(i = 1; i < (rows.length - 1); i++) {
        sumCol11 += parseFloat(rows[i].childNodes[10].firstChild.data);
    }

    for(i = 1; i < (rows.length - 1); i++) {
        sumCol12 += parseFloat(rows[i].childNodes[11].firstChild.data);
    }

    for(i = 1; i < (rows.length - 1); i++) {
        sumCol13 += parseFloat(rows[i].childNodes[12].firstChild.data);
    }

    for(i = 1; i < (rows.length - 1); i++) {
        sumCol14 += parseFloat(rows[i].childNodes[13].firstChild.data);
    }

    for(i = 1; i < (rows.length - 1); i++) {
        sumCol15 += parseFloat(rows[i].childNodes[14].firstChild.data);
    }


    console.log('Sums from 1st column: ' + sumCol1);
    console.log('Sums from 2nd column: ' + sumCol2);
    console.log('Sums from 3rd column: ' + sumCol3);
    console.log('Sums from 4th column: ' + sumCol4);
    console.log('Sums from 5th column: ' + sumCol6);
    console.log('Sums from 6th column: ' + sumCol5);
    console.log('Sums from 7th column: ' + sumCol7);
    console.log('Sums from 8th column: ' + sumCol8);
    console.log('Sums from 9th column: ' + sumCol9);
    console.log('Sums from 10th column: ' + sumCol10);
    console.log('Sums from 11th column: ' + sumCol11);
    console.log('Sums from 12th column: ' + sumCol12);
    console.log('Sums from 13th column: ' + sumCol13);
    console.log('Sums from 14th column: ' + sumCol14);
    console.log('Sums from 15th column: ' + sumCol15);
}
 */


createHeader();
salesData();
createFooter();