/* globals shops */
'use strict';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomCustomerAmount(array) {
    // for each location in our array...
    for(let i = 0; i < array.length; i++) {
        // for each hour in the day...
        for(let j = 0; j < 15; j++) {
            // generate a random number of customers
            array[i].customers[j] = getRandomInt(array[i].min, array[i].max);
            // those customers buy cookies based averages
            array[i].cookies[j] = Math.round(array[i].customers[j] * array[i].avg);
        }
    }
}

function totalCookies(array) {
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

function hourlyTotalCookies(array) {
    let total = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].cookies.length; j++) {
            total[j] += array[i].cookies[j];
        }
    }
    return total;
}

function populateTable(array) {
    const shopRow = document.getElementById('shop-row');
    const shopData = shopRow.content.querySelectorAll('td');
    
    for(let i = 0; i < array.length; i++) {
        shopData[0].textContent = array[i].name;

        for(let j = 0; j < 15; j++) {
            shopData[j + 1].textContent = array[i].cookies[j];
        }

        shopData[16].textContent = totalCookies(array[i].cookies);
    
        const tb = document.querySelector('tbody');
        const clone = document.importNode(shopRow.content, true);
        tb.appendChild(clone);
    }
}

function populateFooter(array) {
    const shopRow = document.getElementById('shop-row');
    const shopData = shopRow.content.querySelectorAll('td');

    const hourlyTotal = hourlyTotalCookies(array);
      
    shopData[0].textContent = 'Hourly Totals for All Locations';

    for(let j = 0; j < 15; j++) {
        shopData[j + 1].textContent = hourlyTotal[j];
    }

    shopData[16].textContent = totalCookies(hourlyTotal);

    const tfoot = document.querySelector('tfoot');
    const clone = document.importNode(shopRow.content, true);
    tfoot.appendChild(clone);
    
}
function addRow() {
    event.preventDefault();
    //const formElement = document.querySelector('form');
    const inputName = document.getElementById('location').value;
    const inputMin = document.getElementById('min').value;
    const inputMax = document.getElementById('max').value;
    const inputAvg = document.getElementById('avg').value;

    const newShop = new BizData(inputName , inputMin, inputMax , inputAvg);
    console.log(newShop);

}

randomCustomerAmount(shops);
populateTable(shops);
populateFooter(shops);

const submit = document.getElementById('submit-button');
submit.addEventListener('click', addRow, true);