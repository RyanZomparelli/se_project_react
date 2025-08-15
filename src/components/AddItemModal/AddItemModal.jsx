import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ onClose, onOverlayClick, onAddItem }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [weatherType, setWeatherType] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };
  const handleWeatherTypeChange = (e) => {
    setWeatherType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      name,
      weather: weatherType,
      link: url,
    };
    onAddItem(item);
  };

  return (
    <ModalWithForm
      title="New Garment"
      name="new-garment"
      buttonText="Add garment"
      onClose={onClose}
      onOverlayClick={onOverlayClick}
      onSubmit={handleSubmit}
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
            value={name}
            onChange={handleNameChange}
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
            value={url}
            onChange={handleUrlChange}
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
            checked={weatherType === "hot"}
            onChange={handleWeatherTypeChange}
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
            checked={weatherType === "warm"}
            onChange={handleWeatherTypeChange}
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
            checked={weatherType === "cold"}
            onChange={handleWeatherTypeChange}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
