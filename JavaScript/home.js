'use strict';

function submitLogin(e) {
    e.preventDefault();

    console.log('submitLogin -e', e);
    console.log('target', e.target.username.value);
    console.log('target', e.target.password.value);
    
    let username = e.target.username.value;
    let password = e.target.password.value;

    // compose payload (with ENCRIPTED password)
    // send to API: POST /login
    // wait for response // if response is OK ==> navigate to Inner Secured Home Page
    //  else ==> msg "invalid login"

    let payload = {
        'username': username,
        'password': password

    };
    console.log('submitLogin - payload', payload);
}

const userEntry = document.getElementById('login');
userEntry.addEventListener('submit', submitLogin);