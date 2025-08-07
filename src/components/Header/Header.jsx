import "./Header.css";
import headerLogo from "../../assets/wtwr.svg";
import headerAvatar from "../../assets/header__avatar.svg";

function Header({ weather, handleOpenModal }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header page__section">
      <div className="header__container">
        <img className="header__logo" src={headerLogo} alt="WTWR Logo." />
        <h1 className="header__date">
          {currentDate}, {weather.name}
        </h1>
      </div>
      <div className="header__nav-bar">
        <button
          className="header__add-btn"
          onClick={() => handleOpenModal("add-garment")}
        >
          + Add clothes
        </button>
        <h2 className="header__name">Terrence Tegegne</h2>
        <img
          src={headerAvatar}
          alt="Profile image."
          className="header__avatar"
        />
      </div>
    </header>
  );
}

export default Header;
