import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "../ItemCard/ItemCard.css";

function ItemCard({ clothingItem, handleItemCardClick, handleCardLike }) {
  console.log("From ItemCard, ITEMS: ", clothingItem);
  const { currentUser } = useContext(CurrentUserContext);

  // Here and in ClothesSection to track liked status.
  const isLiked = clothingItem.likes.some(
    (_id) => _id === currentUser.user._id
  );

  const handleLike = () => {
    console.log("From handleLike in ItemCard: ", isLiked);
    handleCardLike({ _id: clothingItem._id, isLiked });
  };

  return (
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
        //When passing arguments to a callback function it's necessary to wrap
        // them in another function to avoid calling them immediately.
        //Using Anonymous Arrow Functions creates a new function on every render
        // so in larger applications this could cause performace issues and it
        // would be preferrable to create a proper wrapper function in the body
        // of the component that we would pass here as a 'refrence' as opposed to
        // another function.
        onClick={() => handleItemCardClick(clothingItem)}
      />
    </li>
  );
}

export default ItemCard;
