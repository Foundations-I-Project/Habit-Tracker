import { addHabit } from '../local-storage/localStorageUtils.js';
import { renderLi, renderHabit } from '../local-storage/renderUtils.js';

const habitForm = document.querySelector('form');
// const button = document.getElementById('pokemonHome');
habitForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(habitForm);
    const habit = formData.get('new-habit');
    const goal = Number(formData.get('new-goal'));
    console.log(habit, goal);
    addHabit(habit, goal);
    // alert(habit, goal, 'whatever we want to say');

    renderLi(habit.habit, goal);


    habitForm.reset();
    renderHabit();
});

renderHabit();


