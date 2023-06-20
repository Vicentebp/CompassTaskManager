import styled from "styled-components";

export const HomeBody = styled.div`
  display: flex;
  flex-direction: column;
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
  display: flex;
  flex-shrink: 0;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
  width: 85px;
  height: 85px;
  background: #ff0024;

  border-bottom: 1px solid #dcdfe3;
  border-radius: 10px;
`;

export const TaskTxt = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: start;
  align-items: start;
  width: 512px;
  height: 85px;
  padding: 13px;
  gap: 10px;
  box-sizing: border-box;
  background: linear-gradient(112.83deg, rgba(228, 240, 248, 0.42) 0%, rgba(255, 255, 255, 0.336) 110.84%);
  box-shadow: 0px 2px 5.5px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10.5px);
  border-left: 14px solid #ff0024;
  border-radius: 15px;
`;

export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100%;
  gap: 14px;
  padding: 24px;
`;

export const DeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  box-sizing: content-box;

  width: 57px;
  height: 25px;

  font-weight: 800;
  font-size: 14px;
  color: white;
  border: none;
  background: #ff3d1f;
  border-radius: 4px;
`;

export const Text = styled.span`
  flex: 1;
`;
