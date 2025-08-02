import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard.jsx";
import "./Main.css";

function Main({ weather, clothingItem }) {
  return (
    <main className="main page__section">
      <WeatherCard weather={weather} />
      <section className="clothing">
        <p weather={weather} className="clothing__paragraph">
          Today is {Math.round(weather.main.temp)}° F / You may want to wear:
        </p>
        <ItemCard clothingItem={clothingItem} />
      </section>
    </main>
  );
}

export default Main;
