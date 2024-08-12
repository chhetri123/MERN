export const addTask = (task) => {
  return localStorage.setItem("tasks", JSON.stringify(task));
};

export const getTask = () => {
  return JSON.parse(localStorage.getItem("tasks")) || [];
};
