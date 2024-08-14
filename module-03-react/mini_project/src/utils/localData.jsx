export const addData = (name, task) => {
  return localStorage.setItem(name, JSON.stringify(task));
};

export const getData = (name) => {
  return JSON.parse(localStorage.getItem(name)) || [];
};
