const scoreboard = document.getElementById('scoreboard');

function addScoreToLocalStorage(scores) {
  localStorage.setItem('scores', JSON.stringify(scores));
}

function clearHTML() {
  while (scoreboard.firstChild) {
    scoreboard.removeChild(scoreboard.firstChild);
  }
}

function renderScoreboard(scores) {
  clearHTML();
  scores.forEach((score) => {
    const li = document.createElement('li');
    li.innerHTML = `${score.user} - ${score.score}`;
    scoreboard.appendChild(li);
  });
}

export { addScoreToLocalStorage, renderScoreboard };