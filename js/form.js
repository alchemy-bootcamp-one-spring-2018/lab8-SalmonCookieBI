'use strict';
/* globals Store arrStores salesData keepLocationColumn createHeader createFooter sumColumnTotals updateFooterTotals */
/* exported addLocation */

function addLocation(event) {

    event.preventDefault();

    var formLocation = event.target.location.value;
    var formMin = event.target.min.value;
    var formMax = event.target.max.value;
    var formAvg = event.target.avg.value;

    var newStore = new Store(formLocation, formMin, formMax, formAvg);
    arrStores.push(newStore);
    console.log(arrStores);

}


var createForm = document.getElementById('form');
createForm.addEventListener('submit', function() {
    event.preventDefault();

    (function() {
        var tbody = document.getElementById('cookie-table');
        while(tbody.rows.length > 0) {
            tbody.deleteRow(0);
        }
    })();
    createHeader(event);
    salesData(event);
    createFooter(event);
    addLocation(event);
    keepLocationColumn();
    sumColumnTotals();
    updateFooterTotals();
});