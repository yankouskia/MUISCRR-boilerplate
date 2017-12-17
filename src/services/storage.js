const APP_NAME_PREFIX = 'h387bk2d3';

export const set = (key, value) => {
  const data = typeof value === 'string' ? value : JSON.stringify(value);
  localStorage.setItem(`${APP_NAME_PREFIX}${key}`, data);
};

export const get = key => localStorage.getItem(`${APP_NAME_PREFIX}${key}`);

export const clear = key => localStorage.removeItem(`${APP_NAME_PREFIX}${key}`);
