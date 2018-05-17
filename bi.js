/* exported shops */
'use strict';

class BizData {
    constructor(name, min, max, avg) {
        this.name = name;
        this.min = min;
        this.max = max;
        this.avg = avg;
        this.customers = [];
        this.cookies = [];
    }
}

const pdxAirport = new BizData('PDX Airport', 23, 65, 6.3);
const pioneerSquare = new BizData('Pioneer Square', 3, 24, 1.2);
const powells = new BizData('Powell\'s', 11, 38, 3.7);
const stJohns = new BizData('St. John\'s', 20, 38, 2.3);
const waterfront = new BizData('Waterfront', 2, 16, 4.6);

const shops = [
    pdxAirport,
    pioneerSquare,
    powells,
    stJohns,
    waterfront
];
