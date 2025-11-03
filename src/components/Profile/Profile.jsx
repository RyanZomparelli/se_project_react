import "./Profile.css";

//Internal component imports
import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({
  clothingItems,
  handleItemCardClick,
  onModalOpen,
  handleCardLike,
  handleSignOut,
}) => {
  return (
    <div className="profile">
      <Sidebar onModalOpen={onModalOpen} handleSignOut={handleSignOut} />
      <ClothesSection
        onModalOpen={onModalOpen}
        clothingItems={clothingItems}
        handleItemCardClick={handleItemCardClick}
        handleCardLike={handleCardLike}
      />
    </div>
  );
};

export default Profile;
