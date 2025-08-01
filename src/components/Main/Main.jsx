import WeatherCard from "../WeatherCard/WeatherCard";
import "./Main.css";

function Main({ weather }) {
  return (
    <main className="main">
      <WeatherCard weather={weather} />
    </main>
  );
}

export default Main;
