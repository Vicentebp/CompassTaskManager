const createTask = ({ name, day, time }) => {
  const userId = localStorage.getItem("auth");

  if (localStorage.getItem("tasks") == null) localStorage.setItem("tasks", "[]");
  const arrTasks = JSON.parse(localStorage.getItem("tasks"));

  const newTask = { name, day, time, userId };
  arrTasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(arrTasks));
};