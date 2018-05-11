/* exported cookieShops */
'use strict';

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
        location: 'Powell\'s',
        minCustomer: 11,
        maxCustomer: 38,
        avgPerCustomer: 3.7,
    },
    {
        location: 'St. John\'s',
        minCustomer: 20,
        maxCustomer: 38,
        avgPerCustomer: 2.3,
    },
    {
        location: 'Waterfront',
        minCustomer: 2,
        maxCustomer: 16,
        avgPerCustomer: 4.6,
    },
];

/*  
class CookieShop {
    constructor(location, minCustomer, maxCustomer, avgPerCustomer) {
        this.location = location;
        this.minCustomer = minCustomer;
        this.maxCustomer = maxCustomer;
        this.avgPerCustomer = avgPerCustomer;
    }

    //connect form data
    //add method to create new cookie shop based on user input from form
    //method to create new array for calculate loop to push row values onto
}

let pdxAirport = new CookieShop('PDX Airport', 23, 65, 6.3);
let pioneerSquare = new CookieShop('Pioneer Square', 3, 24, 1.2);
let powells = new CookieShop('Powell\'s', 11, 38, 3.7);
let stJohns = new CookieShop('St. John\'s', 20, 38, 2.3);
let waterfront = new CookieShop('Waterfront', 2, 16, 4.6);

let cookieShops = [pdxAirport, pioneerSquare, powells, stJohns, waterfront];

*/