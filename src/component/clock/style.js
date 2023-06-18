import styled from "styled-components";

export const ClockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 15px;
`;

export const ClockTxt = styled.span`
  font-family: "Mulish";
  line-height: 20px;
  color: #3b3e45;
  font-weight: ${(props) => (props.$mainTxt ? "700" : "400")};
  font-size: ${(props) => (props.$mainTxt ? "40px" : "20px")};
`;
