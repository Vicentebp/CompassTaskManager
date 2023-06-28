import getUser from "./getUser";

const login = (email, password) => {
  const user = getUser(email);
  if (user.password === password) {
    localStorage.setItem("auth", email);
  } else throw "Não conseguiu logar";
  return user;
};
export default login;
