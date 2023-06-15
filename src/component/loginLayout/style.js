import styled from "styled-components";
import fundo from "../../assets/fundo.jpg";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const LayoutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;

  font-family: "Mulish";
  font-style: normal;
  color: #e0e0e0;

  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
`;

export const LayoutBackground = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  background-image: url(${fundo});
`;

export const LayoutCompassImg = styled.img`
  margin-top: 37px;
`;
