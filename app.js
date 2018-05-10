
const hours = ['6:00 am', '7:00 am', '8:00 am'];

function getRandomCustomer(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log('this is working', getRandomCustomer(10, 30));

var attachTdElements = document.getElementById('test-row');

function calculate(){
    for(var i = 0; i < cookieShops.length; i++){
        //create tr
        // row
        cookieSales = Math.floor(getRandomCustomer(cookieShops[i].minCustomer, cookieShops[i].maxCustomer) * cookieShops[i].avgPerCustomer);
        console.log('cookie2', cookieSales);
        for(var j = 2; j < hours.length; j++){
            console.log(hours);
            var newTdElement = document.createElement('td');
            newTdElement.textContent = cookieSales;
            attachTdElements.appendChild(newTdElement);
        // console.log(getRandomCustomer(cookieShops[j].minCustomer, cookieShops[j].maxCustomer));
        // console.log('cookieSales', cookieSales);   
        //loops through the hours to know which cell to put in values 
        
        }
    }
}

calculate();

