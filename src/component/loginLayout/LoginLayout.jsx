import { LayoutBackground, LayoutCompassImg, LayoutPageContainer, LayoutWrapper } from "./style";
import compasso from "../../assets/compasso.png";

const LoginLayout = (props) => {
  return (
    <LayoutWrapper>
      <LayoutPageContainer>{props.children}</LayoutPageContainer>
      <LayoutBackground>
        <div>
          <LayoutCompassImg src={compasso} />
        </div>
      </LayoutBackground>
    </LayoutWrapper>
  );
};
export default LoginLayout;
