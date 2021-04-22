import { getUser, completeHabit } from './localStorageUtils.js';

const yahNahBrahBrah = ['Yah Brah', 'Nah Brah'];
yahNahBrahBrah.forEach((yahNahValue, i) => {

})

export function renderLi(habit) {
    const li = document.createElement('li');
    li.textContent = habit;

    const labelValueYah = document.createElement('label');
    const inputValueYah = document.createElement('input');
    inputValueYah.textContent = 'Yah';
    inputValueYah.type = "radio";
    inputValueYah.name = 'yahNahValue';
    inputValueYah.yahNahValue = 'Yah Brah';
    li.appendChild(labelValueYah);
    li.appendChild(inputValueYah);

    const labelValueNah = document.createElement('label');
    const inputValueNah = document.createElement('input');
    inputValueNah.type = "radio";
    inputValueNah.name = 'yahNahValue';
    inputValueNah.yahNahValue = 'Nah Brah';
    li.appendChild(labelValueNah);
    li.appendChild(inputValueNah);

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
    user.habits.forEach(habit => {
        const li = renderLi(habit.habit);



        ul.append(li);
    });

}
