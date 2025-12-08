//External library imports
import { Link } from "react-router-dom";
import { useContext } from "react";

//Component CSS file
import "./Header.css";

//Internal component imports
import headerLogo from "../../assets/wtwr.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import MobileMenu from "../MobileMenu/MobileMenu";
import Avatar from "../Avatar/Avatar";

// Utility imports
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({
  weather,
  locationName,
  isMobileMenuOpened,
  onMobileMenuToggle,
  onModalOpen,
}) {
  // Subscribe to the context
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  const city = locationName ? locationName : weather.location;

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
          {/* The location api name field can be different between the weather 
          api's location.name field so I use the getCoordinates() data from the 
          location api for the name.*/}
          {currentDate}, {city}
        </h1>
      </div>
      <div className="header__nav-bar">
        <ToggleSwitch />
        {!isLoggedIn ? (
          <>
            <button
              className="header__signup-btn"
              onClick={() => onModalOpen("sign-up")}
            >
              Sign Up
            </button>
            <button
              className="header__login-btn"
              onClick={() => onModalOpen("log-in")}
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
              <Avatar src={currentUser?.user?.avatar} />
            </Link>
          </>
        )}
        <button
          className={
            isMobileMenuOpened ? "mobile-menu__btn_opened" : "mobile-menu__btn"
          }
          onClick={onMobileMenuToggle}
        ></button>
      </div>
    </header>
  );
}

export default Header;
