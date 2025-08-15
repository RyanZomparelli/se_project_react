import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
const Profile = ({ weather, clothingItem, handleItemCardClick }) => {
  return (
    <div className="profile">
      <SideBar />
      <div className="profile__clothing-container">
        <div className="profile__btn-container">
          <p className="profile__text">Your Items</p>

          <button className="profile__add-btn">+ Add new</button>
        </div>
        <ul className="profile__clothing-list">
          {clothingItem
            .filter((item) => {
              return item.weather === weather.tempFeel;
            })
            .map((item) => {
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
