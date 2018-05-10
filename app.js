/* globals StoreData */

let airport = new StoreData('PDX Airport', 23, 65, 6.3);
let pioneer = new StoreData('Pioneer Square', 3, 24, 1.2);
let powells = new StoreData('Powells', 11, 38, 3.7);
let stjohns = new StoreData('St Johns', 20, 38, 2.3);
let waterfront = new StoreData('Waterfront', 2, 16, 4.6);

let storeArray = [airport, pioneer, powells, stjohns, waterfront];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomCustomers(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let hourTotalArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let hourFooterTotal = document.getElementById('table-foot');
let grandCookieTotal = 0;

for(let i = 0; i < storeArray.length; i++) {
    let storeCookieTotal = 0;
    let storeTotal = document.createElement('td');
    
    let tableBody = document.getElementById('table-body');
    let storeRow = document.createElement('tr');
    tableBody.appendChild(storeRow);


    let storeName = storeArray[i].storeLocation;
    let storeNameCell = document.createElement('td');
    storeNameCell.textContent = storeName;
    storeRow.appendChild(storeNameCell);

    for(let j = 0; j < 14; j++) {
        let customers = randomCustomers(storeArray[i].min, storeArray[i].max);
        let cookiesToBake = customers * storeArray[i].avg;
        let storeCell = document.createElement('td');

        storeCell.textContent = Math.round(cookiesToBake);
        storeRow.appendChild(storeCell);

        storeCookieTotal += Math.round(cookiesToBake);
        storeTotal.textContent = storeCookieTotal;
        storeRow.appendChild(storeTotal);

        hourTotalArray[j] += (Math.round(cookiesToBake));
        console.log(hourTotalArray);
    }
}

for(let k = 0; k < hourTotalArray.length; k++) {
    let hourCell = document.createElement('td');
    hourCell.textContent = hourTotalArray[k];
    hourFooterTotal.appendChild(hourCell);

    grandCookieTotal += hourTotalArray[k];
}

let grandTotal = document.createElement('td');
grandTotal.textContent = grandCookieTotal;
hourFooterTotal.appendChild(grandTotal);