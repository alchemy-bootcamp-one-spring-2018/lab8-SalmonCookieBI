'use strict';

function render(array, tabId, rowId) {
    let tab = document.getElementById(tabId);
    while(tab.firstChild) {
        tab.removeChild(tab.firstChild);
    }
    let row = document.createElement('tr');
    row.id = rowId;
    // let temp = document.createDocumentFragment();
    for(let i = 0; i < array.length; i++) {
        // if(i === array.length) {
        //     // console.log('row', row);
        //     row.appendChild(temp);
        // }
        let data = document.createElement('td');
        data.textContent = array[i];
        row.appendChild(data);
        // console.log('docu frag', temp, 'data', data);
    }
    setTimeout(() => {
        tab.appendChild(row);
    }, 0);
}