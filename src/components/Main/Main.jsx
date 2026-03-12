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
  isDemoMode,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const selectedItems = (() => {
    const range = weather?.tempFeel;
    if (!range) return [];

    const exact = clothingItems.filter((item) => item.weather === range);
    // Back-compat: if a user has no "cool" items yet, fall back to "cold" items.
    if (range === "cool" && exact.length === 0) {
      return clothingItems.filter((item) => item.weather === "cold");
    }
    return exact;
  })();

  return (
    <main className="main page__section">
      <WeatherCard weather={weather} isMobileMenuOpened={isMobileMenuOpened} />
      <section className="clothing">
        {isDemoMode ? (
          <p className="clothing__paragraph">
            Log in to use your location and add/like your own clothing items.
          </p>
        ) : (
          <p className="clothing__paragraph">
            Today is {weather.temp[currentTemperatureUnit]}
            {currentTemperatureUnit === "F" ? (
              <span>&deg;F</span>
            ) : (
              <span>&deg;C</span>
            )}{" "}
            / You may want to wear:
          </p>
        )}
        <ul className="clothing__list">
          {selectedItems.map((item) => {
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
