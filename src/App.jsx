import govWeatherAPI from "./api/govWeather";
import WeatherIcon from "./components/WeatherIcon";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState();
  const [period, setPeriod] = useState(0);
  async function apiGet() {
    try {
      const response = await govWeatherAPI.get();
      setWeatherData(response.data.data.records[0]);
      // console.log(weatherData);
      console.log(weatherData.periods[0].regions["north"].text);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <div>
      <h1>24-Hour Weather Forecast</h1>
      <button onClick={() => setPeriod(0)}>6am to 12pm</button>
      <button onClick={() => setPeriod(1)}>12pm to 6pm</button>
      <button onClick={() => setPeriod(2)}>6pm to 6am</button>
      {/* <button onClick={apiGet}>Get</button> */}
      <div className="map">
        {weatherData && weatherData.periods[period] && (
          <>
            <div className="north">
              <WeatherIcon
                area="North"
                mode={weatherData.periods[period].regions["north"].text}
              />
            </div>
            <div className="south">
              <WeatherIcon
                area="South"
                mode={weatherData.periods[period].regions["south"].text}
              />
            </div>
            <div className="east">
              <WeatherIcon
                className="east"
                area="East"
                mode={weatherData.periods[period].regions["east"].text}
              />
            </div>
            <div className="west">
              <WeatherIcon
                className="west"
                area="West"
                mode={weatherData.periods[period].regions["west"].text}
              />
            </div>
            <div className="central">
              <WeatherIcon
                className="central"
                area="Central"
                mode={weatherData.periods[period].regions["central"].text}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
