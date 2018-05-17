/* exported StoreData, airport, pioneer, powells, stjohns, waterfront */

class StoreData {
    constructor(storeLocation, min, max, avg) {
        this.storeLocation = storeLocation;
        this.min = min;
        this.max = max;
        this.avg = avg;
    }
}

let airport = new StoreData('PDX Airport', 23, 65, 6.3);
let pioneer = new StoreData('Pioneer Square', 3, 24, 1.2);
let powells = new StoreData('Powell\'s', 11, 38, 3.7);
let stjohns = new StoreData('St. John\'s', 20, 38, 2.3);
let waterfront = new StoreData('Waterfront', 2, 16, 4.6);