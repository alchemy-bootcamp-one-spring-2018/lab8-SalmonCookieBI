/* globals randomNum calculateRandom locationsArray timesArray */

function displayHeader() {
    var thead = document.getElementById('thead');

    for(let i = 0; i < timesArray.length; i++){
        var child = document.createElement('tr');
        thead.appendChild(child);

        for(let j = 0; j < timesArray.length; j++){
            var grandChild = document.createElement('td');
            child.appendChild(grandChild);
            grandChild.id = 'row' + j;
            displayTimes(j);
            
        }
        return child;
    }

}
function displayTimes(j) {
    var parent = document.getElementById('row' + j);
    parent.textContent = timesArray[j];

}
displayHeader();

function customerAvg() {
    let newArray = [];
    for(let i = 0; i < 12; i++) {
        var min = locationsArray[i].min;
        var max = locationsArray[i].max;

        let randomNum;
        calculateRandom(min, max);
        newArray.push(randomNum);

        // return newArray =
    }
}