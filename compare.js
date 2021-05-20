import { getAccomplishments, getAttempts } from './local-storage/localStorageUtils.js';

export function compare() {
    let accomplishments = getAccomplishments();
    let attempts = getAttempts();
    // seems like these are arrays, right? You can't do === on arrays--you might want to compare their lengths
    if (accomplishments.length === attempts.length) {
        return 'Good job!';
    } 
    
    return (accomplishments.length < attempts.length)
        ? 'you kinda low key suck' 
        : 'nerd alert';
    
}