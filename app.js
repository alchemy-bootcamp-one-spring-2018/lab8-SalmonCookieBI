/* globals shops */
'use strict';

function getRandomInt(min, max) {
    console.log('random int between', min, max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomCustomerAmount(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < 15; j++) {
            array[i].customers[j] = getRandomInt(array[i].min, array[i].max);
            array[i].cookies[j] = Math.round(array[i].customers[j] * array[i].avg);
        }
    }
}

function populateTable(array) {
    const shopRow = document.getElementById('shop-row');
    const shopData = shopRow.content.querySelectorAll('td');
    
    for (let i = 0; i < array.length; i++) {
        shopData[0].textContent = array[i].name;

        for (let j = 0; j < 15; j++) {
            shopData[j + 1].textContent = array[i].cookies[j];
        }

        shopData[16].textContent = 'total';
    
        const tb = document.querySelector('tbody');
        const clone = document.importNode(shopRow.content, true);
        tb.appendChild(clone);
    }
}



randomCustomerAmount(shops);
console.log('customers', shops[0].customers);

console.log('cookies', shops[0].cookies);

populateTable(shops);