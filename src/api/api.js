import { addScoreToLocalStorage, renderScoreboard } from '../helpers/helpers';

const endpoint = process.env.GAME_ENDPOINT;
const gameId = process.env.GAME_ID;
const url = `${endpoint}/${gameId}/scores/`;

async function postScore(data) {
  const params = {
    method: 'POST',
    headers: {
      'content-type': 'application/json;charset = UTF-8',
    },
    body: JSON.stringify(data),
  };

  const sendRequest = await fetch(url, params);
  const response = await sendRequest.json();
  return response;
}

async function getScores() {
  const apiCall = await fetch(url);
  const response = await apiCall.json();
  renderScoreboard(response.result);
  addScoreToLocalStorage(response.result);
}

export { postScore, getScores };