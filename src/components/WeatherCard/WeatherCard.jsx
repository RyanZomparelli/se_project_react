import { useContext } from "react";
import "./WeatherCard.css";
import { getWeatherCard } from "../../utils/helpers";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weather }) {
  const weatherCard = getWeatherCard(weather.isDay, weather.condition);

  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {weather.temp[currentTemperatureUnit]}
        {currentTemperatureUnit === "F" ? (
          <span>&deg;F</span>
        ) : (
          <span>&deg;C</span>
        )}
      </p>
      <img className="weather-card__image" src={weatherCard.url} alt="Sunny!" />
    </section>
  );
}

export default WeatherCard;
