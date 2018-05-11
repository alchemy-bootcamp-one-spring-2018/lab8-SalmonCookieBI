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

function addNew(e) {
    console.log(e);
    
    e.preventDefault();
    console.log(e);
    let location = e.target.location.value;
    let min = e.target.min.value;
    let max = e.target.max.value;
    let avg = e.target.avg.value;
    let temp = new Cookie(location, min, max, avg);
    temp.cookieData();
    cookieArray.push(temp);
    clear();
    update();
    console.log('adding new', location, min, max, avg);
}