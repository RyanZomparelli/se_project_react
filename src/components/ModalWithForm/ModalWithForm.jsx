import "./ModalWithForm.css";

/*
Key characteristics of ModalWithForm (wrapper component):
- Provides common structure: It wraps the modal layout (backdrop, container, 
  close button, form structure).
- Accepts children: The {children} prop allows different content to be inserted 
  into the form.
- Reusable: You can use it for different types of modals (RegisterModal, 
  LoginModal, AddItemModal, etc.).
- Handles common functionality: Modal closing, overlay clicks, form submission. 
*/

export default function ModalWithForm({
  title,
  name,
  buttonText,
  onClose,
  children,
  onOverlayClick,
  onSubmit,
}) {
  return (
    <section className="modal" onClick={onOverlayClick}>
      <div className="modal__container">
        <button className="modal__btn-close" onClick={onClose}></button>
        <form
          name={name}
          className={`modal__form modal__form_type_${name}`}
          onSubmit={onSubmit}
        >
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
