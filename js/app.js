'use strict';
// Build Times

let times = ['Location']
for(let i = 6; i < 13; i++) {
    times.push(i + ':00 AM');
}
for(let i = 1; i < 9; i++) {
    times.push(i + ':00 PM');
}
console.log(times);


let totals = [];

// Instantiate cookie objects (Location, Min, Max, Avg)
let pike = new Cookie('1st and Pike', 23, 65, 6.7);
let seatac = new Cookie('SeaTac Airport', 3, 24, 1.2);
let center = new Cookie('Seattle Center', 11, 38, 3.7);
let capitol = new Cookie('Capitol Hill', 20, 38, 2.3);
let alki = new Cookie('Alki', 2, 16, 4.6);

let cookieArray = [pike, seatac, center, capitol, alki];

// Get some random digits
for(let i in cookieArray) {
    cookieArray[i].cookieData();
    // console.log('random cookies', cookieArray[i].cookies);
}

// Header/Footer stuff
function header() {
    render(times, 'head', 'header')
}

function footer() {
    addUp();
    // console.log(totals);
    render(totals, 'body', 'body-total');
}

// Call some functions
header();
update();

// let random = document.getElementById('randomize-btn');
document.getElementById('randomize-btn').addEventListener('click', randomize);
// // document.getElementById('randomize-btn').onclick('randomize');




function addUp() {
    // Reset totals
    totals = [];
    totals.push('Totals');
    for(let i = 1; i < 16; i++) {
        totals[i] = 0;
        for(let j in cookieArray) {
            // console.log('cookies', cookieArray[j].cookies[i], 'j', j, 'i', i);
            totals[i] += cookieArray[j].cookies[i];
        }
        // console.log('totals', totals);
    }
}


function randomize() {
    for(let i in cookieArray) {
        cookieArray[i].cookieData();
    }
    update();
}