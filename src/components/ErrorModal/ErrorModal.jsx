import Modal from "../Modal/Modal";
import stormCloud from "../../assets/storm-cloud.svg";
import "./ErrorModal.css";

const ErrorModal = ({ onClose, error, activeModal }) => {
  return (
    <Modal modalName="error-modal" onClose={onClose} activeModal={activeModal}>
      <img
        src={stormCloud}
        alt="Storm cloud image."
        className="error-modal__img"
      />
      <div className="error-modal__text-container">
        <p className="error-modal__text">{error}</p>
        <p className="error-modal__text">
          {error.startsWith("Login")
            ? "Please log in manually."
            : "Please try again."}{" "}
        </p>
      </div>
    </Modal>
  );
};

export default ErrorModal;
//  <div className="modal__container modal__container_type_delete"></div>
