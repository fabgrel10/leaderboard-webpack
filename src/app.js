import { renderScoreboard, Score } from './helpers/helpers';
import { getScores, postScore } from './api/api';

import './scss/app.scss';

const form = document.getElementById('add-score-form');
const name = document.getElementById('name-input');
const score = document.getElementById('score-input');
const refreshScoreboard = document.getElementById('refresh-scoreboard');
let scores = [];

function addScore(event) {
  event.preventDefault();
  const newScore = new Score(name.value, score.value);

  if (newScore.user && newScore.score) {
    postScore(newScore.setScore());
    getScores();
  }
  form.reset();
}

form.addEventListener('submit', addScore);

refreshScoreboard.addEventListener('click', getScores);

window.addEventListener('load', () => {
  if (!localStorage.getItem('scores')) {
    localStorage.setItem('scores', JSON.stringify([]));
  }

  scores = JSON.parse(localStorage.getItem('scores')) || [];
  renderScoreboard(scores);
});
