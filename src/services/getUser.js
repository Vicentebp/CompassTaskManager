const getUser = (email) => {
  if (localStorage.getItem("users") == null) localStorage.setItem("users", "[]");
  const arrUsers = JSON.parse(localStorage.getItem("users"));
  const user = arrUsers.find((item) => item.email === email);
  if (user !== undefined) {
    return user;
  } else throw "Email não registrado";
};
export default getUser;
