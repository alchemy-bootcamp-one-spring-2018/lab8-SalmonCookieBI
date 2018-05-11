/* globals cookieShops */
'use strict';


function getRandomCustomer(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

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
    row.appendChild(th);
    for(var i = 6; i < 21; i++){
        if(i <= 12){
            hours.push(i + ':00 am');
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
    row.appendChild(newThElementTotals);
}

function tableBodyCalculate(){
    for(var i = 0; i < cookieShops.length; i++){
        //create tr
        var cookieTotals = 0;
        var row = document.createElement('tr');
        attachTrElements.appendChild(row);
        row.setAttribute('id', 'row-' + i);
        var StoreName = document.createElement('td');
        StoreName.textContent = cookieShops[i].location;
        row.appendChild(StoreName);
        for(var j = 0; j < hours.length; j++){
            var cookieSales = Math.floor(getRandomCustomer(cookieShops[i].minCustomer, cookieShops[i].maxCustomer) * cookieShops[i].avgPerCustomer);
            cookieTotals += cookieSales;
            var newTdElement = document.createElement('td');
            var totalElement = document.createElement('td');
            newTdElement.textContent = cookieSales;
            totalElement.textContent = cookieTotals;
            console.log(cookieTotals);
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
    var th = document.createElement('th');
    th.textContent = 'HOUR TOTALS';
    row.appendChild(th);
    for(var i = 0; i < hours.length; i++){
        var newTdElement = document.createElement('td');
        newTdElement.textContent = hourlyTotals;
        row.appendChild(newTdElement);
    }
    //adding a daily total cell after hourly totals loop finishes
    var newThElementTotals = document.createElement('th');
    newThElementTotals.textContent = allDailyTotals;
    row.appendChild(newThElementTotals);
}

//function footerTotals() {

//}



tableHeaderTime();
tableBodyCalculate();
tableFooterTotals();
//footerTotals();

const rowInfo = document.getElementById('row-0');
console.log(rowInfo);