import styled from "styled-components";

export const WeatherWrapper = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: ${(props) => (props.$main ? "column" : "row")};
`;

export const Txt = styled.span`
  color: #222222;
  font-weight: ${(props) => (props.$main ? 700 : 400)};
  font-size: ${(props) => (props.$main ? "48px" : "14px")};
  line-height: ${(props) => (props.$main ? "60px" : "18px")};
  text-align: center;
`;
