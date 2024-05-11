const saveToLocalStorage = (key, data) => {
  const payload = JSON.stringify(data);
  localStorage.setItem(key, payload);
};

const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
};

export { saveToLocalStorage, getFromLocalStorage };
