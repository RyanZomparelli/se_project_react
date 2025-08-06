import "./ModalWithForm.css";

export default function ModalWithForm({
  title,
  name,
  buttonText,
  onClose,
  children,
  handleOverlayClick,
}) {
  return (
    <section className="modal" onClick={handleOverlayClick}>
      <div className="modal__container">
        <button className="modal__btn-close" onClick={onClose}></button>
        <form name={name} className={`modal__form modal__form_type_${name}`}>
          <h3 className="modal__form-title">{title}</h3>
          {children}
          <button type="submit" className="modal__btn-submit">
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
