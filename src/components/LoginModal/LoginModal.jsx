import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";
import "./LoginModal.css";

const LoginModal = ({ onClose, onOverlayClick, handleLogin }) => {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(values);
  };

  return (
    <ModalWithForm
      title="Log in"
      name="log-in"
      buttonText="Log In"
      onClose={onClose}
      onOverlayClick={onOverlayClick}
      onSubmit={handleSubmit}
    >
      <fieldset className="modal__text-inputs">
        <label htmlFor="email" className="modal__form-label">
          Email
          <input
            className="modal__form-input"
            id="email"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={values.email}
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password" className="modal__form-label">
          Password
          <input
            className="modal__form-input"
            id="password"
            type="password"
            placeholder="Enter your password"
            name="password"
            value={values.password}
            required
            onChange={handleChange}
          />
        </label>
      </fieldset>
      <div className="login-modal-btn__container">
        <button className="login-modal__register-btn" type="button">
          or Sign Up
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
