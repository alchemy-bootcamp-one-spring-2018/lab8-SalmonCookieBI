'use strict';
class Cookie {

    constructor(location, min, max, avg) {
        this.location = location;
        this.min = min;
        this.max = max;
        this.avg = avg;
    }

    cookieData() {
        this.people = [this.location];
        for(let i = 0; i < 15; i++) {
            let tempAvg = Math.ceil(((Math.random() * (parseInt(this.max) - parseInt(this.min)) + parseInt(this.min))) * this.avg);
            console.log('max', this.max, 'min', this.min, 'avg', this.avg, 'temp', tempAvg);
            this.people.push(tempAvg);
        }
    }

    renderMe() {
        render(this.people, 'body', 'body-data');
    }

}