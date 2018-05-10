class Cookie {

    constructor(location, min, max, avg) {
        this.location = location;
        this.min = min;
        this.max = max;
        this.avg = avg;
    }

    cookieData() {
        this.cookies = [];
        this.cookies.push(this.location);
        for(let i = 0; i < 15; i++) {
            let tempAvg = Math.ceil(((Math.random() * parseInt(this.max) - parseInt(this.min)) + parseInt(this.min)) * this.avg);
            console.log('max', this.max, 'min', this.min, 'avg', this.avg, 'temp', tempAvg);
            this.cookies.push(tempAvg);
        }
        
        // console.log('cookies are', this.cookies);
    }

    renderMe() {
        // console.log('should render an object', tempArray);
        render(this.cookies, 'body', 'body-data');
    }
}