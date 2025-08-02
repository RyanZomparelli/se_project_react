import "./WeatherCard.css";

function WeatherCard({ weather }) {
  return (
    <section className="weather">
      <div className="weather__card">
        <p className="weather__temp">{Math.round(weather.main.temp)}ºF</p>
      </div>
    </section>
  );
}

export default WeatherCard;
