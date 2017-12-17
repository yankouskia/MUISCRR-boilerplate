export const post = (api, body) =>
  fetch(`${api}`, {
    method: 'POST',
    body: JSON.stringify(body),
  }).then(res => res.json());

export const get = api =>
  fetch(`${api}`, {
    method: 'GET',
  }).then(res => res.json());
