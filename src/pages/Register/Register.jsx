import LoginLayout from "../../component/loginLayout/LoginLayout";
import { InputCamp, SubTitleTxt, TitleTxt, TxtWrapper } from "../Login/style";
import { InputSubmit, InputWrapper, LabelText, RegisterForm, RegisterLabel } from "./style";

const Register = () => {
  return (
    <LoginLayout>
      <div>
        <TxtWrapper>
          <TitleTxt>Welcome,</TitleTxt>
          <SubTitleTxt>Please, register to continue</SubTitleTxt>
        </TxtWrapper>
        <RegisterForm>
          <InputWrapper>
            <RegisterLabel>
              <LabelText>First name</LabelText>
              <InputCamp type="text" required placeholder="Your first name" />
            </RegisterLabel>
            <RegisterLabel>
              <LabelText>Last name</LabelText>
              <InputCamp type="text" required placeholder="Your last name" />
            </RegisterLabel>
            <RegisterLabel>
              <LabelText>Birth date</LabelText>
              <InputCamp type="date" required placeholder="MM/DD/YYYY" min="2005-01-01" max="2023-06-16" />
            </RegisterLabel>
            <RegisterLabel>
              <LabelText>Country</LabelText>
              <InputCamp type="text" required placeholder="Your Country" />
            </RegisterLabel>
            <RegisterLabel>
              <LabelText>City</LabelText>
              <InputCamp type="text" required placeholder="Your City" />
            </RegisterLabel>
            <RegisterLabel>
              <LabelText>E-mail</LabelText>
              <InputCamp type="text" required placeholder="A valid e-mail here" />
            </RegisterLabel>
            <RegisterLabel>
              <LabelText>Password</LabelText>
              <InputCamp type="password" required placeholder="Your password" />
            </RegisterLabel>
            <RegisterLabel>
              <LabelText>Password</LabelText>
              <InputCamp type="password" required placeholder="Confirm your password" />
            </RegisterLabel>
          </InputWrapper>
          <InputSubmit type="submit" value="Register Now" />
        </RegisterForm>
      </div>
    </LoginLayout>
  );
};
export default Register;
