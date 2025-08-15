import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import Footer from "../Footer/Footer.jsx";
import Profile from "../Profile/Profile.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import {
  defaultClothingItems,
  coordinates,
  apiKey,
} from "../../utils/constants.js";
import { getWeatherData, filterWeatherData } from "../../utils/weatherApi.js";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState();
  const [clothingItem, setClothingItem] = useState(defaultClothingItems);
  const [selectedItem, setSelectedItem] = useState({});
  const [activeModal, setActiveModal] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleOpenModal = (modal) => {
    setActiveModal(modal);
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleEscClose = (e) => {
    if (e.key === "Escape") {
      setActiveModal("");
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setActiveModal("");
    }
  };

  const handleItemCardClick = (card) => {
    setActiveModal("preview-item");
    setSelectedItem(card);
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  useEffect(() => {
    getWeatherData(coordinates, apiKey)
      .then((data) => {
        if (data) {
          const weatherData = filterWeatherData(data);
          setWeather(weatherData);
          //Somtimes loading happens so fast it creates a jarring flash
          //This smooths out loading
          setTimeout(() => setIsLoading(false), 1000);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (activeModal) {
      document.addEventListener("keyup", handleEscClose);
      document.addEventListener("click", handleOverlayClick);
    }

    return () => {
      document.removeEventListener("keyup", handleEscClose);
      document.removeEventListener("click", handleOverlayClick);
    };
  }, [activeModal]);

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
          <CurrentTemperatureUnitContext.Provider
            value={{ currentTemperatureUnit, handleToggleSwitchChange }}
          >
            <Header weather={weather} handleOpenModal={handleOpenModal} />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weather={weather}
                    clothingItem={clothingItem}
                    handleItemCardClick={handleItemCardClick}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <Profile
                    weather={weather}
                    clothingItem={clothingItem}
                    handleItemCardClick={handleItemCardClick}
                  />
                }
              />
            </Routes>
          </CurrentTemperatureUnitContext.Provider>
          {activeModal === "add-garment" && (
            <AddItemModal
              onClose={handleCloseModal}
              handleOverlayClick={handleOverlayClick}
            />
          )}
          {activeModal === "preview-item" && (
            <ItemModal
              onClose={handleCloseModal}
              card={selectedItem}
              handleOverlayClick={handleOverlayClick}
            />
          )}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
