import { useEffect, useState } from "react";
import LoginLayout from "../../component/loginLayout/LoginLayout";
import { InputCamp, InputSubmit, InputWrapper, LoginForm, SubTitleTxt, TitleTxt, TxtWrapper, YellowText } from "./style";
import { useNavigate } from "react-router-dom";
import getUser from "../../services/getUser";
import isLogged from "../../services/isLogged";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogged()) navigate("/home");
  }, []);
  const [login, setLogin] = useState(true);

  const loginSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    try {
      const user = getUser(formJson.user);
      if (user.password === formJson.password) {
        navigate("/home");
        setLogin(true);
        localStorage.setItem("auth", user.email);
      } else setLogin(false);
    } catch (error) {
      setLogin(false);
    }
  };

  return (
    <LoginLayout>
      <div>
        <TxtWrapper>
          <TitleTxt>Welcome,</TitleTxt>
          <SubTitleTxt>To continue browsing safely, log in to the network.</SubTitleTxt>
        </TxtWrapper>
        <LoginForm onSubmit={loginSubmit}>
          <InputWrapper>
            <label>Login</label>
            <InputCamp type="email" name="user" required placeholder="user name" />
            <InputCamp type="password" name="password" required placeholder="password" />
            {login || <YellowText>Wow, invalid username or password. Please, try again!</YellowText>}
            <InputSubmit type="submit" value="Log In" />
            <InputSubmit type="button" onClick={() => navigate("/register")} value="Register" />
          </InputWrapper>
        </LoginForm>
      </div>
    </LoginLayout>
  );
};
export default Login;
