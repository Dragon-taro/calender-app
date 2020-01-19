const host = "http://localhost:8080/api";
const url = path => `${host}/${path}`;

const header = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const get = async path => {
  const resp = await fetch(url(path));
  const result = await resp.json();

  return result;
};

export const post = async (path, body) => {
  const options = { ...header, method: "POST", body: JSON.stringify(body) };

  const resp = await fetch(url(path), options);

  const result = await resp.json();

  return result;
};

export const deleteRequest = async path => {
  const options = { method: "DELETE" };

  await fetch(url(path), options);

  // 204 No Contentが返ってくるので成功の場合は何もreturnしない
  return;
};
