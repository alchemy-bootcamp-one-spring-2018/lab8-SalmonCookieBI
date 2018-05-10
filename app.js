/* globals StoreData */

let airport = new StoreData('PDX Airport', 23, 65, 6.3);
let pioneer = new StoreData('Pioneer Square', 3, 24, 1.2);
let powells = new StoreData('Powells', 11, 38, 3.7);
let stjohns = new StoreData('St Johns', 20, 38, 2.3);
let waterfront = new StoreData('Waterfront', 2, 16, 4.6);

let storeArray = [airport, pioneer, powells, stjohns, waterfront];
// let hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomCustomers(min, max) {
    return Math.random() * (max - min) + min;
}

// let numberTotal = 0;
// let total = document.getElementById('total-row');
// let totalQuantity = document.createElement('td');

for(let i = 0; i < storeArray.length; i++) {

    let tableBody = document.getElementById('table-body');
    let storeRow = document.createElement('tr');
    tableBody.appendChild(storeRow);

    for( let j = 1; j < 15; j++) {
        let customers = randomCustomers(storeArray[i].min, storeArray[i].max);
        let cookiesToBake = customers * storeArray[i].avg;
        let storeCell = document.createElement('td');
        storeCell.textContent = cookiesToBake;
        storeRow.appendChild(storeCell);
        
         
        
    }
}

// totalQuantity.textContent = numberTotal;
// total.appendChild(totalQuantity);