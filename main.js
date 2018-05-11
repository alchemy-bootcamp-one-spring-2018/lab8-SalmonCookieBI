'use strict';

const signIn = document.getElementById('sign-in');
signIn.addEventListener('submit', checkUserPassword);

function checkUserPassword(event) {
    event.preventDevault();

    console.log(event);
}