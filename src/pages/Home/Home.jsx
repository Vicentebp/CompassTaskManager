import { useEffect, useState } from "react";
import Header from "../../component/homeHeader/HomeHeader";
import HomeLayout from "../../component/homeLayout/HomeLayout";
import createTask from "../../services/createTask";
import { HomeBody, InputSubmit, InputTxt, Select, TaskContainer, TaskTime, TaskTxt } from "./style";
import getUserTasks from "../../services/getUserTasks";
import isLogged from "../../services/isLogged";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  if (!isLogged()) navigate("/");

  const [update, setUpdate] = useState(false);

  const getTasks = async () => {
    try {
      const userTasks = getUserTasks().filter((item) => item.day === "monday");
      return userTasks;
    } catch (error) {
      navigate("/");
    }
  };

  const tasks = useEffect(() => {
    getTasks();
  });

  const taskSubmit = (e) => {
    try {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const formJson = Object.fromEntries(formData.entries());
      createTask(formJson);
      setUpdate(true);
    } catch (error) {
      alert(error);
    }
    setUpdate(false);
  };
  return (
    <>
      <Header />
      <HomeLayout />
      <HomeBody>
        <form onSubmit={taskSubmit}>
          <InputTxt type="text" name="taskName" placeholder="Task or issue" required autoComplete="none" />
          <Select id="day" name="day" required>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday ">Saturday </option>
            <option value="sunday ">Sunday </option>
          </Select>
          <Select $time id="time" name="time" required>
            <option value="11:30">11h 30m</option>
            <option value="12:00">12h</option>
          </Select>
          <InputSubmit type="submit" value="+ Add to calendar" />
        </form>
        {tasks && (
          <TaskContainer>
            {console.log(tasks)}
            <TaskTime>{tasks[0].time}</TaskTime>
            <TaskTxt>{tasks[0].taskName}</TaskTxt>
          </TaskContainer>
        )}
      </HomeBody>
    </>
  );
};
export default Home;
