import { getWeatherCard } from "../../utils/helpers";
import "./WeatherCard.css";

function WeatherCard({ weather }) {
  const isDay = weather.weather[0].icon.includes("d");
  const weatherDescription = weather.weather[0].description;
  const weatherCard = getWeatherCard(isDay, weatherDescription);
  return (
    <section className="weather">
      <div
        style={{
          backgroundImage: `url(${weatherCard.url})`,
        }}
        className="weather__card"
      >
        <p className="weather__temp">{Math.round(weather.main.temp)}ºF</p>
      </div>
    </section>
  );
}

export default WeatherCard;
