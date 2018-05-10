

timesArray ['5a.m.', '6a.m.', '7a.m.', '8a.m.', '9a.m.', '10a.m.', '11a.m', '12p.m.', '1p.m.', '2p.m.', '3p.m']


class Salmon {
    constructor(locations, min, max, avg) {
        this.locations = locations,
        this.min = min,
        this.max = max,
        this.max = avg;
    }
}

function calculateRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
