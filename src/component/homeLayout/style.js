import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: "Mulish";
`;
export const HomeHeader = styled.header`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 130px;
  gap: 190px;
  background: #ffffff;
  box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
`;

export const HomeBody = styled.div`
  width: 100vw;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
`;

export const Flag = styled.div`
  display: flex;
  flex-direction: column;
  background: black;
  margin: 33px 0;
  padding: 12px 0px 12px 24px;
  width: 588px;
  height: 64px;
  box-sizing: border-box;
  border-radius: 0px 14px 15px 0px;
  align-items: left;
  color: #ffffff;
`;
export const FlagTxt = styled.span`
  line-height: 20px;
  font-weight: ${(props) => (props.$mainTxt ? "700" : "400")};
  font-size: ${(props) => (props.$mainTxt ? "22px" : "14px")};
`;
