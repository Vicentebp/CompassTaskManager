const isLogged = () => {
  return !!localStorage.getItem("auth");
};
export default isLogged;
