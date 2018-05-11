/* globals shops, BizData */
'use strict';


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomCustomerAmount(array) {
    // for each location in our array...
    for(let i = 0; i < array.length; i++) {
        // for each hour in the day...
        for(let j = 0; j < 14; j++) {
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

let hourlyTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function hourlyTotalCookies(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].cookies.length; j++) {
            hourlyTotal[j] += array[i].cookies[j];
        }
    }
    return hourlyTotal;
}

function populateTable(array) {
    const shopRow = document.getElementById('shop-row');
    const shopData = shopRow.content.querySelectorAll('td');
    
    for(let i = 0; i < array.length; i++) {
        shopData[0].textContent = array[i].name;

        for(let j = 0; j < 14; j++) {
            shopData[j + 1].textContent = array[i].cookies[j];
        }

        shopData[15].textContent = totalCookies(array[i].cookies);
    
        const tb = document.querySelector('tbody');
        const clone = document.importNode(shopRow.content, true);
        tb.appendChild(clone);
    }
}

function populateFooter(array) {
    const shopRow = document.getElementById('shop-row');
    const shopData = shopRow.content.querySelectorAll('td');

    const hourlyCookies = hourlyTotalCookies(array);
      
    shopData[0].textContent = 'Hourly Totals for All Locations';

    for(let j = 0; j < 14; j++) {
        shopData[j + 1].textContent = hourlyCookies[j];
    }

    shopData[15].textContent = totalCookies(hourlyCookies);

    const tfoot = document.querySelector('tfoot');
    const clone = document.importNode(shopRow.content, true);
    tfoot.appendChild(clone);
    
}
function addRow(event) {
    event.preventDefault();
    //const formElement = document.querySelector('form');
    const inputName = event.target.location.value;
    const inputMin = parseInt(event.target.min.value);
    const inputMax = parseInt(event.target.max.value);
    const inputAvg = parseFloat(event.target.avg.value);

    const newShop = new BizData(inputName, inputMin, inputMax, inputAvg);
    // console.log(newShop);
    const newShopArray = [newShop];
    randomCustomerAmount(newShopArray);
    
    populateTable(newShopArray);

    const shopFoot = document.querySelector('tfoot');
    // console.log('footer', shopFoot);
    const shopData = shopFoot.querySelectorAll('td');

    for(let i = 0; i < 14; i++) {
        hourlyTotal[i] += newShop.cookies[i];
        shopData[i + 1].textContent = hourlyTotal[i];

    }
}

randomCustomerAmount(shops);
populateTable(shops);
populateFooter(shops);

const submit = document.getElementById('add-row-form');
submit.addEventListener('submit', addRow);
