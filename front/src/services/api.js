const host = 'http://localhost:8080/api';
const url = path => `${host}/${path}`;

export const get = async (path) => {
  const response = await fetch(url(path));
  const schedules = await response.json();

  return schedules;
};
