const host = "http://localhost:8080/api";
const url = path => `${host}/${path}`;

export const get = async path => {
  const resp = await fetch(url(path));
  const result = await resp.json();

  return result;
};
