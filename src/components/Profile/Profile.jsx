import "./Profile.css";
import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";
const Profile = ({
  weather,
  clothingItems,
  handleItemCardClick,
  onModalOpen,
}) => {
  return (
    <div className="profile">
      <Sidebar />
      <div className="profile__clothing-container">
        <div className="profile__btn-container">
          <p className="profile__text">Your Items</p>

          <button
            className="profile__add-btn"
            onClick={() => onModalOpen("add-garment")}
          >
            + Add new
          </button>
        </div>
        <ul className="profile__clothing-list">
          {clothingItems.map((item) => {
            return (
              <ClothesSection
                key={item._id}
                clothingItem={item}
                handleItemCardClick={handleItemCardClick}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
