import { useContext } from "react";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard.jsx";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";

function Main({ weather, clothingItem, handleItemCardClick }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  return (
    <main className="main page__section">
      <WeatherCard weather={weather} />
      <section className="clothing">
        <p className="clothing__paragraph">
          Today is {weather.temp[currentTemperatureUnit]}
          {currentTemperatureUnit === "F" ? (
            <span>&deg;F</span>
          ) : (
            <span>&deg;C</span>
          )}{" "}
          / You may want to wear:
        </p>
        <ul className="clothing__list">
          {clothingItem
            .filter((item) => {
              return item.weather === weather.tempFeel;
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
