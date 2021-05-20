import { getUser, updateUser } from './localStorageUtils.js';

export function renderLi(habitText) {
    const li = document.createElement('li');
    li.textContent = habitText;
    const button = document.createElement('button');
    button.textContent = 'Matts girly flower';

    button.value = habitText;
    button.type = 'button';
    console.log(habitText);
    button.addEventListener('click', () => {
        console.log(button.value);

        const user = getUser();
        console.log(user.habits);
        // nice use of array methods here! It might have been nice to make the naming more distinc here, for readability
        const matchingHabit = user.habits.find((userHabitObject) => habitText === userHabitObject.habit);
        console.log(matchingHabit);
        matchingHabit.completed++;

        updateUser(user);
    });
    li.append(button);

    return li;

}

export function renderHabit() {
    const user = getUser();

    const ul = document.getElementById('HabitList');
    ul.textContent = '';
    user.habits.forEach(userHabitObject => {
        const li = renderLi(userHabitObject.habit);

        ul.append(li);
    });

}

