import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ItemModal.css";

export default function ItemModal({
  onClose,
  card,
  onOverlayClick,
  onModalOpen,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const isOwnCard = card.owner === currentUser.user._id;

  return (
    <section className="modal" onClick={onOverlayClick}>
      <div className="modal__container">
        <button className="item-modal__btn-close" onClick={onClose}></button>
        <img src={card.imageUrl} alt={card.name} className="item-modal__img" />
        <div className="item-modal__items">
          {isOwnCard && (
            <button
              className="item-modal__btn-delete"
              onClick={() => onModalOpen("delete-item")}
            >
              Delete item
            </button>
          )}
          <p className="item-modal__name">{card.name}</p>
          <p className="item-modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </section>
  );
}
