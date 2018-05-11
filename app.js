/**/
/**/
'use strict';

let hours = [];

function getRandomCustomer(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
//these variables are where elements are appended to be displayed
var attachTrElements = document.getElementById('table-body');
var attachThElements = document.getElementById('table-head');

var x = 0;
//this function populates the empty 'hours' array above here, and then uses the
//new data from the array to populate the <thead> tag in the index, dynamically creating
//the header across the top
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
/*This function does most of the heavy lifting. It does almost everthing there
is to do in this table. the lower for loop runs in comparison to how long the
hours array is, and calculates random numbers for each hour of sales from the
stores in data.js. It then attaches that data onto td elements and appends those
td elements to a tr element in the for loop above it. This for loop creates the
row elements and appends them onto the table body, which is how the rows with
the randomly generated content are displayed across the screen. The amount of
rows that are created is dictated by how many objects we have put in data.js */
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
            newTdElement.setAttribute('class', j);
            totalElement.textContent = cookieTotals;
            row.appendChild(newTdElement);
        }
        row.appendChild(totalElement);
    }
}

calculate();

const rowInfo = document.getElementById('row-0');
