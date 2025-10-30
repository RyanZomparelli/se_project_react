const ErrorModal = ({ onOverlayClick, onClose, error }) => {
  return (
    <section onClick={onOverlayClick} className="modal">
      <div className="modal__container modal__container_type_delete">
        <button onClick={onClose} className="modal__btn-close"></button>
        <p className="delete-modal__text">{error} 😔</p>
        <p className="delete-modal__text">
          {error.startsWith("Login")
            ? "Please log in manually"
            : "please try again"}{" "}
          😀
        </p>
      </div>
    </section>
  );
};

export default ErrorModal;
