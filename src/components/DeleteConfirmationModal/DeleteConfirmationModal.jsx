import Modal from "../Modal/Modal";
import "./DeleteConfirmationModal.css";

const DeleteConfirmationModal = ({ onDelete, onClose, card, activeModal }) => {
  return (
    <Modal modalName="delete-modal" onClose={onClose} activeModal={activeModal}>
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
    </Modal>
  );
};

export default DeleteConfirmationModal;
