//External library imports
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//Component CSS file
import "./App.css";

//Internal component imports
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import Footer from "../Footer/Footer.jsx";
import Profile from "../Profile/Profile.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal.jsx";

//Utility/API imports
import { coordinates, apiKey } from "../../utils/constants.js";
import { getWeatherData, filterWeatherData } from "../../utils/weatherApi.js";
import {
  getClothingItems,
  addClothingItem,
  removeClothingItem,
} from "../../utils/api.js";
import * as auth from "../../utils/auth.js";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [activeModal, setActiveModal] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  // Authorization state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const handleOpenModal = (modal) => {
    setActiveModal(modal);
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleEscClose = (e) => {
    if (e.key === "Escape") {
      handleCloseModal();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
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

  // App handles navigation and routing and controls global state like isLoggedIn
  // so it makes sense to handle registration here. We just need to pass the data
  // from the Register component up to here.
  const handleRegistration = (data) => {
    auth
      .register(data)
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
        handleCloseModal();
      })
      .catch((err) => {
        console.error("Registration failed", err);
      });
  };

  const handleAddItemSubmit = (item) => {
    //async fetch request
    addClothingItem(item)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => console.error("Failed to add a new item:", error));
  };

  const handleItemDelete = (removeId) => {
    removeClothingItem(removeId)
      .then((data) => {
        const remainingCards = clothingItems.filter((item) => {
          return item._id !== removeId;
        });
        setClothingItems(remainingCards);
        handleCloseModal();
      })
      .catch((error) => console.error("Failed to remove item:", error));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpened(!isMobileMenuOpened);
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
        console.error("Failed to fetch data:", error);
      });
  }, []);

  useEffect(() => {
    getClothingItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((error) => console.error(error));
  }, []);

  // When interacting with the DOM directly in React, it must be done in a useEffect
  // hook. Here we add a listener to the document only when the activeModal state
  // is truthy. To prevent a build-up of old listeners (memory leaks) remove
  // them with Reacts cleanup pattern. Return a callback to the useEffect hook for
  // deferred execution.
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
        // Global source of truth for authorization state
        <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
          <div className="page">
            <CurrentTemperatureUnitContext.Provider
              value={{ currentTemperatureUnit, handleToggleSwitchChange }}
            >
              <Header
                weather={weather}
                onModalOpen={handleOpenModal}
                isMobileMenuOpened={isMobileMenuOpened}
                onMobileMenuToggle={toggleMobileMenu}
              />
              <Routes>
                <Route
                  path="/"
                  element={
                    <Main
                      weather={weather}
                      clothingItems={clothingItems}
                      handleItemCardClick={handleItemCardClick}
                      isMobileMenuOpened={isMobileMenuOpened}
                    />
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <Profile
                      clothingItems={clothingItems}
                      handleItemCardClick={handleItemCardClick}
                      onModalOpen={handleOpenModal}
                      isMobileMenuOpened={isMobileMenuOpened}
                    />
                  }
                />
              </Routes>
            </CurrentTemperatureUnitContext.Provider>
            {activeModal === "sign up" && (
              <RegisterModal
                onClose={handleCloseModal}
                onOverlayClick={handleOverlayClick}
                handleRegistration={handleRegistration}
              />
            )}
            {activeModal === "add-garment" && (
              <AddItemModal
                onClose={handleCloseModal}
                onOverlayClick={handleOverlayClick}
                onAddItem={handleAddItemSubmit}
              />
            )}
            {activeModal === "preview-item" && (
              <ItemModal
                onClose={handleCloseModal}
                card={selectedItem}
                onOverlayClick={handleOverlayClick}
                onModalOpen={handleOpenModal}
              />
            )}
            {activeModal === "delete-item" && (
              <DeleteConfirmationModal
                card={selectedItem}
                onDelete={handleItemDelete}
                onClose={handleCloseModal}
                onOverlayClick={handleOverlayClick}
              />
            )}
            <Footer />
          </div>
        </CurrentUserContext.Provider>
      )}
    </>
  );
}

export default App;
