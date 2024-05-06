const saveToLocalStorage = (data) => {
  const payload = JSON.stringify(data);
  localStorage.setItem("user-details", payload);
};

const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
};

export { saveToLocalStorage, getFromLocalStorage };
