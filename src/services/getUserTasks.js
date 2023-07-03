const getUserTasks = ({ email }) => {
  const taskArray = JSON.parse(localStorage.getItem("tasks"));
  const userTasks = taskArray?.filter((item) => item.userId === email);
  return userTasks ?? null;
};

export default getUserTasks;
