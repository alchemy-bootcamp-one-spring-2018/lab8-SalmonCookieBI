/**/
/**/
'use strict';

let hours = [];

function getRandomCustomer(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var attachTrElements = document.getElementById('table-body');
var attachThElements = document.getElementById('table-head');

var x = 0;
function time(){
    var row = document.createElement('tr');
    attachThElements.appendChild(row);
    var th = document.createElement('th');
    th.textContent = '';
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
}

time();


function calculate(){
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

calculate();



const rowInfo = document.getElementById('row-0');
console.log(rowInfo);