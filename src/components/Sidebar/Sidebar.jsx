import "./Sidebar.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import Avatar from "../Avatar/Avatar";

const Sidebar = ({ onModalOpen, handleSignOut }) => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <section className="sidebar">
      <Avatar
        src={currentUser?.user?.avatar}
        alt="Profile image"
        className="sidebar__avatar"
        placeHolderClassName="sidebar__avatar_placeholder"
      />
      <div className="sidebar__content">
        <h2 className="sidebar__profile">{currentUser.user?.name}</h2>
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
