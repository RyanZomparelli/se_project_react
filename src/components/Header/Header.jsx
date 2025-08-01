import "./Header.css";
import headerLogo from "../../assets/wtwr.svg";
import headerAvatar from "../../assets/header__avatar.svg";

function Header() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <div className="header">
      <div className="header__container">
        <img className="header__logo" src={headerLogo} alt="WTWR Logo." />
        <h1 className="header__date">{currentDate}, Weather API</h1>
      </div>
      <div className="header__nav-bar">
        <button className="header__add-btn">+ Add clothes</button>
        <h2 className="header__name">Terrence Tegegne</h2>
        <img
          src={headerAvatar}
          alt="Profile image."
          className="header__avatar"
        />
      </div>
    </div>
  );
}

export default Header;
