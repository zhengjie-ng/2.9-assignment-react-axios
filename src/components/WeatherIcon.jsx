import styles from "./WeatherIcon.module.css";

function WeatherIcon({ area, mode }) {
  const weatherConditions = {
    sun: ["Fair", "Fair (Day)", "Fair and Warm"],
    night: ["Fair (Night)", "Partly Cloudy (Night)"],
    cloudy: [
      "Partly Cloudy",
      "Partly Cloudy (Day)",
      "Cloudy",
      "Hazy",
      "Slightly Hazy",
    ],
    windy: ["Windy"],
    fog: ["Mist", "Fog"],
    rain: [
      "Light Rain",
      "Moderate Rain",
      "Passing Showers",
      "Light Showers",
      "Showers",
      "Heavy Rain",
      "Heavy Showers",
    ],
    thunderyRain: [
      "Thundery Showers",
      "Heavy Thundery Showers",
      "Heavy Thundery Showers with Gusty Winds",
    ],
  };

  let icon = "";

  if (weatherConditions.sun.includes(mode)) {
    icon = "🌤️";
  } else if (weatherConditions.night.includes(mode)) {
    icon = "🌃";
  } else if (weatherConditions.cloudy.includes(mode)) {
    icon = "☁️";
  } else if (weatherConditions.windy.includes(mode)) {
    icon = "🌬️";
  } else if (weatherConditions.fog.includes(mode)) {
    icon = "🌫️";
  } else if (weatherConditions.rain.includes(mode)) {
    icon = "🌧️";
  } else if (weatherConditions.thunderyRain.includes(mode)) {
    icon = "⛈️";
  }
  return (
    <div className={styles.divMain}>
      <p className={styles.pArea}>{area}</p>
      <p className={styles.pIcon}>{icon}</p>
    </div>
  );
}

export default WeatherIcon;
