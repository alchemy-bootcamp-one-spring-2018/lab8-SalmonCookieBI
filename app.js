
const hours = ['6:00 am', '6:30 am', '7:00 am']

function getRandomCustomer(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


console.log('this is working', getRandomCustomer(10, 30));

console.log(getRandomCustomer(cookieShops[0].min, cookieShops[0].max));

function calculate(){
    for(var i = 0; i < cookieShops.length; i++){
        //create tr
        for(var j = 0; j < hours.length; j++){
            
        }
    }
}

calculate();

