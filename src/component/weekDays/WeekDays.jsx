import { useState } from "react";
import { DaysContainer, WeekDay } from "./style";

const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

const convertFirstUpper = (str) => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();

const WeekDays = ({ passValue }) => {
  const [value, setValue] = useState(null);

  const handleClick = (e) => {
    setValue(e.target.value);
    passValue(e.target.value);
  };

  return (
    <DaysContainer>
      {days.map((item) => (
        <WeekDay onClick={handleClick} $selected={value === item} value={item} $day={item}>
          {convertFirstUpper(item)}
        </WeekDay>
      ))}
    </DaysContainer>
  );
};
export default WeekDays;
