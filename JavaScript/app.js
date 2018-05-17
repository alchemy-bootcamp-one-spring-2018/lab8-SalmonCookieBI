/* globals  totals addTotals locationsArray timesArray */
'use strict';

function displayHeader() {
    var thead = document.getElementById('thead');
    var child = document.createElement('tr');
    var locationTitle = document.createElement('td');
    thead.appendChild(child);
    child.appendChild(locationTitle);
    locationTitle.textContent = 'Locations';

    for(let j = 0; j < timesArray.length; j++){
        var grandChild = document.createElement('td');
        child.appendChild(grandChild);
        grandChild.textContent = timesArray[j];
    }
}

function displayBody() {
    var tbody = document.getElementById('tbody');
    tbody.textContent = '';
    for(let i = 0; i < locationsArray.length; i++){
        var child = document.createElement('tr');
        var local = document.createElement('td');
        tbody.appendChild(child);
        child.appendChild(local);
        local.textContent = locationsArray[i].locationName;
        for(let j = 0; j < timesArray.length; j++){
            var grandChild = document.createElement('td');
            child.appendChild(grandChild);
            grandChild.textContent = locationsArray[i].cookies[j];
        }
    }
}

function displayFooter() {
    var tfoot = document.getElementById('tfoot');
    var parent = document.createElement('tr');
    parent.id = 'footRow';
    var label = document.createElement('td');
    tfoot.appendChild(parent);
    parent.appendChild(label);
    label.textContent = 'Total Cookies:';
    for(let i = 0; i < timesArray.length; i++) {
        var child = document.createElement('td');
        parent.appendChild(child);
        addTotals();
        child.textContent = totals[i];
    }
}



displayHeader();
displayBody();
displayFooter();