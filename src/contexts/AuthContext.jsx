import { createContext, useCallback, useEffect, useState } from "react";
import isLogged from "../services/isLogged";
import loginService from "../services/login";
import getUser from "../services/getUser";

export const AuthContext = createContext();

export const AuthProvider = ({ children, router }) => {
  const [user, setUser] = useState();

  const login = useCallback(
    (email, password) => {
      const loggedUser = loginService(email, password);
      setUser(loggedUser);
    },
    [user]
  );

  useEffect(() => {
    if (isLogged()) {
      setUser(getUser(localStorage.getItem("auth")));
      router.navigate("/home");
    } else router.navigate("/");
  }, [setUser]);

  return <AuthContext.Provider value={{ setUser, user, login }}>{children}</AuthContext.Provider>;
};
