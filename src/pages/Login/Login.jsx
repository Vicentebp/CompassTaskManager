import { useContext, useEffect, useState } from "react";
import LoginLayout from "../../component/loginLayout/LoginLayout";
import { InputCamp, InputSubmit, InputWrapper, LoginForm, SubTitleTxt, TitleTxt, TxtWrapper, YellowText } from "./style";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState(false);
  const { login } = useContext(AuthContext);

  const loginSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    try {
      login(formJson.user, formJson.password);
      navigate("/home");
    } catch (error) {
      setLoginError(true);
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
            <InputCamp $invalid={loginError} type="email" name="user" required placeholder="user name" />
            <InputCamp $invalid={loginError} type="password" name="password" required placeholder="password" />
            {loginError && <YellowText>Wow, invalid username or password. Please, try again!</YellowText>}
            <InputSubmit type="submit" value="Log In" />
            <InputSubmit type="button" onClick={() => navigate("/register")} value="Register" />
          </InputWrapper>
        </LoginForm>
      </div>
    </LoginLayout>
  );
};
export default Login;
