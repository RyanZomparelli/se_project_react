import "./ItemModal.css";

export default function ItemModal({ onClose, card, onOverlayClick, onDelete }) {
  return (
    <section className="modal" onClick={onOverlayClick}>
      <div className="modal__container">
        <button className="item-modal__btn-close" onClick={onClose}></button>
        <img src={card.imageUrl} alt={card.name} className="item-modal__img" />
        <div className="item-modal__items">
          <button
            className="item-modal__btn-delete"
            onClick={() => onDelete(card._id)}
          >
            Delete item
          </button>

          <p className="item-modal__name">{card.name}</p>
          <p className="item-modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </section>
  );
}
