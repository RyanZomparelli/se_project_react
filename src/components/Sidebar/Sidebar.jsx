import "./Sidebar.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const Sidebar = () => {
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
        <button className="sidebar__profile-data">Change profile data</button>
        <button className="sidebar__profile-logout">Log out</button>
      </div>
    </section>
  );
};
export default Sidebar;
