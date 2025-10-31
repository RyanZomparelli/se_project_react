//External library imports
import { useContext } from "react";

//Component CSS file
import "./Main.css";

//Utility imports
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard.jsx";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";

function Main({
  weather,
  clothingItems,
  handleItemCardClick,
  isMobileMenuOpened,
  handleCardLike,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <main className="main page__section">
      <WeatherCard weather={weather} isMobileMenuOpened={isMobileMenuOpened} />
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
          {clothingItems
            .filter((item) => {
              return item.weather === weather.tempFeel;
            })
            .map((item) => {
              return (
                <ItemCard
                  handleItemCardClick={handleItemCardClick}
                  key={item._id}
                  clothingItem={item}
                  handleCardLike={handleCardLike}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
