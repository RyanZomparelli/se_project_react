import { Link } from "react-router-dom";
import "./Header.css";
import headerLogo from "../../assets/wtwr.svg";
import headerAvatar from "../../assets/header__avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ weather, handleOpenModal }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header page__section">
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={headerLogo} alt="WTWR Logo." />
        </Link>
        <h1 className="header__date">
          {currentDate}, {weather.location}
        </h1>
      </div>
      <div className="header__nav-bar">
        <ToggleSwitch />
        <button
          className="header__add-btn"
          onClick={() => handleOpenModal("add-garment")}
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
      </div>
    </header>
  );
}

export default Header;
