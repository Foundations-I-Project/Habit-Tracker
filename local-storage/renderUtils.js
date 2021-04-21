import { getUser, completeHabit } from './localStorageUtils.js';


export function renderLi(habit) {
    const li = document.createElement('li');
    li.textContent = habit.habit;

    li.addEventListener('click', () => {
        completeHabit(habit.habit);

        renderHabit();
    });

    return li;

}

export function renderHabit() {
    const user = getUser();

    const ul = document.getElementById('HabitList');
    ul.textContent = '';
    user.habit.forEach(habit => {
        const li = renderLi(habit);


        ul.append(li);
    });

}
