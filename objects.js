/* exported randomNum timesArray locationsArray calculateRandom*/
class Salmon {
    constructor(locations, min, max, avg) {
        this.locations = locations,
        this.min = min,
        this.max = max,
        this.avg = avg;
    }
}
let timesArray = ['5a.m.', '6a.m.', '7a.m.', '8a.m.', '9a.m.', '10a.m.', '11a.m', '12p.m.', '1p.m.', '2p.m.', '3p.m'];

let airport = new Salmon('Airport', 20, 100, 60);
let pioneerSquare = new Salmon('Pioneer Square', 4, 80, 42);
let powells = new Salmon('Powell\'s', 8, 98, 53);
let stJohns = new Salmon('St. John', 3, 5, 4);
let division = new Salmon('Division', 8, 74, 41);

let locationsArray = [airport, pioneerSquare, powells, stJohns, division];

function calculateRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  
}
