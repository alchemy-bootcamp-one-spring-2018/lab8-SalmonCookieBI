/* exported shops */
'use strict';

class BizData {
    constructor(min, max, avg) {
        this.min = min;
        this.max = max;
        this.avg = avg;
        this.customers = [];
        this.cookies = [];
    }
}

const pdxAirport = new BizData(23, 65, 6.3);
const pioneerSquare = new BizData(3, 24, 1.2);
const powells = new BizData(11, 38, 3.7);
const stJohns = new BizData(20, 38, 2.3);
const waterfront = new BizData(2, 16, 4.6);

const shops = [
    pdxAirport,
    pioneerSquare,
    powells,
    stJohns,
    waterfront
];
