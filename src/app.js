import './scss/app.scss';

const app = document.getElementById('app');
const p = document.createElement('p');

app.innerHTML = '<h1>Leaderboard</h1>';
p.textContent = 'Leaderboard list app using webpack and ES6 features';
app.appendChild(p);
