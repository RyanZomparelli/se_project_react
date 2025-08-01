import "./WeatherCard.css";

function WeatherCard({ weather }) {
  return (
    <section className="weather">
      <div className="weather__card">
        <p className="weather__temp">75 F</p>
      </div>
    </section>
  );
}

export default WeatherCard;
