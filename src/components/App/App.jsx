import { useState } from "react";
import { useEffect } from "react";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEscClose = (e) => {
    if (e.key === "Escape") {
      setIsModalOpen(false);
    }
  };

  const handleClickClose = (e) => {
    if (e.target === document.querySelector(".modal")) {
      setIsModalOpen(false);
    }
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
    if (isModalOpen) {
      document.addEventListener("keyup", handleEscClose);
      document.addEventListener("click", handleClickClose);
    }

    return () => {
      document.removeEventListener("keyup", handleEscClose);
      document.removeEventListener("click", handleClickClose);
    };
  }, [isModalOpen]);

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
          <Header weather={weather} onOpen={handleOpenModal} />
          <Main weather={weather} clothingItem={clothingItem} />
          {isModalOpen && (
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
                  />
                </label>
                <label htmlFor="image" className="modal__form-label">
                  Image
                  <input
                    placeholder="Image URL"
                    type="text"
                    className="modal__form-input"
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
                  />
                  Cold
                </label>
              </fieldset>
            </ModalWithForm>
          )}

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
