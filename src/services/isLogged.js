const isLogged = () => {
  if (localStorage.getItem("auth")) return true;
  return false;
};
export default isLogged;
