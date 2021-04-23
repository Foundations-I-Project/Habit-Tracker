
import { getUser } from '../local-storage/localStorageUtils.js';
// import { pokeData } from '../pokemon.js';



// const button = document.getElementById('pokemonHome');

const table = document.querySelector('table');


var ctx = document.getElementById('myChart').getContext('2d');

const names = [];
const completed = [];
const goal = [];

const userData = getUser();


for (let habit of userData.habits) {

    names.push(habit.habit);
    completed.push(habit.completed);
    goal.push(habit.goal);
}



var myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: 'Habits',
            data: completed,
            backgroundColor: 'pink',
            borderColor: 'hot pink',
            borderWidth: 3
        },
        {
            label: 'Completed',
            data: goal,
            backgroundColor: 'lightblue',
            borderColor: 'steelblue',
            borderWidth: 3
        }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

function renderTable() {
    const table = document.querySelector('tbody');
    const userData = getUser();
    const habits = userData.habits;
    for (let i = 0; i < habits.length; i++) {
        const result = habits[i];
        const tr = renderLineItems(result);
        table.append(tr);

    }
}
renderTable();
function renderLineItems(userData) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdCompleted = document.createElement('td');
    const tdGoal = document.createElement('td');

    tdName.textContent = userData.habit;
    tdCompleted.textContent = userData.completed;
    tdGoal.textContent = userData.goal;


    tr.append(tdName, tdCompleted, tdGoal);

    return tr;
}

table.append();

// button.addEventListener('click', () => {

//     alert('Yay, let\'s go again!');



//     localStorage.clear();

//     window.location.href = '../index.html';

// });