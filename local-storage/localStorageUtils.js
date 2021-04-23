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
    if (receivedAttempts) {
        return receivedAttempts;
    } else {
        return [];
    }
}

export function setAccomplishments(receivedAccomplishments) {
    const storedAccomplishments = JSON.stringify(receivedAccomplishments);
    localStorage.setItem(ACCOMPLISHED, storedAccomplishments);
}

export function getAccomplishments() {
    const storedAccomplishments = localStorage.getItem(ACCOMPLISHED);
    const receivedAccomplishments = JSON.parse(storedAccomplishments);
    if (receivedAccomplishments) {
        return receivedAccomplishments;
    } else {
        return [];
    }
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

    if (!userInLocalStorage) return false;

    return username === userInLocalStorage.username;
}

export function usernameAndPasswordMatch(username, password) {
    const userInLocalStorage = getUser();

    if (!userExists(username) || userInLocalStorage.password !== password)
        return false;
    return true;
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

export function addHabit(habit) {
    const newHabit = {
        habit: habit,
        completed: 0,
    };

    const user = getUser();
    // console.log(user)
    user.habits.push(newHabit);

    updateUser(user);
}

export function completeHabit(message) {
    console.log(message);
    const user = getUser();
    console.log(user.habits);
    const matchingHabit = user.habits.find((habit) => message === habit);
    console.log(matchingHabit);
    matchingHabit.completed++;

    updateUser(user);
}


