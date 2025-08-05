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
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);

  const handleOpenFormModal = (e) => {
    setIsFormModalOpen(true);
  };

  const handleCloseModal = (e) => {
    setIsFormModalOpen(false);
  };

  const handleCloseItemModal = () => {
    setIsItemModalOpen(false);
  };

  const handleEscClose = (e) => {
    if (e.key === "Escape") {
      if (isFormModalOpen) {
        setIsFormModalOpen(false);
      } else if (isItemModalOpen) {
        setIsItemModalOpen(false);
      }
    }
  };

  const handleClickClose = (e) => {
    if (e.target === document.querySelector(".modal")) {
      if (isFormModalOpen) {
        setIsFormModalOpen(false);
      } else if (isItemModalOpen) {
        setIsItemModalOpen(false);
      }
    }
  };

  const handleItemCardClick = (item) => {
    setIsItemModalOpen(true);
    const data = {
      name: item.name,
      link: item.link,
      weather: item.weather,
    };
    setSelectedItem(data);
  };

  useEffect(() => {
    getWeatherData(location, apiKey).then((data) => {
      if (data) {
        setWeather(data);
        //Somtimes loading happens so fast it creates a jarring flash
        setTimeout(() => setIsLoading(false), 1000);
      }
    });
  }, []);

  useEffect(() => {
    if (isFormModalOpen) {
      document.addEventListener("keyup", handleEscClose);
      document.addEventListener("click", handleClickClose);
    }

    return () => {
      document.removeEventListener("keyup", handleEscClose);
      document.removeEventListener("click", handleClickClose);
    };
  }, [isFormModalOpen]);

  useEffect(() => {
    if (isItemModalOpen) {
      document.addEventListener("keyup", handleEscClose);
      document.addEventListener("click", handleClickClose);
    }
    return () => {
      document.removeEventListener("keyup", handleEscClose);
      document.removeEventListener("click", handleClickClose);
    };
  }, [isItemModalOpen]);

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
          <Header weather={weather} onOpen={handleOpenFormModal} />
          <Main
            weather={weather}
            clothingItem={clothingItem}
            handleItemCardClick={handleItemCardClick}
          />
          {isFormModalOpen && (
            <ModalWithForm
              title="New Garment"
              name="new-garment"
              buttonText="Add garment"
              onClose={handleCloseModal}
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
                    value="Hot"
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
                    value="Warm"
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
                    value="Cold"
                    className="modal__radio-input"
                    required
                  />
                  Cold
                </label>
              </fieldset>
            </ModalWithForm>
          )}
          {isItemModalOpen && (
            <ItemModal close={handleCloseItemModal} data={selectedItem} />
          )}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
