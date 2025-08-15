import { useContext } from "react";
import "./WeatherCard.css";
import { getWeatherCard } from "../../utils/helpers";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weather }) {
  const weatherCard = getWeatherCard(weather.isDay, weather.condition);

  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weather">
      <div
        style={{
          backgroundImage: `url(${weatherCard.url})`,
        }}
        className="weather__card"
      >
        <p className="weather__temp">
          {weather.temp[currentTemperatureUnit]}
          {currentTemperatureUnit === "F" ? (
            <span>&deg;F</span>
          ) : (
            <span>&deg;C</span>
          )}
        </p>
      </div>
    </section>
  );
}

export default WeatherCard;
