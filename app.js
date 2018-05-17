/* globals cookieShops */
'use strict';

var attachTrElements = document.getElementById('table-body');
var attachThElements = document.getElementById('table-head');
var attachTrFootElements = document.getElementById('table-foot');

let hours = [];
var x = 0;
function tableHeaderTime(){
    var row = document.createElement('tr');
    attachThElements.appendChild(row);
    var th = document.createElement('th');
    th.textContent = 'LOCATIONS';
    row.setAttribute('id', 'header-row');
    row.appendChild(th);
    for(var i = 6; i < 21; i++){
        if(i < 12){
            hours.push(i + ':00 am');
        } else if(i === 12) {
            hours.push(i + ':00 pm');
        } else {
            hours.push((i - 12) + ':00 pm');
        }
        var newThElement = document.createElement('th');
        newThElement.textContent = hours[x];
        row.appendChild(newThElement);
        x++;
    }
    //adding a 'location totals' header after time loop finishes
    x++;
    var newThElementTotals = document.createElement('th');
    newThElementTotals.textContent = 'LOCATION TOTALS';
    newThElement.setAttribute('class', '"mdl-data-table__cell--non-numeric"');
    row.appendChild(newThElementTotals);
}

console.log('id tag test', parseInt(document.getElementById('row-0 col-0')));
// var locationTotals = 0;
function tableBodyCalculate(){
    for(var i = 0; i < cookieShops.length; i++){
        //create tr
        var cookieTotals = 0;
        var row = document.createElement('tr');
        attachTrElements.appendChild(row);
        var StoreName = document.createElement('td');
        StoreName.textContent = cookieShops[i].location;
        row.appendChild(StoreName);
        for(var j = 0; j < hours.length; j++){
            var cookieSales = Math.floor(getRandomIntInclusive(cookieShops[i].minCustomer, cookieShops[i].maxCustomer) * cookieShops[i].avgPerCustomer);
            cookieTotals += cookieSales;
            var newTdElement = document.createElement('td');
            var totalElement = document.createElement('td');
            newTdElement.setAttribute('class', '"mdl-data-table__cell--non-numeric"');
            newTdElement.textContent = cookieSales;
            totalElement.textContent = cookieTotals;
            row.appendChild(newTdElement);
        }
        row.appendChild(totalElement);
    }
}

var hourlyTotals = 'total';
var allDailyTotals = 'All Location Totals';

function tableFooterTotals(){
    var row = document.createElement('tr');
    attachTrFootElements.appendChild(row);
    var th = document.createElement('td');
    th.textContent = 'HOURLY TOTALS';
    row.appendChild(th);
    for(var i = 0; i < hours.length; i++){
        var newTdElement = document.createElement('td');
        newTdElement.textContent = hourlyTotals;
        newTdElement.setAttribute('class', '"mdl-data-table__cell--non-numeric"');
        console.log('hourlyTotals', hourlyTotals);
        row.appendChild(newTdElement);
    }
    //adding a daily total cell after hourly totals loop finishes
    var newThElementTotals = document.createElement('td');
    newThElementTotals.textContent = allDailyTotals;
    row.appendChild(newThElementTotals);
}

tableHeaderTime();
tableBodyCalculate();
tableFooterTotals();
