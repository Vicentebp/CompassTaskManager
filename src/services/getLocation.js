import axios from "axios";

const getLocation = async (city, country) => {
  const apiKey = "0af1fa9c43168a6c64d3c76127b40359";
  const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${apiKey}`);

  return {
    lat: response.data[0].lat,
    lon: response.data[0].lon,
  };
};
export default getLocation;
