
import { getUser } from '../local-storage/localStorageUtils.js';
// import { pokeData } from '../pokemon.js';



// const button = document.getElementById('pokemonHome');

const table = document.querySelector('table');


var ctx = document.getElementById('myChart').getContext('2d');

const names = [];
const captured = [];

const resultsSecondNature = getUser();


for (let activity of resultsSecondNature.habits) {
    names.push(activity.habit);
    captured.push(activity.completed);
}



var myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: 'Habits',
            data: captured,
            backgroundColor: 'pink',
            borderColor: 'red',
            borderWidth: 3
        },
            // {
            //     label: 'Pokemon Encountered',
            //     data: encountered,
            //     backgroundColor: 'lightblue',
            //     borderColor: 'steelblue',
            //     borderWidth: 3
            // }
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

export function renderTable() {
    const table = document.querySelector('tbody');
    const secondNature = getUser();

    for (let i = 0; i < secondNature.length; i++) {
        const result = secondNature[i];
        const tr = renderLineItems(result);
        table.append(tr);

    }
}
renderTable();

export function renderLineItems(resultsSecondNature) {
    const tr = document.createElement('tr');
    const tdHabit = document.createElement('td');
    const tdCompleted = document.createElement('td');
    const tdGoal = document.createElement('td');

    tdHabit.textContent = resultsSecondNature.id;
    tdCompleted.textContent = resultsSecondNature.captured;
    tdGoal.textContent = resultsSecondNature.encountered;
    console.log(resultsSecondNature.id);

    tr.append(tdHabit, tdCompleted, tdGoal);

    return tr;
}

table.append();

// button.addEventListener('click', () => {

//     alert('Yay, let\'s go again!');



//     localStorage.clear();

//     window.location.href = '../index.html';

// });