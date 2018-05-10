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