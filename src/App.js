import "./App.css";
import getLocation from "./services/getLocation";
import getWeather from "./services/getWeather";

function App() {
  const callLocation = async () => {
    const location = await getLocation("Santo Ângelo", "BR");
    const weather = await getWeather(location.lat, location.lon);
    console.log(weather);
  };
  return (
    <>
      <button onClick={callLocation}>tosco</button>
    </>
  );
}

export default App;
