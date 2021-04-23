import { getAccomplishments, getAttempts } from "./local-storage/localStorageUtils";

export function compare() {
    let accomplishments = getAccomplishments();
    let attempts = getAttempts();
    if (accomplishments === attempts) {
        return 'Good job!';
    } if (accomplishments < attempts) {
        return 'you kinda low key suck';
    }
    if (accomplishments > attempts) {
        return 'nerd alert';
    }
}