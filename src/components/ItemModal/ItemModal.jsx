import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Modal from "../Modal/Modal";
import "./ItemModal.css";

export default function ItemModal({ onClose, card, onModalOpen, activeModal }) {
  const { currentUser } = useContext(CurrentUserContext);
  const isOwnCard = card.owner === currentUser?.user?._id;

  return (
    <Modal modalName="item-modal" onClose={onClose} activeModal={activeModal}>
      <img src={card.imageUrl} alt={card.name} className="item-modal__img" />
      <div className="item-modal__items">
        {isOwnCard && (
          <button
            className="item-modal__btn-delete"
            onClick={() => onModalOpen("delete-modal")}
          >
            Delete item
          </button>
        )}
        <p className="item-modal__name">{card.name}</p>
        <p className="item-modal__weather">Weather: {card.weather}</p>
      </div>
    </Modal>
  );
}
