import { getUser, createUser } from '../local-storage/local-storage.utils.js'
// import { updateUser } from '';
// import { userExists } from '';
// import { usernameAndPasswordMatch } from '';
// import { addHabit } from '';
// import { completeHabit } from '';

const test = QUnit.test;
const USER = 'USER';
const LOGGEDIN = 'LOGGED_IN';

//get USER
// test('are we getting the user from local', (USER) => {
//     const userInLocalStorage = {
//         user: "testUser",
//         password: "password",
//         habit: []
//     }; 
//     localStorage.setItem(USER, JSON.stringify(userInLocalStorage));
//     const actual = getUser();
// console.log(actual)
//     expect.deepEqual(actual, userInLocalStorage);
// });
//createUser

test('are we creating a user', (username, password) => {
    const newUserToLocalStorage = {
        user: 'newUser',
        password: 'somePassword',
        habit: []
    };
    localStorage.setItem(USER, JSON.stringify(newUserToLocalStorage));
    console.log(newUserToLocalStorage);
    
    const workingUser = createUser(username, password);

}
)

