import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const ClothesSection = ({
  clothingItem,
  handleItemCardClick,
  handleCardLike,
}) => {
  const { currentUser } = useContext(CurrentUserContext);
  const isOwnCard = clothingItem.owner === currentUser.user._id;

  const isLiked = clothingItem.likes.some(
    (_id) => _id === currentUser.user._id
  );

  const handleLike = () => {
    console.log("From handleLike in ItemCard: ", isLiked);
    handleCardLike({ _id: clothingItem._id, isLiked });
  };

  return (
    <>
      {isOwnCard && (
        <li className="clothing__card">
          <div className="clothing__card-header">
            <p className="clothing__card-title">{clothingItem.name}</p>
            {isLiked ? (
              <button
                className="clothing__card-likebtn"
                onClick={handleLike}
              ></button>
            ) : (
              <button
                className="clothing__card-unlikedbtn"
                onClick={handleLike}
              ></button>
            )}
          </div>
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
