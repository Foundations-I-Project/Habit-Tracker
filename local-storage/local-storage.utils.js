const USER = 'USER';
const logged_IN = 'LOGGED_IN';

export function createUser(username, password) {
    const user = {
        username,
        password,
        habits: []
    };
    updatedUser(user);
}