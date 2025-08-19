import "./Sidebar.css";
import headerAvatar from "../../assets/header__avatar.svg";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <img
        src={headerAvatar}
        alt="Profile image."
        className="sidebar__avatar"
      />
      <div className="sidebar__content">
        <h2 className="sidebar__profile">Terrence Tegegne</h2>
        <button className="sidebar__profile-data">Change profile data</button>
        <button className="sidebar__profile-logout">Log out</button>
      </div>
    </section>
  );
};
export default Sidebar;
