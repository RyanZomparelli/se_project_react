import "./DeleteConfirmationModal.css";

const DeleteConfirmationModal = ({
  onDelete,
  onClose,
  onOverlayClick,
  card,
}) => {
  return (
    <section onClick={onOverlayClick} className="modal">
      <div className="modal__container modal__container_type_delete">
        <button onClick={onClose} className="modal__btn-close"></button>
        <p className="delete-modal__text">
          Are you sure you want to delete this item?
        </p>
        <p className="delete-modal__text">This action is irreversible.</p>
        <button
          onClick={() => {
            onDelete(card._id);
          }}
          className="delete-modal__btn delete-modal__btn_delete"
        >
          Yes, delete item
        </button>
        <button
          onClick={onClose}
          className="delete-modal__btn delete-modal__btn_cancel"
        >
          Cancel
        </button>
      </div>
    </section>
  );
};

export default DeleteConfirmationModal;
