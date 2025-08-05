import "../ItemCard/ItemCard.css";

function ItemCard({ clothingItem, handleItemCardClick }) {
  return (
    <li className="clothing__card">
      <p className="clothing__card-title">{clothingItem.name}</p>
      <img
        src={clothingItem.link}
        alt={clothingItem.name}
        className="clothing__card-image"
        onClick={() => handleItemCardClick(clothingItem)}
      />
    </li>
  );
}

export default ItemCard;
