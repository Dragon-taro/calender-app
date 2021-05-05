const host = 'http://localhost:8080/api';
const url = path => `${host}/${path}`;

export const get = async (path) => {
  const response = await fetch(url(path));

  checkError(response.status);

  const schedules = await response.json();

  return schedules;
};

const header = {
  headers: {
    'Content-Type': 'application/json'
  }
};

export const post = async (path, body) => {
  const options = { ...header, method: 'POST', body: JSON.stringify(body) };

  const response = await fetch(url(path), options);
  checkError(response.status);

  const addedSchedule = response.json();

  return addedSchedule;
};

export const deleteRequest = async path => {
  const response = await fetch(url(path), { method: 'DELETE' });
  checkError(response.status);

  return; // 204が返ってくるので何もしない
};

const checkError = (status) => {
  if (status < 400) { return; }

  throw new Error('エラーが発生しました。時間を置いて再度お試しください。');
}
