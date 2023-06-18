import compasso from "../../assets/compasso.png";
import compassoCircle from "../../assets/uolCircle.jpg";
import Clock from "../clock/Clock";
import { Flag, FlagTxt, HomeBody, HomeHeader, LayoutWrapper } from "./style";

const HomeLayout = (props) => {
  return (
    <LayoutWrapper>
      <HomeHeader>
        <Flag>
          <FlagTxt $mainTxt>Weekly Planner</FlagTxt>
          <FlagTxt>Use this planner to organize your daily issues.</FlagTxt>
        </Flag>
        <Clock />
      </HomeHeader>
      <HomeBody />
    </LayoutWrapper>
  );
};
export default HomeLayout;
