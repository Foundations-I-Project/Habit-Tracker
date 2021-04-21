import { addHabit } from '../local-storage/localStorageUtils.js';
import { renderLi, renderHabit } from '../local-storage/renderUtils.js';

const habitForm = document.querySelector('form');
habitForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(habitForm);
    const habit = habitData.get('habit');
    addHabbit(habit);

    renderLi(habit);
    renderHabit();

    habitForm.reset();

});

renderHabit();
addHabit();