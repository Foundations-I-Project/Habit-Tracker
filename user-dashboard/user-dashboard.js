import { addHabit } from '..local-storage.utils/local';
import { renderHabit, renderLi } from '../local-storage/local-storage.utils';

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