import { useEffect, useState } from "react";
import getLocation from "../../services/getLocation";
import getWeather from "../../services/getWeather";
import { Txt, WeatherWrapper } from "./style";

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const callLocation = async () => {
    setLoading(true);
    const location = await getLocation("Santo Ângelo", "BR");
    const { weatherIcon, temperature } = await getWeather(location.lat, location.lon);
    const url = `https://openweathermap.org/img/wn/${weatherIcon}.png`;
    return { temperature, url };
  };

  useEffect(() => {
    callLocation()
      .then((data) => {
        setWeather(data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <WeatherWrapper $main>
      {weather && !loading && (
        <>
          <Txt>{"Santo Angelo - Brazil"}</Txt>
          <WeatherWrapper>
            <div>
              <img src={weather.url} alt=""></img>
            </div>
            <Txt $main>{`${weather.temperature}º`}</Txt>
          </WeatherWrapper>
        </>
      )}
    </WeatherWrapper>
  );
};
export default WeatherWidget;
