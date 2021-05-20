
import { getUser } from '../local-storage/localStorageUtils.js';

const table = document.querySelector('table');


var ctx = document.getElementById('myChart').getContext('2d');

const names = userData.habits.map(h => h.habit);
const completed = userData.habits.map(h => h.completed);
const goal = userData.habits.map(h => h.goal);

const userData = getUser();

var myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: 'Completed',
            data: completed,
            backgroundColor: ' rgb(238, 140, 209)',
            borderColor: ' rgb(225, 15, 162)',
            borderWidth: 3
        },
        {
            label: 'Goal',
            data: goal,
            backgroundColor: ' rgb(135, 189, 189)',
            borderColor: 'teal',
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

table.append(); // doesn't seem like this is doing anything?