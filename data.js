/* exported cookieShops */
'use strict';

//table is gathering the corrent info, need to attach to constructor:
function collectNewLocation(event) {
    event.preventDefault();
    
    var newLocation = event.target.newLocation.value;
    console.log('location: ', newLocation);
    
    var newMinCustomer = parseInt(event.target.newMinCustomer.value);
    console.log('new min customer: ', newMinCustomer);
    
    var newMaxCustomer = parseInt(event.target.newMaxCustomer.value);
    console.log('new max customer: ', newMaxCustomer);
    
    var newAvgCustomer = parseInt(event.target.newAvgCustomer.value);
    console.log('new avg cookies per customer: ', newAvgCustomer);
}

const submitLocation = document.getElementById('new-location-form');
submitLocation.addEventListener('submit', collectNewLocation);


const cookieShops = [

    {
        location: 'PDX Airport',
        minCustomer: 23,
        maxCustomer: 65,
        avgPerCustomer: 6.3,
    },
    {
        location: 'Pioneer Square',
        minCustomer: 3,
        maxCustomer: 24,
        avgPerCustomer: 1.2,
    },
    {
        location: 'Powells',
        minCustomer: 11,
        maxCustomer: 38,
        avgPerCustomer: 3.7,
    }
];