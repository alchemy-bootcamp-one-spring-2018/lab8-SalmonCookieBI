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

    let fruitRow = document.createElement('tr');

    fruitRow.setAttribute('id', 'body-row-' + i);
    tableBody.appendChild(fruitRow);

    let nameCell = document.createElement('td');
    nameCell.textContent = storeArray[i].fruitName;
    fruitRow.appendChild(nameCell);

    let colorCell = document.createElement('td');
    colorCell.textContent = storeArray[i].fruitColor;
    fruitRow.appendChild(colorCell);

    let flavorCell = document.createElement('td');
    flavorCell.textContent = storeArray[i].fruitFlavor;
    fruitRow.appendChild(flavorCell);

    let shapeCell = document.createElement('td');
    shapeCell.textContent = storeArray[i].fruitShape;
    fruitRow.appendChild(shapeCell);

    let quantityCell = document.createElement('td');
    quantityCell.textContent = storeArray[i].fruitQuantity;
    fruitRow.appendChild(quantityCell);

    // numberTotal += storeArray[i].fruitQuantity;
}

// totalQuantity.textContent = numberTotal;
// total.appendChild(totalQuantity);