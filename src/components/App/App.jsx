import { useState } from "react";
import { useEffect } from "react";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import { defaultClothingItems } from "../../utils/constants.js";
import { location } from "../../utils/constants.js";
import { apiKey } from "../../utils/constants.js";
import { getWeatherData } from "../../utils/weatherApi.js";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState();
  const [clothingItem, setClothingItem] = useState(defaultClothingItems);

  useEffect(() => {
    getWeatherData(location, apiKey).then((data) => {
      if (data) {
        setWeather(data);
        setTimeout(() => setIsLoading(false), 1000);
      }
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="page">
          <div className="page__loading-overlay">
            <p className="page__loading-message">Loading...😎</p>
          </div>
        </div>
      ) : (
        <div className="page">
          <Header weather={weather} />
          <Main weather={weather} clothingItem={clothingItem} />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
