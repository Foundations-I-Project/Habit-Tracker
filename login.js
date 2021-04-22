<<<<<<< HEAD
import { createUser } from "./local-storage.js";
=======
import { loginAndRedirect, createUser, userExists } from "./local-storage/localStorageUtils.js";
>>>>>>> cb997a9aa06c9ce0826fed7957b9c4939294c08b

const errorSpan = document.querySelector('#error-span');
const button = document.querySelector('#log-in');

//if (loginAndRedirect()) {
//window.location = './';

//}

const form = document.querySelector('#form');
console.log(button, form);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const username = formData.get('username');
    const password = formData.get('password');

    if (userExists(username)) {
        if (usernamePasswordMatch(username, password)) {
            loginAndRedirect(username);
        } else {
            errorSpan.textContent = 'Wrong username or password! Thou shalt not log in';

        }

    } else {
        createUser(username, password);
        loginAndRedirect(username);
    }
});