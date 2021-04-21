const USER = 'USER';
const LOGGEDIN = 'LOGGED_IN';



export function createUser(username, password) {
    const user = {
        username,
        password,
        habits: []
    };
    updatedUser(user);
}

export function getUser() {
    const stringUser = localStorage.getItem(USER);
    const user = JSON.parse(stringUser);
    return user;
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
    localStorage.setItem(LOGGED_IN, username);

}

export function logout() {
    localStorage.setItem(LOGGED_IN, '');
}

export function loginAndRedirect(username) {
    login(username);
    window.location = './user-dashboard/index.html';
}

export function addHabit(habit) {
    const newHabit = {
        habit: habit,
        completed: false,
    };

    const user = getUser();
    user.habit.push(newHabit);

    updateUser(user);
}

export function completehabit(message) {
    const user = getuser();

    const matchingHabit = user.habit.find((habit) => message === habit.habit);

    matchingHabit.completed = true;

    updateUser(user);
}


