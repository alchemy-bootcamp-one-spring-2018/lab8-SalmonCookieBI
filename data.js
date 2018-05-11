/* exported cookieShops */
'use strict';
const submitLocation = document.getElementById('new-location-form');
submitLocation.addEventListener("click", submitNewLocation);

function submitNewLocation(e) {
        console.log('target', e.target.location.value);
}



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