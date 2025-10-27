import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm.js";

const AddItemModal = ({ onClose, onOverlayClick, onAddItem }) => {
  // Without the custom useForm hook I would have to use seperate state variables
  // for each form input and create an item object upon submission. The commented
  // out code in this component reflects that.

  // const [name, setName] = useState("");
  // const [url, setUrl] = useState("");
  // const [weatherType, setWeatherType] = useState("");

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };
  // const handleUrlChange = (e) => {
  //   setUrl(e.target.value);
  // };
  // const handleWeatherTypeChange = (e) => {
  //   setWeatherType(e.target.value);
  // };

  const { values, handleChange } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // const item = {
    //   name,
    //   imageUrl: url,
    //   weather: weatherType,
    // };
    onAddItem(values);
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
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            value={values.name}
            className="modal__form-input"
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor="image" className="modal__form-label">
          Image
          <input
            type="url"
            placeholder="Image URL"
            id="image"
            name="imageUrl"
            value={values.imageUrl}
            className="modal__form-input"
            required
            onChange={handleChange}
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
            id="Hot"
            name="weather"
            value="hot"
            className="modal__radio-input"
            required
            checked={values.weather === "hot"}
            onChange={handleChange}
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
            checked={values.weather === "warm"}
            onChange={handleChange}
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
            checked={values.weather === "cold"}
            onChange={handleChange}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
