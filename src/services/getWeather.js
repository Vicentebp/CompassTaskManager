import axios from "axios";

const getWeather = async (lat, lon) => {
  const apiKey = "abcea857fb3c7e963ec7bc359560a4ef";
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
  return {
    weatherIcon: response.data.weather[0].icon,
    temperature: Math.round(response.data.main.temp),
  };
};
export default getWeather;
