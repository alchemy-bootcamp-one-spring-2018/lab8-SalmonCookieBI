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

randomCustomerAmount(shops);
console.log('customers', shops[0].customers);

console.log('cookies', shops[0].cookies);