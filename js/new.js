'use strict';

function addRow() {
    let newArray = [];
    for(let i = 0; i < inputsToAdd.length - 1; i++) {
        newArray.push(document.getElementById('txt-' + i).value);
    }
    let tempCookie = new Cookie(newArray[0], newArray[1], newArray[2], newArray[3], newArray[4]);
    cookieArray.push(tempCookie);
    update();
}