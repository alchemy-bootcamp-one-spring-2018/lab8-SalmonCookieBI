'use strict';

class Cookie {

    constructor(location, min, max, avg) {
        this.location = location;
        this.min = min;
        this.max = max;
        this.avg = avg;
    }
}

function cookieData(object) {
    if(localStorage['cookies.' + object.location]){
        // Retrieve the object from storage
        var cookies = localStorage.getItem('cookies.' + object.location);
        object.cookies = JSON.parse(cookies);
    } else {
        object.people = [];
        for(let i = 0; i < 15; i++) {
            let tempAvg = parseInt(Math.random() * (parseInt(object.max) - parseInt(object.min)) + parseInt(object.min));
            object.people.push(tempAvg);
        }
        object.cookies = [object.location];
        for(let i = 0; i < object.people.length; i++) {
            object.cookies.push(parseInt(object.people[i] * object.avg));
        }
        object.cookies.push(parseInt(object.people.reduce((a, b) => a + b) * object.avg));
        // Put the object into storage
        localStorage.setItem('cookies.' + object.location, JSON.stringify(object.cookies));
    }
}

function renderMe(object) {
    render(object.cookies, 'body', 'body-data');
}