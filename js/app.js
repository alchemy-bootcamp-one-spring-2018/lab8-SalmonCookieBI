'use strict';

// Build Times
let times = ['Location'];
for(let i = 6; i < 13; i++) {
    if(i === 12) {
        times.push(i + ':00 PM');
    }
    else {
        times.push(i + ':00 AM');
    }
}
for(let i = 1; i < 9; i++) {
    times.push(i + ':00 PM');
}
times.push('Totals');

// let totals = [];

// Instantiate cookie objects (Location, Min, Max, Avg)
let pike = new Cookie('1st and Pike', 23, 65, 6.7);
let seatac = new Cookie('SeaTac Airport', 3, 24, 1.2);
let center = new Cookie('Seattle Center', 11, 38, 3.7);
let capitol = new Cookie('Capitol Hill', 20, 38, 2.3);
let alki = new Cookie('Alki', 2, 16, 4.6);

let cookieArray = [];

if(localStorage.cookieArray) {
    let temp = JSON.parse(localStorage.getItem('cookieArray'));
    cookieArray = temp;
} else {
    cookieArray = [pike, seatac, center, capitol, alki];
    localStorage.setItem('cookieArray', JSON.stringify(cookieArray));
}

// Get some random digits
for(let i in cookieArray) {
    // console.log(i);
    cookieData(cookieArray[i]);
}

// Header/Footer stuff
function header() {
    render(times, 'head', 'header');
}

function footer() {
    render(addUp(), 'body', 'body-total');
}

function addUp() {
    // Reset totals
    let totals = ['Total'];
    for(let i = 1; i <= 16; i++) {
        // Explicitly give value before accumulating
        totals[i] = 0;
        for(let j in cookieArray) {
            totals[i] += cookieArray[j].cookies[i];
        }
    }
    return totals;
}

function randomize() {
    clear();
    localStorage.clear();
    localStorage.setItem('cookieArray', JSON.stringify(cookieArray));
    for(let i in cookieArray) {
        cookieData(cookieArray[i]);
    }
    update();
}

// Call some functions
header();
update();