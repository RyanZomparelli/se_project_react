import "./ModalWithForm.css";

export default function ModalWithForm({
  title,
  name,
  buttonText,
  onClose,
  children,
}) {
  return (
    <section className="modal">
      <div className="modal__container">
        <button className="modal__btn-close"></button>
        <form name={name} className={`modal__form modal__form_type_${name}`}>
          <h3 className="modal__form-title">{title}</h3>
          {children}
          <button className="modal__btn-submit">{buttonText}</button>
        </form>
      </div>
    </section>
  );
}
