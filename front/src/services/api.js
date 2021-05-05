const host = 'http://localhost:8080/api';
const url = path => `${host}/${path}`;

export const get = async (path) => {
  const response = await fetch(url(path));
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

  const addedSchedule = response.json();

  return addedSchedule;
};

export const deleteRequest = async path => {
  await fetch(url(path), { method: 'DELETE' });

  return; // 204が返ってくるので何もしない
};
