import { useState } from "react";
import LoginLayout from "../../component/loginLayout/LoginLayout";
import createUser from "../../services/createUser";
import { InputCamp, SubTitleTxt, TitleTxt, TxtWrapper } from "../Login/style";
import { InputSubmit, InputWrapper, LabelText, RegisterForm, RegisterLabel } from "./style";

const Register = () => {
  const registerSubmit = (e) => {
    try {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const formJson = Object.fromEntries(formData.entries());
      if (formJson.password === formJson.passwordVerify) {
        delete formJson.passwordVerify;
        createUser(formJson);
      }
    } catch (error) {
      alert(error);
    }
  };
  const [pass, setPass] = useState("");

  const passPut = (e) => {
    setPass(e.target.value);
  };
  console.log(pass);

  return (
    <LoginLayout>
      <div>
        <TxtWrapper>
          <TitleTxt>Welcome,</TitleTxt>
          <SubTitleTxt>Please, register to continue</SubTitleTxt>
        </TxtWrapper>
        <RegisterForm onSubmit={registerSubmit}>
          <InputWrapper>
            <RegisterLabel>
              <LabelText>First name</LabelText>
              <InputCamp type="text" name="firstName" required placeholder="Your first name" />
            </RegisterLabel>
            <RegisterLabel>
              <LabelText>Last name</LabelText>
              <InputCamp type="text" name="lastName" required placeholder="Your last name" />
            </RegisterLabel>
            <RegisterLabel>
              <LabelText>Birth date</LabelText>
              <InputCamp type="date" name="birthDate" required placeholder="MM/DD/YYYY" />
            </RegisterLabel>
            <RegisterLabel>
              <LabelText>Country</LabelText>
              <InputCamp type="text" name="country" required placeholder="Your Country" />
            </RegisterLabel>
            <RegisterLabel>
              <LabelText>City</LabelText>
              <InputCamp type="text" name="city" required placeholder="Your City" />
            </RegisterLabel>
            <RegisterLabel>
              <LabelText>E-mail</LabelText>
              <InputCamp type="email" name="email" required placeholder="A valid e-mail here" />
            </RegisterLabel>
            <RegisterLabel>
              <LabelText>Password</LabelText>
              <InputCamp type="text" onChange={passPut} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$" name="password" required placeholder="Your password" />
            </RegisterLabel>
            <RegisterLabel>
              <LabelText>Password</LabelText>
              <InputCamp type="text" pattern={pass} name="passwordVerify" required placeholder="Confirm your password" />
            </RegisterLabel>
          </InputWrapper>
          <InputSubmit type="submit" value="Register Now" />
        </RegisterForm>
      </div>
    </LoginLayout>
  );
};
export default Register;
