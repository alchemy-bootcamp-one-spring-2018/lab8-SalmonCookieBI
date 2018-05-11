/* globals  calculateRandom locationsArray timesArray */

function displayHeader() {
    var thead = document.getElementById('thead');
    var child = document.createElement('tr');
    thead.appendChild(child);


    for(let j = 0; j < timesArray.length; j++){
        var grandChild = document.createElement('td');
        child.appendChild(grandChild);

        grandChild.textContent = timesArray[j];
    }
}
function displayBody() {
    var tbody = document.getElementById('tbody');
    for(let i = 0; i < locationsArray.length; i++){
        var child = document.createElement('tr');
        tbody.appendChild(child);
        
        for(let j = 0; j < timesArray.length; j++){
            var grandChild = document.createElement('td');
            child.appendChild(grandChild);
            
            grandChild.textContent = locationsArray[i].customer[j];
        }
    }

}

function customerAvg() {
    for(let h = 0; h < locationsArray.length; h++){
        
        for(let i = 0; i < timesArray.length; i++) {
            var min = locationsArray[h].min;
            var max = locationsArray[h].max;
            
            var randomNum = calculateRandom(min, max);
            locationsArray[h].customer.push(randomNum);
        }
    }
}
displayHeader();
customerAvg();
displayBody();