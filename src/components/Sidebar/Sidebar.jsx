import "./Sidebar.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const Sidebar = ({ onModalOpen, handleSignOut }) => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <section className="sidebar">
      <img
        src={currentUser.user.avatar}
        alt="Profile image."
        className="sidebar__avatar"
      />
      <div className="sidebar__content">
        <h2 className="sidebar__profile">{currentUser.user.name}</h2>
        <button
          className="sidebar__profile-data"
          onClick={() => onModalOpen("edit-profile")}
        >
          Change profile data
        </button>
        <button className="sidebar__profile-logout" onClick={handleSignOut}>
          Log out
        </button>
      </div>
    </section>
  );
};
export default Sidebar;
