//External library imports
import { Link } from "react-router-dom";

//Component CSS file
import "./Header.css";

//Internal component imports
import headerLogo from "../../assets/wtwr.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import MobileMenu from "../MobileMenu/MobileMenu";

// Utility imports
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function Header({
  weather,
  isMobileMenuOpened,
  onMobileMenuToggle,
  onModalOpen,
}) {
  // Subscribe to the context
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  // Extract the first letter of user's name to create the placeholder avatar as
  // a fall back.
  const firstLetter = currentUser.user?.name[0];

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header page__section">
      <MobileMenu
        onOpen={onModalOpen}
        menuOpened={isMobileMenuOpened}
        onToggle={onMobileMenuToggle}
      />
      <div className="header__container">
        <Link to="/">
          <img
            className={
              isMobileMenuOpened ? "header__logo_menu_opened" : "header__logo"
            }
            src={headerLogo}
            alt="WTWR Logo."
          />
        </Link>
        <h1
          className={
            isMobileMenuOpened ? "header__date_menu_opened" : "header__date"
          }
        >
          {currentDate}, {weather.location}
        </h1>
      </div>
      <div className="header__nav-bar">
        <ToggleSwitch />
        {!isLoggedIn ? (
          <>
            <button
              className="header__signup-btn"
              onClick={() => onModalOpen("sign up")}
            >
              Sign Up
            </button>
            <button
              className="header__login-btn"
              onClick={() => onModalOpen("log in")}
            >
              Log In
            </button>
          </>
        ) : (
          <>
            <button
              className="header__add-btn"
              onClick={() => onModalOpen("add-garment")}
            >
              + Add clothes
            </button>

            <Link to="/profile" className="header__name">
              {currentUser.user.name}
              {!currentUser.user.avatar ? (
                <h2 className="header__avatar_placeholder">{firstLetter}</h2>
              ) : (
                <img
                  src={currentUser.user.avatar}
                  alt="Profile image."
                  className="header__avatar"
                />
              )}
            </Link>
            <button
              className={
                isMobileMenuOpened
                  ? "mobile-menu__btn_opened"
                  : "mobile-menu__btn"
              }
              onClick={onMobileMenuToggle}
            ></button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
