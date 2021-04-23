import { getUser, createUser } from '../local-storage/localStorageUtils.js'
// import { updateUser } from '';
// import { userExists } from '';
// import { usernameAndPasswordMatch } from '';
// import { addHabit } from '';
// import { completeHabit } from '';

const test = QUnit.test;
const USER = 'USER';
const LOGGEDIN = 'LOGGED_IN';
const user = {
    "habits": [],
    "username": {
        "habits": [],
        "username": [
            {
                "habits": [],
                "password": "whatever",
                "username": "hey im here"
            }
        ]
    }
};
//get USER
test('are we getting the user from local', (expect) => {
    createUser(user);
    const localStorageUser = JSON.parse(localStorage.getItem(USER));
    expect.deepEqual(user, localStorageUser);

});

