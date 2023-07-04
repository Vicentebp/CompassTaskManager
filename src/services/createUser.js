const createUser = (newUser) => {
  if (localStorage.getItem("users") == null) localStorage.setItem("users", "[]");
  console.log("kdoaskdoask");
  const arrUsers = JSON.parse(localStorage.getItem("users"));
  if (arrUsers.find((item) => item.email === newUser.email)) throw "Email already used";
  arrUsers.push(newUser);
  localStorage.setItem("users", JSON.stringify(arrUsers));
};
export default createUser;
