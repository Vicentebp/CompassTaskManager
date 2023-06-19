import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export const HomeHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  height: 130px;
  gap: 190px;
  background: #ffffff;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
  padding-right: 23px;
  box-sizing: border-box;
`;

export const HomeBody = styled.div`
  width: 100vw;
  height: 950px;
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

export const LogOutBar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 21px;
  gap: 26px;
  align-items: end;
`;

export const LogOutBtns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  width: 21px;
  height: 21px;
`;

export const BackgroundImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
`;
