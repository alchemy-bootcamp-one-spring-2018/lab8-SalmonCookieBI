
const hours = ['6:00 am', '7:00 am', '8:00 am'];

function getRandomCustomer(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log('this is working', getRandomCustomer(10, 30));


function calculate(){
    for(var i = 0; i < cookieShops.length; i++){
        //create tr
        cookieSales = getRandomCustomer(cookieShops[i].minCustomer, cookieShops[i].maxCustomer) * cookieShops[i].avgPerCustomer;
        console.log('cookie2', cookieSales);
        for(var j = 0; j < hours.length; j++){
        // console.log(getRandomCustomer(cookieShops[j].minCustomer, cookieShops[j].maxCustomer));
        // console.log('cookieSales', cookieSales);    
        
        }
    }
}

calculate();

