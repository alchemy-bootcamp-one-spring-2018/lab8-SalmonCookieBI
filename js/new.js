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
    e.preventDefault();
    let location = e.target.location.value;
    let min = e.target.min.value;
    let max = e.target.max.value;
    let avg = e.target.avg.value;
    let temp = new Cookie(location, min, max, avg);
    temp.cookieData();
    cookieArray.push(temp);
    localStorage.setItem('cookieArray', JSON.stringify(cookieArray));
    // console.log('cookieArray', cookieArray);
    clear();
    update();
}