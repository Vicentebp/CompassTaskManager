import { useState } from "react";
import LoginLayout from "../../component/loginLayout/LoginLayout";
import { InputCamp, InputSubmit, InputWrapper, LoginForm, SubTitleTxt, TitleTxt, TxtWrapper } from "./style";
import { useNavigate } from "react-router-dom";
import getUser from "../../services/getUser";

const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState(true);

  const loginSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const user = getUser(formJson.user);
    console.log(user);
    if (user.password === formJson.password) {
      navigate("/home");
      setLogin(true);
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
          </InputWrapper>
          <InputSubmit type="submit" value="Log In" />
          {login || <span>Wow, invalid username or password. Please, try again!</span>}
          <InputSubmit type="button" onClick={() => navigate("/register")} value="Register" />
        </LoginForm>
      </div>
    </LoginLayout>
  );
};
export default Login;
