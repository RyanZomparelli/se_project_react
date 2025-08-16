const ClothesSection = ({ clothingItem, handleItemCardClick }) => {
  return (
    <li className="clothing__card">
      <p className="clothing__card-title">{clothingItem.name}</p>
      <img
        src={clothingItem.imageUrl}
        alt={clothingItem.name}
        className="clothing__card-image"
        onClick={() => handleItemCardClick(clothingItem)}
      />
    </li>
  );
};

export default ClothesSection;
