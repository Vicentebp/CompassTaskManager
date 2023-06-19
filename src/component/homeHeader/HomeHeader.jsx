import Clock from "../clock/Clock";
import WeatherWidget from "../weatherWidget/WeatherWidget";
import smallCompass from "../../assets/smallCompass.png";
import logout from "../../assets/logout.svg";
import { Flag, FlagTxt, HomeHeader, Img, LogOutBar, LogOutBtns } from "./style";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };
  return (
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
          <Img src={logout} alt="Log Out" onClick={logOut} />
          <span>Logout</span>
        </LogOutBtns>
      </LogOutBar>
    </HomeHeader>
  );
};
export default Header;
