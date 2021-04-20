import { } from "./local-storage.utils.js";

const errorSpan = document.querySelector('#error-spam');
const button = document.querySelector('#sign-up-button');

if (isLoggedIn()) {
    window.location = './';

}

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const username = formData.get('username');
    const password = formData.get('password');

    if doesUserExist(username)) {
        if (usernamePasswordMatch(username, password)) {
            "Password": Unknown word.
                setLoggedIn(username);
            window.location = './';
            //if they dont match
        } else {
            errorSpan.textContent = 'Wrong username or password! Thou shalt not log in';

        }// this is to be able to merge this crap

    }
});