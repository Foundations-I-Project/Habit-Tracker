import { addHabit } from '../local-storage/localStorageUtils.js';
import { renderLi, renderHabit } from '../local-storage/renderUtils.js';

const habitForm = document.querySelector('form');
habitForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(habitForm);
    const habit = formData.get('new-habit');
    addHabit(habit);

    renderLi(habit.habit);


    habitForm.reset();
    renderHabit();
});

renderHabit();

