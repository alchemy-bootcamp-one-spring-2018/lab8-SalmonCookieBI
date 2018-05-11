'use strict';

function render(array, tabId, rowId) {
    let tab = document.getElementById(tabId);
    let row = document.createElement('tr');
    row.id = rowId;
    for(let i = 0; i < array.length; i++) {
        let data = document.createElement('td');
        data.textContent = array[i];
        row.appendChild(data);
    }
    tab.appendChild(row);
}

// Clear data in the table body
function clear() {
    let tab = document.getElementById('body');
    while(tab.rows.length > 0) {
        tab.deleteRow(0);
    }
}