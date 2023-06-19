import styled from "styled-components";

export const HomeBody = styled.div`
  width: 100vw;
  height: 950px;
`;

export const Select = styled.select`
  width: ${(props) => (props.$Time ? "120px" : "240px")};
  height: 45px;
  background: #ffffff;
  border: 1px solid #fece00;
  border-radius: 10px;
`;

export const InputTxt = styled.input`
  width: 391px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #fece00;
  border-radius: 10px;
  padding: 15px 12px;
  box-sizing: border-box;
`;

export const InputSubmit = styled.input`
  padding: 10px 12px;
  gap: 4px;
  width: 200px;
  height: 45px;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #ffffff;
  background: #00ba88;
  border-radius: 10px;
  border: none;
`;

export const TaskContainer = styled.div`
  display: flex;
  gap: 18px;
`;
export const TaskTime = styled.div`
  box-sizing: border-box;

  width: 85px;
  height: 85px;

  background: #ff0024;

  border-bottom: 1px solid #dcdfe3;
  border-radius: 10px;
`;

export const TaskTxt = styled.div`
  width: 512px;
  height: 85px;
  background: linear-gradient(112.83deg, rgba(228, 240, 248, 0.42) 0%, rgba(255, 255, 255, 0.336) 110.84%);
  border: 1px solid #ffffff;
  box-shadow: 0px 2px 5.5px rgba(0, 0, 0, 0.02);
  backdrop-filter: blur(10.5px);
  border-radius: 15px;
`;
