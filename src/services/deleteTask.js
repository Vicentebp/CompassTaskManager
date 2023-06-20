const deleteTask = (id) => {
  let arrTasks = JSON.parse(localStorage.getItem("tasks"));
  const userEmail = localStorage.getItem("auth");
  if (id) {
    const index = arrTasks.findIndex((item) => item.id === id);
    if (index === -1) throw "Task not found";
    arrTasks.splice(index, 1);
  } else {
    arrTasks = arrTasks.filter((item) => item.userId !== userEmail);
  }
  localStorage.setItem("tasks", JSON.stringify(arrTasks));
};

export default deleteTask;
