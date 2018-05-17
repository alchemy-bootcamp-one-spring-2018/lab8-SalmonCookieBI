'use strict';
/* globals */
/* exported Stores arrStores */


class Store {

    constructor(location, min, max, avg) {
        this.location = location;
        this.min = min;
        this.max = max;
        this.avg = avg;

        this.random = function() {
            var j = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
            return Math.ceil(j * this.avg);
        };
    }
}

let store1 = new Store('PDX Airport', 23, 65, 6.3);
let store2 = new Store('Pioneer Square', 3, 24, 1.2);
let store3 = new Store('Powell\'s', 11, 38, 3.7);
let store4 = new Store('St. John\'s', 20, 38, 2.3);
let store5 = new Store('Waterfront', 2, 16, 4.6);

var arrStores = [store1, store2, store3, store4, store5];