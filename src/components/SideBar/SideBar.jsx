import headerAvatar from "../../assets/header__avatar.svg";
import "./SideBar.css";
const SideBar = () => {
  return (
    <h1 className="header__name">
      <img
        src={headerAvatar}
        alt="Profile image."
        className="sidebar__avatar"
      />
      Terrence Tegegne
    </h1>
  );
};
export default SideBar;
