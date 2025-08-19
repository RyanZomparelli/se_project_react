//External library imports
import { Link } from "react-router-dom";

//Component CSS file
import "./Header.css";

//Internal component imports
import headerLogo from "../../assets/wtwr.svg";
import headerAvatar from "../../assets/header__avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import MobileMenu from "../MobileMenu/MobileMenu";

function Header({
  weather,
  isMobileMenuOpened,
  onMobileMenuToggle,
  onModalOpen,
}) {
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
        <button
          className="header__add-btn"
          onClick={() => onModalOpen("add-garment")}
        >
          + Add clothes
        </button>

        <Link to="/profile" className="header__name">
          Terrence Tegegne
          <img
            src={headerAvatar}
            alt="Profile image."
            className="header__avatar"
          />
        </Link>
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
