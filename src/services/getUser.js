const getUser = (email) => {
  const userEmail = email ?? localStorage.getItem("auth");
  if (localStorage.getItem("users") == null) localStorage.setItem("users", "[]");
  const arrUsers = JSON.parse(localStorage.getItem("users"));
  const user = arrUsers.find((item) => item.email === userEmail);
  if (user !== undefined) {
    return user;
  } else throw "Email não registrado";
};
export default getUser;
