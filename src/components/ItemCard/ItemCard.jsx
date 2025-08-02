import "../ItemCard/ItemCard.css";

function ItemCard({ clothingItem }) {
  const tShirt = clothingItem[4];
  return (
    <li className="clothing__card">
      <p className="clothing__card-title">{tShirt.name}</p>
      <img
        src={tShirt.link}
        alt={tShirt.name}
        className="clothing__card-image"
      />
    </li>
  );
}

export default ItemCard;
