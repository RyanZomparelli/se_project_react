import "./SideBar.css";
import headerAvatar from "../../assets/header__avatar.svg";

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
