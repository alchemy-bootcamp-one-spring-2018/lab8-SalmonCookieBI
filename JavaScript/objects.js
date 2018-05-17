/* exported addTotals clearForm randomNum timesArray locationsArray calculateRandom  */
/* globals displayFooter  displayBody*/

class Salmon {
    constructor(locationName, min, max, avg) {
        this.locationName = locationName,
        this.min = min,
        this.max = max,
        this.avg = avg,
        this.cookies = [];
    }
    cookieAvg(i) {
        var min = this.min;
        var max = this.max;
        var randomNum = calculateRandom(min, max);
        this.cookies[i] = randomNum;
    }
}

let airport = new Salmon('Airport', 20, 100, 2);
let pioneerSquare = new Salmon('Pioneer Square', 4, 80, 3);
let powells = new Salmon('Powell\'s', 8, 98, 1);
let stJohns = new Salmon('St. John', 3, 5, 1);
let division = new Salmon('Division', 8, 74, 2);
let locationsArray = [airport, pioneerSquare, powells, stJohns, division];
let timesArray = ['5a.m.', '6a.m.', '7a.m.', '8a.m.', '9a.m.', '10a.m.', '11a.m', '12p.m.', '1p.m.', '2p.m.', '3p.m'];

function calculateRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

let totals = [];
function addTotals() {
    for(let i = 0; i < timesArray.length; i++){
        totals[i] = 0;
        for(let j = 0; j < locationsArray.length; j++){
            totals[i] += locationsArray[j].cookies[i] * locationsArray[j].avg;
        }
    }
}

for(let i = 0; i < locationsArray.length; i++){
    for(let j = 0; j < timesArray.length; j++){
        locationsArray[i].cookieAvg(j);
    }
}

function removeOldTotals(){
    var node1 = document.getElementById('footRow');
    node1.parentNode.removeChild(node1);
}

function submitLocationData(event) {
    event.preventDefault();
    var newLocation = event.target.newLocation.value;
    var min = parseInt(event.target.min.value);
    var max = parseInt(event.target.max.value);
    var average = parseInt(event.target.average.value);
    let newObject = new Salmon(newLocation, min, max, average);
    for(let i = 0; i < timesArray.length; i++){
        newObject.cookieAvg(i);
    }

    console.log(newObject);
    
    function clearForm() {
        document.getElementById('locationForm').reset();
    }

    locationsArray.push(newObject);

    removeOldTotals();
    clearForm();
    displayBody();
    addTotals();
    displayFooter();
}

const storeEntry = document.getElementById('locationForm');
storeEntry.addEventListener('submit', submitLocationData);

