import { useState, useEffect } from "react";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import Footer from "../Footer/Footer.jsx";
import {
  defaultClothingItems,
  location,
  apiKey,
} from "../../utils/constants.js";
import { getWeatherData } from "../../utils/weatherApi.js";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState();
  const [clothingItem, setClothingItem] = useState(defaultClothingItems);
  const [selectedItem, setSelectedItem] = useState({});
  const [activeModal, setActiveModal] = useState("");

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

  useEffect(() => {
    getWeatherData(location, apiKey)
      .then((data) => {
        if (data) {
          setWeather(data);
          //Somtimes loading happens so fast it creates a jarring flash
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
          <Header weather={weather} handleOpenModal={handleOpenModal} />
          <Main
            weather={weather}
            clothingItem={clothingItem}
            handleItemCardClick={handleItemCardClick}
          />
          {activeModal === "add-garment" && (
            <ModalWithForm
              title="New Garment"
              name="new-garment"
              buttonText="Add garment"
              onClose={handleCloseModal}
              handleOverlayClick={handleOverlayClick}
            >
              <fieldset className="modal__text-inputs">
                <label htmlFor="name" className="modal__form-label">
                  Name
                  <input
                    placeholder="Name"
                    type="text"
                    className="modal__form-input"
                    id="name"
                    required
                  />
                </label>
                <label htmlFor="image" className="modal__form-label">
                  Image
                  <input
                    placeholder="Image URL"
                    type="url"
                    className="modal__form-input"
                    id="image"
                    required
                  />
                </label>
              </fieldset>
              <fieldset className="modal__radio-inputs">
                <p className="modal__paragraph">Select the weather type:</p>
                <label
                  htmlFor="Hot"
                  className="modal__form-label modal__form-label_type_radio"
                >
                  <input
                    type="radio"
                    name="weather"
                    id="Hot"
                    value="hot"
                    className="modal__radio-input"
                    required
                  />
                  Hot
                </label>

                <label
                  htmlFor="Warm"
                  className="modal__form-label modal__form-label_type_radio"
                >
                  <input
                    type="radio"
                    name="weather"
                    id="Warm"
                    value="warm"
                    className="modal__radio-input"
                    required
                  />
                  Warm
                </label>

                <label
                  htmlFor="Cold"
                  className="modal__form-label modal__form-label_type_radio"
                >
                  <input
                    type="radio"
                    name="weather"
                    id="Cold"
                    value="cold"
                    className="modal__radio-input"
                    required
                  />
                  Cold
                </label>
              </fieldset>
            </ModalWithForm>
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
