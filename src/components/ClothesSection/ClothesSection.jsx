import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const ClothesSection = ({ clothingItem, handleItemCardClick }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const isOwnCard = clothingItem.owner === currentUser.user._id;

  return (
    <>
      {isOwnCard && (
        <li className="clothing__card">
          <p className="clothing__card-title">{clothingItem.name}</p>
          <img
            src={clothingItem.imageUrl}
            alt={clothingItem.name}
            className="clothing__card-image"
            onClick={() => handleItemCardClick(clothingItem)}
          />
        </li>
      )}
    </>
  );
};

export default ClothesSection;
