import { Link } from "react-router-dom";
import { useContext } from "react";
import "./MobileMenu.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import headerAvatar from "../../assets/header__avatar.svg";

const MobileMenu = ({ menuOpened, onToggle, onOpen }) => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <nav className="mobile-menu">
      <div
        className={
          menuOpened
            ? "mobile-menu__nav-container_opened"
            : "mobile-menu__nav-container"
        }
      >
        <button className="mobile-menu__btn-close" onClick={onToggle}></button>
        <Link to="/profile" className="mobile-menu__profile" onClick={onToggle}>
          Zomp
          <img
            src={headerAvatar}
            alt="Profile image."
            className="header__avatar"
          />
        </Link>
        <button
          className="mobile-menu__add-btn"
          onClick={() => onOpen("add-garment")}
        >
          + Add clothes
        </button>
        <ToggleSwitch />
      </div>
    </nav>
  );
};

export default MobileMenu;
