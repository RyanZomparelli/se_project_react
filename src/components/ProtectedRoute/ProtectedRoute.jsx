import { Navigate } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(CurrentUserContext);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  // Otherwise, render the protected route's child component.
  return children;
};

export default ProtectedRoute;
