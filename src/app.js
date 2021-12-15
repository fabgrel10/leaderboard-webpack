import './scss/app.scss';
import { addScoreToLocalStorage, renderScoreboard } from './helpers/helpers';
import { getScores, postScore } from './api/api';

const form = document.getElementById('add-score-form');
const name = document.getElementById('name-input');
const score = document.getElementById('score-input');
const refreshScoreboard = document.getElementById('refresh-scoreboard');
let scores = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const newScore = {
    user: name.value,
    score: score.value,
  };

  if (newScore.user && newScore.score) {
    postScore(newScore);
    scores.push(newScore);
    addScoreToLocalStorage(scores);
    renderScoreboard(scores);
  }
  form.reset();
});

refreshScoreboard.addEventListener('click', getScores);

window.addEventListener('load', () => {
  if (!localStorage.getItem('scores')) {
    localStorage.setItem('scores', JSON.stringify([]));
  }

  scores = JSON.parse(localStorage.getItem('scores')) || [];
  renderScoreboard(scores.result[0]);
});
