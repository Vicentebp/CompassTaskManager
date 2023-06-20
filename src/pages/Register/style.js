import styled from "styled-components";

export const RegisterForm = styled.form`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  gap: 56px;
  margin-top: 45px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-content: center;
`;

export const InputSubmit = styled.input`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #e0e0e0;
  box-sizing: border-box;

  width: 471px;
  height: 67px;

  background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 50px;
`;

export const RegisterLabel = styled.label`
  display: flex;
  justify-content: space-between;
`;

export const LabelText = styled.span`
  margin: auto 0 auto 0;
`;
