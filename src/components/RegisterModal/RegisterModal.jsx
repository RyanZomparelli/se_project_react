import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";

const RegisterModal = ({ onClose, onOverlayClick }) => {
  // Destructure the return values from the custom useForm hook and create a state
  // object containing all the necessary values.
  const { values, handleChange } = useForm({
    email: "",
    password: "",
    name: "",
    avatarURL: "",
  });

  return (
    <ModalWithForm
      title="Sign up"
      name="sign up"
      onClose={onClose}
      onOverlayClick={onOverlayClick}
    >
      <fieldset className="modal__text-inputs">
        <label htmlFor="email" className="modal__form-label">
          Email*
          {/* The handleChange method of the useForm hook will automatically 
              update the input state values using the name and value props */}
          <input
            className="modal__form-input"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password" className="modal__form-label">
          Password*
          <input
            className="modal__form-input"
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor="name" className="modal__form-label">
          Name*
          <input
            className="modal__form-input"
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            value={values.name}
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor="avatar" className="modal__form-label">
          Avatar URL*
          <input
            className="modal__form-input"
            id="avatar"
            type="url"
            placeholder="Avatar URL"
            name="avatarURL"
            value={values.avatarURL}
            required
            onChange={handleChange}
          />
        </label>
      </fieldset>
    </ModalWithForm>
  );
};
