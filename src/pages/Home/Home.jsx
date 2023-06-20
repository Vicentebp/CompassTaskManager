import { useEffect, useState } from "react";
import Header from "../../component/homeHeader/HomeHeader";
import HomeLayout from "../../component/homeLayout/HomeLayout";
import createTask from "../../services/createTask";
import { DeleteBtn, HomeBody, InputSubmit, InputTxt, Select, TaskContainer, TaskTime, TaskTxt, TasksContainer, Text } from "./style";
import getUserTasks from "../../services/getUserTasks";
import isLogged from "../../services/isLogged";
import { useNavigate } from "react-router-dom";
import WeekDays from "../../component/weekDays/WeekDays";
import deleteTask from "../../services/deleteTask";

const horarios = Array.from(Array(48).keys()).map((index) => {
  const minuto = index % 2 ? "30" : "00";
  const hora = Math.floor(index / 2);
  const label = `${hora}h${minuto}m`;
  const value = [hora, minuto];
  return { value, label };
});

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged()) navigate("/");
    else getTasks(selectedDay);
  }, []);

  const [tasks, setTasks] = useState(null);
  const [selectedDay, setSelectedDay] = useState("monday");

  const taskSubmit = (e) => {
    try {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const formJson = Object.fromEntries(formData.entries());
      const date = new Date();
      const hrMn = formJson.time.split(",");
      date.setHours(hrMn[0]);
      date.setMinutes(hrMn[1]);
      createTask({
        taskName: formJson.taskName,
        day: formJson.day,
        time: date.toISOString(),
      });
      getTasks(selectedDay);
    } catch (error) {
      alert(error);
    }
  };

  const getTasks = (day) => {
    try {
      const userTasks = getUserTasks()
        .filter((item) => item.day === day)
        .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime())
        .map((item) => {
          const localString = new Date(item.time).toLocaleString("pt-BR");
          return {
            label: localString.substring(11, 17).replace(":", "h") + "m",
            taskName: item.taskName,
            id: item.id,
          };
        })
        .reduce((acc, cur) => {
          let found = acc.find((item) => item.time === cur.label);
          if (!found) {
            found = {
              time: cur.label,
              tasks: [],
            };
            acc.push(found);
          }
          found.tasks.push({
            name: cur.taskName,
            id: cur.id,
          });
          return acc;
        }, []);

      setTasks(userTasks);
    } catch (error) {}
  };

  const getValue = (day) => {
    getTasks(day);
    setSelectedDay(day);
  };

  const handleDelete = (id) => {
    deleteTask(id);
    getTasks(selectedDay);
  };
  return (
    <>
      <Header />
      <HomeLayout />
      <HomeBody>
        <div>
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
              {horarios.map((item) => (
                <option value={item.value}>{item.label}</option>
              ))}
            </Select>
            <InputSubmit type="submit" value="+ Add to calendar" />
          </form>
          <button onClick={() => handleDelete()}>- Delete All</button>
        </div>
        <WeekDays passValue={getValue} />
        <TasksContainer>
          {tasks &&
            tasks.map((item) => (
              <TaskContainer>
                <TaskTime>{item.time}</TaskTime>
                {item.tasks.map((task) => (
                  <>
                    <TaskTxt>
                      <Text>{task.name}</Text>
                      <DeleteBtn onClick={() => handleDelete(task.id)}>Delete</DeleteBtn>
                    </TaskTxt>
                  </>
                ))}
              </TaskContainer>
            ))}
        </TasksContainer>
      </HomeBody>
    </>
  );
};
export default Home;
