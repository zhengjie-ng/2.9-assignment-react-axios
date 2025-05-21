import govWeatherAPI from "./api/govWeather";
import WeatherIcon from "./components/WeatherIcon";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState();
  const [period, setPeriod] = useState();

  async function apiGet() {
    try {
      const response = await govWeatherAPI.get();
      setWeatherData(response.data.data.records[0]);
      console.log(weatherData);

      const initialPeriod = Object.values(
        response.data.data.records[0].periods
      ).find((period) => period.timePeriod.text.startsWith("6 am"));
      setPeriod(initialPeriod);
    } catch (error) {
      console.log(error.message);
    }
  }

  const handlerOnClick = (e) => {
    let newPeriod = null;
    if (weatherData) {
      newPeriod = Object.values(weatherData.periods).find((period) =>
        period.timePeriod.text.startsWith(e)
      );
      setPeriod(newPeriod);
    }
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <div>
      <h1>24-Hour Weather Forecast</h1>
      {weatherData && (
        <h2>{`${weatherData.general.temperature.low}°C / ${weatherData.general.temperature.high}°C`}</h2>
      )}
      <button onClick={() => handlerOnClick("6 am")}>6am to 12pm</button>
      <button onClick={() => handlerOnClick("Midday")}>12pm to 6pm</button>
      <button onClick={() => handlerOnClick("6 pm")}>6pm to 6am</button>
      {/* <button onClick={apiGet}>Get</button> */}
      <div className="map">
        {weatherData && period && period.regions && (
          <>
            <div className="north">
              <WeatherIcon area="North" mode={period.regions["north"].text} />
            </div>
            <div className="south">
              <WeatherIcon area="South" mode={period.regions["south"].text} />
            </div>
            <div className="east">
              <WeatherIcon
                className="east"
                area="East"
                mode={period.regions["east"].text}
              />
            </div>
            <div className="west">
              <WeatherIcon
                className="west"
                area="West"
                mode={period.regions["west"].text}
              />
            </div>
            <div className="central">
              <WeatherIcon
                className="central"
                area="Central"
                mode={period.regions["central"].text}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
