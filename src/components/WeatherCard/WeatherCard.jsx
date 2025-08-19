import { useContext } from "react";
import "./WeatherCard.css";
import { getWeatherCard } from "../../utils/helpers";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weather, isMobileMenuOpened }) {
  const weatherCard = getWeatherCard(weather.isDay, weather.condition);

  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <section
      className={
        isMobileMenuOpened ? "weather-card_menu_opened" : "weather-card"
      }
    >
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
