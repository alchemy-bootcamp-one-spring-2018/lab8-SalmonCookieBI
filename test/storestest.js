'use strict';
/* exported Stores */

class Stores {

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

    // Locates tbody, declares cell[], creates one row, loops creation of cell data when called in app.js
    cookiesToSell() {
        var tbody = document.getElementsByTagName('tbody')[0];
        var cell = [];
        var row = tbody.insertRow(0);

        for(var i = 0; i < 15; i++) {
            cell[i] = row.insertCell(i);
        }

        for(var j = 0; j < 15; j++) {
            cell[j].textContent = this.random();
            cell[0].textContent = this.location;
        }
    }
}
