import { addScoreToLocalStorage, renderScoreboard } from '../helpers/helpers';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jUqREHdPhobU657jBEmk/scores/';

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
  const responseStart = await fetch(url);
  const responseData = await responseStart.json();
  renderScoreboard(responseData.result);
  addScoreToLocalStorage(responseData.result);
}

export { postScore, getScores };