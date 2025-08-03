import "../ItemCard/ItemCard.css";

function ItemCard({ clothingItem }) {
  return (
    <li className="clothing__card">
      <p className="clothing__card-title">{clothingItem.name}</p>
      <img
        src={clothingItem.link}
        alt={clothingItem.name}
        className="clothing__card-image"
      />
    </li>
  );
}

export default ItemCard;
