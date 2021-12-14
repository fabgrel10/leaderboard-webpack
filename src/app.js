import './scss/app.scss';
import { addScoreToLocalStorage, renderScoreboard } from './helpers/helpers';

const form = document.getElementById('add-score-form');
const name = document.getElementById('name');
const score = document.getElementById('score');
const refreshScoreboard = document.getElementById('refresh-scoreboard');
let scores = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const newScore = {
    name: name.value,
    score: score.value,
  };

  scores.push(newScore);
  addScoreToLocalStorage(scores);
  form.reset();
  renderScoreboard(scores);
});

refreshScoreboard.addEventListener('click', () => {
  scores = localStorage.setItem('scores', []);
  renderScoreboard(scores);
});

window.addEventListener('load', () => {
  scores = JSON.parse(localStorage.getItem('scores')) || [];
  renderScoreboard(scores);
})
