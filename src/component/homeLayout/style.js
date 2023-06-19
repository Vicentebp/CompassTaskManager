import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BackgroundImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

export default BackgroundImg;
