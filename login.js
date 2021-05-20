import { 
    loginAndRedirect, 
    createUser, 
    userExists, 
} from './local-storage/localStorageUtils.js';

const errorSpan = document.querySelector('#error-span');

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const username = formData.get('username');
    const password = formData.get('password');

    if (userExists(username)) {
        if (usernamePasswordMatch(username, password)) { // not sure how this code could be working if this function is undefined?
            loginAndRedirect(username);
        } else {
            errorSpan.textContent = 'Wrong username or password! Thou shalt not log in';

        }

    } else {
        createUser(username, password);
        loginAndRedirect(username);
    }
});