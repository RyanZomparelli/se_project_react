import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

// ClothesSection = The container/section for the profile page.
// - Holds the "Your Items" heading and "+ Add new" btn.
// - Contains the "Add New" button.
// - Contains the <ul> that wraps all clothing items.
// - Manages the overall layout of the clothes section.

const ClothesSection = ({
  onModalOpen,
  clothingItems,
  handleItemCardClick,
  handleCardLike,
}) => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <section className="clothing-section">
      <div className="clothing-section__btn-container">
        <p className="clothing-section__text">Your Items</p>

        <button
          className="clothing-section__add-btn"
          onClick={() => onModalOpen("add-garment")}
        >
          + Add new
        </button>
      </div>
      <ul className="clothing-section__clothing-list">
        {clothingItems.length === 0 ? (
          <p className="clothing-section__message">No added items yet</p>
        ) : (
          clothingItems.map((item) => {
            if (item.owner === currentUser.user._id) {
              return (
                <ItemCard
                  key={item._id}
                  clothingItem={item}
                  handleItemCardClick={handleItemCardClick}
                  handleCardLike={handleCardLike}
                />
              );
            }
          })
        )}
      </ul>
    </section>
  );
};

export default ClothesSection;
