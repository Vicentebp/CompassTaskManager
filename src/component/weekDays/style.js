import styled from "styled-components";

export const DaysContainer = styled.div`
  display: flex;
  height: 33px;
  gap: 3px;
  margin: 19px 47px 6px 125px;
`;

const colors = {
  monday: "#FF0024",
  tuesday: "#FF8000",
  wednesday: "#FFCE00",
  thursday: "rgba(255, 0, 36, 0.7)",
  friday: "rgba(255, 128, 0, 0.7)",
  saturday: "rgba(255, 206, 0, 0.7)",
  sunday: "rgba(255, 0, 36, 0.5)",
};

export const WeekDay = styled.button`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 240px;
  height: 33px;
  font-style: "Mulish";
  font-weight: 600;
  font-size: 20px;
  width: ${(props) => (props.$selected ? "290px" : "240px")};
  filter: ${(props) => (props.$selected ? "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" : "none")};
  line-height: 20px;
  box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
  border-radius: 9px 9px 0px 0px;
  background-color: ${({ $day }) => colors[$day]};
  border: none;
`;
