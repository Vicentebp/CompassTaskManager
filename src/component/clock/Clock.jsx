import { useEffect, useState } from "react";
import { ClockTxt, ClockWrapper } from "./style";

const Clock = () => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const [date, setDate] = useState(new Date());
  const refreshClock = () => {
    setDate(new Date());
  };
  useEffect(() => {
    const timerId = setInterval(refreshClock, 10000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <ClockWrapper>
      <ClockTxt $mainTxt>{date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</ClockTxt>
      <ClockTxt>{date.toLocaleDateString("en-US", options)}</ClockTxt>
    </ClockWrapper>
  );
};
export default Clock;
