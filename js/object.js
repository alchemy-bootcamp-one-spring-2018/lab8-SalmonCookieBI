'use strict';

class Cookie {

    constructor(location, min, max, avg) {
        this.location = location;
        this.min = min;
        this.max = max;
        this.avg = avg;
    }

    cookieData() {
        if(localStorage['cookies.' + this.location]){
            // Retrieve the object from storage
            var cookies = localStorage.getItem('cookies.' + this.location);
            this.cookies = JSON.parse(cookies);
        } else {
            this.people = [];
            for(let i = 0; i < 15; i++) {
                let tempAvg = parseInt(Math.random() * (parseInt(this.max) - parseInt(this.min)) + parseInt(this.min));
                this.people.push(tempAvg);
            }
            this.cookies = [this.location];
            for(let i = 0; i < this.people.length; i++) {
                this.cookies.push(parseInt(this.people[i] * this.avg));
            }
            this.cookies.push(parseInt(this.people.reduce((a, b) => a + b) * this.avg));
            // Put the object into storage
            localStorage.setItem('cookies.' + this.location, JSON.stringify(this.cookies));
        }
    }

    renderMe() {
        render(this.cookies, 'body', 'body-data');
    }

}