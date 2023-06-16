import LoginLayout from "../../component/loginLayout/LoginLayout";
import { InputCamp, InputSubmit, InputWrapper, LoginForm, SubTitleTxt, TitleTxt, TxtWrapper } from "./style";

const Login = () => {
  return (
    <LoginLayout>
      <div>
        <TxtWrapper>
          <TitleTxt>Welcome,</TitleTxt>
          <SubTitleTxt>To continue browsing safely, log in to the network.</SubTitleTxt>
        </TxtWrapper>
        <LoginForm>
          <InputWrapper>
            <label>Login</label>
            <InputCamp type="text" placeholder="user name" />
            <InputCamp type="password" placeholder="password" />
          </InputWrapper>
          <InputSubmit type="submit" value="Log In" />
        </LoginForm>
      </div>
    </LoginLayout>
  );
};
export default Login;
