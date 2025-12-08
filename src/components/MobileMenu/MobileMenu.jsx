import { Link } from "react-router-dom";
import { useContext } from "react";
import "./MobileMenu.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Avatar from "../Avatar/Avatar";

const MobileMenu = ({ menuOpened, onToggle, onOpen }) => {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);
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
        {!isLoggedIn ? (
          <>
            <button
              className="header__signup-btn"
              onClick={() => onOpen("sign-up")}
            >
              Sign Up
            </button>
            <button
              className="header__login-btn"
              onClick={() => onOpen("log-in")}
            >
              Log In
            </button>
          </>
        ) : (
          <>
            <Link
              to="/profile"
              className="mobile-menu__profile"
              onClick={onToggle}
            >
              {currentUser.user.name}
              <Avatar src={currentUser?.user?.avatar} />
            </Link>
            <button
              className="mobile-menu__add-btn"
              onClick={() => onOpen("add-garment")}
            >
              + Add clothes
            </button>
            <ToggleSwitch />
          </>
        )}
      </div>
    </nav>
  );
};

export default MobileMenu;
