import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard.jsx";
import { setTemperatureRange } from "../../utils/weatherApi.js";
import "./Main.css";

function Main({ weather, clothingItem, handleItemCardClick }) {
  const temp = setTemperatureRange(weather?.main?.temp);

  return (
    <main className="main page__section">
      <WeatherCard weather={weather} />
      <section className="clothing">
        <p className="clothing__paragraph">
          Today is {Math.round(weather.main.temp)}° F / You may want to wear:
        </p>
        <ul className="clothing__list">
          {clothingItem
            .filter((item) => {
              return item.weather === temp;
            })
            .map((item) => {
              return (
                <ItemCard
                  handleItemCardClick={handleItemCardClick}
                  key={item._id}
                  clothingItem={item}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
