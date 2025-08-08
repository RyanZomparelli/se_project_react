import { getWeatherCard } from "../../utils/helpers";
import "./WeatherCard.css";

function WeatherCard({ weather }) {
  const weatherCard = getWeatherCard(weather.isDay, weather.condition);

  return (
    <section className="weather">
      <div
        style={{
          backgroundImage: `url(${weatherCard.url})`,
        }}
        className="weather__card"
      >
        <p className="weather__temp">{Math.round(weather.temp)}ºF</p>
      </div>
    </section>
  );
}

export default WeatherCard;
