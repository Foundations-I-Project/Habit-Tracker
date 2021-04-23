import { getUser, completeHabit, updateUser } from './localStorageUtils.js';

const yahNahBrahBrah = ['Yah Brah', 'Nah Brah'];
yahNahBrahBrah.forEach((yahNahValue, i) => {

})

export function renderLi(habit) {
    const li = document.createElement('li');
    li.textContent = habit;
    const button = document.createElement('button');
    button.textContent = 'Matts girly flower'
    // li.append(button);
    // const labelValueYah = document.createElement('label');
    // const inputValueYah = document.createElement('input');
    // inputValueYah.textContent = 'Yah';
    // inputValueYah.type = "radio";
    // inputValueYah.name = 'yahNahValue';
    // inputValueYah.yahNahValue = 'Yah Brah';
    // li.appendChild(labelValueYah);
    // li.appendChild(inputValueYah);

    // const labelValueNah = document.createElement('label');
    // const inputValueNah = document.createElement('input');
    // inputValueNah.type = "radio";
    // inputValueNah.name = 'yahNahValue';
    // inputValueNah.yahNahValue = 'Nah Brah';
    // li.appendChild(labelValueNah);
    // li.appendChild(inputValueNah);
    button.value = habit;
    button.type = 'button'
    console.log(habit);
    button.addEventListener('click', () => {
        console.log(button.value);

        const user = getUser();
        console.log(user.habits);
        const matchingHabit = user.habits.find((_habit) => habit === _habit.habit);
        console.log(matchingHabit);
        matchingHabit.completed++;

        updateUser(user);
        // completeHabit(button.value);
    });
    li.append(button);
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
