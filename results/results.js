
import { getUser } from '../local-storage/localStorageUtils.js';
// import { pokeData } from '../pokemon.js';



// const button = document.getElementById('pokemonHome');

const table = document.querySelector('table');


var ctx = document.getElementById('myChart').getContext('2d');

const names = [];
const completed = [];
const goal = [];

const resultsPokedex = getUser();


for (let pokemon of resultsPokedex.habits) {

    names.push(pokemon.habit);
    completed.push(pokemon.completed);
    goal.push(pokemon.goal);
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

export function renderTable() {
    const table = document.querySelector('tbody');
    const pokedex = getUser();

    for (let i = 0; i < pokedex.length; i++) {
        const result = pokedex[i];
        const tr = renderLineItems(result);
        table.append(tr);

    }
}
renderTable();

export function renderLineItems(getUser) {
    const tr = document.createElement('tr');
    const tdPokemon = document.createElement('td');
    const tdCompleted = document.createElement('td');
    const tdGoal = document.createElement('td');

    tdPokemon.textContent = pokedex.id;
    tdCompleted.textContent = pokedex.completed;
    tdGoal.textContent = pokedex.goal;


    tr.append(tdPokemon, tdCompleted, tdGoal);

    return tr;
}

table.append();

// button.addEventListener('click', () => {

//     alert('Yay, let\'s go again!');



//     localStorage.clear();

//     window.location.href = '../index.html';

// });