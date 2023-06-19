import compassoCircle from "../../assets/uolCircle.jpg";
import smallCompass from "../../assets/smallCompass.png";
import logout from "../../assets/logout.svg";
import Clock from "../clock/Clock";
import WeatherWidget from "../weatherWidget/WeatherWidget";
import { BackgroundImg, Flag, FlagTxt, HomeBody, HomeHeader, Img, LayoutWrapper, LogOutBar, LogOutBtns } from "./style";

const HomeLayout = (props) => {
  return (
    <LayoutWrapper>
      <HomeHeader>
        <Flag>
          <FlagTxt $mainTxt>Weekly Planner</FlagTxt>
          <FlagTxt>Use this planner to organize your daily issues.</FlagTxt>
        </Flag>
        <Clock />
        <WeatherWidget />
        <LogOutBar $fix>
          <img src={smallCompass} alt=""></img>
          <LogOutBtns>
            <Img src={logout} alt="Log Out" />
            <span>Logout</span>
          </LogOutBtns>
        </LogOutBar>
      </HomeHeader>
      <div>
        <BackgroundImg src={compassoCircle} />
      </div>
      <HomeBody />
    </LayoutWrapper>
  );
};
export default HomeLayout;
