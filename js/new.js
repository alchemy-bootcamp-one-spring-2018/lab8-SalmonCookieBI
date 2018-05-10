'use strict';

// let inputsToAdd = ['<input id="txt-0" type="text">', '<input id="txt-1" type="text">', '<input id="txt-2" type="number">', '<input id="txt-3" type="number">', '<input id="txt-4" type="number">', '<input type="submit" onclick="addRow()">']
// render(inputsToAdd, 'foot', 'footer');

function addRow() {
    // console.log('in the addRow');
    let newArray = [];
    for(let i = 0; i < inputsToAdd.length - 1; i++) {
        newArray.push(document.getElementById('txt-' + i).value);
    }
    let tempCookie = new Cookie(newArray[0], newArray[1], newArray[2], newArray[3], newArray[4]);
    // console.log(tempCookie);
    cookieArray.push(tempCookie);
    update();
}