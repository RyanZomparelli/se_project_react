import "./ItemModal.css";

export default function ItemModal({ onClose, card, onOverlayClick }) {
  return (
    <section className="modal" onClick={onOverlayClick}>
      <div className="modal__container">
        <button
          className="modal__btn-close_type_item-modal"
          onClick={onClose}
        ></button>
        <img src={card.link} alt={card.name} className="item__modal-img" />
        <p className="item__modal-item">{card.name}</p>
        <p className="item__modal-weather">Weather: {card.weather}</p>
      </div>
    </section>
  );
}
