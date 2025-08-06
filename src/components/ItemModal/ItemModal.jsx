import "./ItemModal.css";

export default function ItemModal({ close, data, handleOverlayClick }) {
  return (
    <section className="modal" onClick={handleOverlayClick}>
      <div className="modal__container">
        <button
          className="modal__btn-close_type_item-modal"
          onClick={close}
        ></button>
        <img src={data.link} alt={data.name} className="item__modal-img" />
        <p className="item__modal-item">{data.name}</p>
        <p className="item__modal-weather">Weather: {data.weather}</p>
      </div>
    </section>
  );
}
