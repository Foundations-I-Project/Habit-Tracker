// nice constants!
const USER = 'USER';
const LOGGEDIN = 'LOGGED_IN';
const ATTEMPTS = 'ATTEMPTS';
const ACCOMPLISHED = 'ACCOMPLISHED';

export function setAttempts(receivedAttempts) {
    const storedAttempts = JSON.stringify(receivedAttempts);
    localStorage.setItem(ATTEMPTS, storedAttempts);
}

export function getAttempts() {
    const storedAttempts = localStorage.getItem(ATTEMPTS);
    const receivedAttempts = JSON.parse(storedAttempts);

    return receivedAttempts || [];
}

export function setAccomplishments(receivedAccomplishments) {
    const storedAccomplishments = JSON.stringify(receivedAccomplishments);
    localStorage.setItem(ACCOMPLISHED, storedAccomplishments);
}

export function getAccomplishments() {
    const storedAccomplishments = localStorage.getItem(ACCOMPLISHED);
    const receivedAccomplishments = JSON.parse(storedAccomplishments);
    return receivedAccomplishments || [];
}

export function createUser(username, password) {
    const user = {
        username,
        password,
        habits: []
    };
    updateUser(user);
}

export function getUser() {
    const stringyUser = localStorage.getItem(USER);
    const parsedUser = JSON.parse(stringyUser);
    return parsedUser;
}

export function updateUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringyUser);
}

export function userExists(username) {
    const userInLocalStorage = getUser();

    return userInLocalStorage 
        ? username === userInLocalStorage.username 
        : false;
}

export function usernameAndPasswordMatch(username, password) {
    const userInLocalStorage = getUser();

    // seems like this should do the trick
    return (userExists(username) && userInLocalStorage.password === password);
}

export function login(username) {
    localStorage.setItem(LOGGEDIN, username);

}

export function logout() {
    localStorage.setItem(LOGGEDIN, '');
}

export function loginAndRedirect(username) {
    login(username);
    window.location = './user-dashboard/index.html';
}

export function addHabit(habit, goal) {
    const newHabit = {
        habit, // if the key and value have the same variable name, you can just do this
        completed: 0,
        goal: goal,
    };

    const user = getUser();
    // console.log(user)
    user.habits.push(newHabit);

    updateUser(user);
}

export function completeHabit(message) {
    const user = getUser();
    const matchingHabit = user.habits.find((habit) => message === habit);
    matchingHabit.captured++;

    updateUser(user);
}


