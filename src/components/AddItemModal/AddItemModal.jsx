import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ onClose, handleOverlayClick }) => {
  return (
    <ModalWithForm
      title="New Garment"
      name="new-garment"
      buttonText="Add garment"
      onClose={onClose}
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
  );
};

export default AddItemModal;
