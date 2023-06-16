import styled from "styled-components";

export const TxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: inherit;
`;

export const TitleTxt = styled.h1`
  font-weight: 400;
  font-size: 60px;
  line-height: 75px;
  margin-bottom: 18px;
`;
export const SubTitleTxt = styled.span`
  width: 300px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

export const LoginForm = styled.form`
  margin-top: 135px;
  font-weight: 400;
  font-size: 30px;
  line-height: 38px;
  display: flex;
  flex-direction: column;
  gap: 115px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
`;

export const InputCamp = styled.input`
  width: 379px;
  height: 60px;
  box-sizing: border-box;
  background: #26292c;
  border: 1px solid #ffffff;
  border-radius: 50px;
  padding: 20px 0 20px 20px;
  color: #e0e0e0;
  font-weight: 400;
  &::-webkit-calendar-picker-indicator {
    display: none;
  }
  &:invalid::-webkit-datetime-edit {
    color: #e0e0e0;
  }
`;

export const InputSubmit = styled.input`
  box-sizing: border-box;
  width: 379px;
  height: 67px;

  background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 50px;

  color: white;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
`;
