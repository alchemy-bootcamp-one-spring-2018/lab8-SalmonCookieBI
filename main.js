'use strict';

const signIn = document.getElementById('sign-in');
signIn.addEventListener('submit', checkUserPassword);

const loginKey = {
    username: 'admin',
    password: 'password'
}

function checkUserPassword(event) {
    event.preventDefault();

    let username = event.target.username.value;
    let password = event.target.password.value;
    
    let payload = {
        username: username,
        password: password
    }

    if (payload.username === loginKey.username && payload.password === loginKey.password) {
        window.open('sales.html');
    }
    else {
        console.log('login error');
    }
}