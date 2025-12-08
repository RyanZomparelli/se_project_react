import { useContext, useState } from "react";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Avatar.css";

// Sidebar uses a bigger avatar than Header and MobileMenu so I leave the option to
// pass classNames as props with default empty string values for Header and MobileMenu.
const Avatar = ({ src, className = "", placeHolderClassName = "" }) => {
  const { currentUser } = useContext(CurrentUserContext);

  const [showPlaceholder, setShowPlaceholder] = useState(false);

  // Extract the first letter of user's name to create the placeholder avatar as
  // a fall back.
  const firstLetter = currentUser.user?.name?.[0];

  return showPlaceholder ? (
    <h2 className={`avatar__placeholder ${placeHolderClassName}`}>
      {firstLetter}
    </h2>
  ) : (
    // onError is a React eventListener like onClick. When used on
    // an <img> element it executes a provided callback when the
    // image fails to load (like when the URL is broken or the image doesn't exist).
    <img
      src={src}
      alt="Profile Avatar."
      className={`avatar ${className}`}
      onError={() => setShowPlaceholder(true)}
    />
  );
};

export default Avatar;
