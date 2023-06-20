import { LayoutBackground, LayoutCompassImg, LayoutPageContainer, LayoutWrapper } from "./style";
import compasso from "../../assets/compasso.png";
import { useNavigate } from "react-router-dom";

const LoginLayout = (props) => {
  const redirect = () => {
    window.location.replace("https://compass.uol/en/home/");
  };
  return (
    <LayoutWrapper>
      <LayoutPageContainer>{props.children}</LayoutPageContainer>
      <LayoutBackground>
        <div>
          <LayoutCompassImg src={compasso} onClick={redirect} />
        </div>
      </LayoutBackground>
    </LayoutWrapper>
  );
};
export default LoginLayout;
