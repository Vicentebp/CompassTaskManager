const getUser = (email) => {
  const userEmail = email ?? localStorage.getItem("auth");
  if (localStorage.getItem("users") == null) localStorage.setItem("users", "[]");
  const arrUsers = JSON.parse(localStorage.getItem("users"));
  arrUsers.find((item) => {
    if (item.email === userEmail) {
      return userEmail;
    }
  });
  throw "Email not registred";
};
export default getUser;
