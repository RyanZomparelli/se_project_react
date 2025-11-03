//External library imports
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//Component CSS file
import "./App.css";

//Internal component imports
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import Footer from "../Footer/Footer.jsx";
import Profile from "../Profile/Profile.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import ErrorModal from "../ErrorModal/ErrorModal.jsx";
import EditProfileModal from "../EditProfileModal/EditProfileModal.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";

//Utility/API imports
import { coordinates, apiKey } from "../../utils/constants.js";
import { getWeatherData, filterWeatherData } from "../../utils/weatherApi.js";
import * as api from "../../utils/api.js";
import * as auth from "../../utils/auth.js";
import * as jwt from "../../utils/token.js";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [activeModal, setActiveModal] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmMsg, setConfirmMsg] = useState("");
  // Authorization state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  // HELPERS

  const handleOpenModal = (modal) => {
    setActiveModal(modal);
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleItemCardClick = (card) => {
    setActiveModal("item-modal");
    setSelectedItem(card);
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  };

  // HANDLERS

  // App handles navigation and routing and controls global state like isLoggedIn
  // so it makes sense to handle registration and login here. We just need to pass the data
  // from the Register and login components up to App(here).
  const handleRegistration = async (data) => {
    // Registration should automatically log in new users after regestration and
    //  notify the user at each stage if there is an issue and how to proceed.
    setIsLoading(true);
    let userData;
    try {
      userData = await auth.register(data);
      if (userData) {
        // Future update: enhanced loading component or message modal with a
        // setTimout that says successful registration with a spinner that says logging in.
        // This changes the loading message rendered at the top of App's jsx.
        setConfirmMsg(`Registration successful! Logging in...`);

        // Nested try and catch block to handle errors at each stage of registration.
        // This try/catch will handle login only if registration is successful.
        try {
          // Sneaky... WTWR API /signup route doesn't return the password. Use the input data instead.
          const tokenData = await auth.login(
            userData.user.email,
            data.password
          );

          jwt.setToken(tokenData.token);
          const user = await auth.getCurrentUser(tokenData.token);
          setCurrentUser(user);
          setIsLoggedIn(true);
          handleCloseModal();
        } catch (err) {
          setErrorMessage(`Login failed...`);
          console.error(err.message);
          handleOpenModal("error-modal");
          // Clean up.
        } finally {
          setTimeout(() => {
            setIsLoading(false);
            setConfirmMsg("");
          }, 2000);
        }
      }
      // This will notify the user and handle registration errors before login is triggered.
    } catch (err) {
      setErrorMessage(`Registration failed. ${err.message}.`);
      handleOpenModal("error-modal");
      setTimeout(() => {
        setIsLoading(false);
        setConfirmMsg("");
      }, 2000);
      // Stop here if registration fails.
      return;
    }
  };

  // The authentication system used used in this app follows a two route process:
  // STEP 1: login and store token /signin. STEP 2: fetch user data with token /users/me.
  // This approach has several benefits:
  // - Security: Separates authentication from user data. Every route other than
  //   /signup is protected on the back end with authorization middleware.
  // - Flexibility: User data can be updated without re-authentication.
  // - Consistency: Same endpoint (/users/me) can be used to check token validity on app startup.
  const handleLogin = async ({ email, password }) => {
    setIsLoading(true);
    try {
      setConfirmMsg("Logging in...");
      const data = await auth.login(email, password);
      if (data.token) {
        jwt.setToken(data.token);
        const user = await auth.getCurrentUser(data.token);
        if (user) {
          setCurrentUser(user);
          setIsLoggedIn(true);
          handleCloseModal();
        }
      }
    } catch (err) {
      setErrorMessage(`Sorry, ${err.message}`);
      console.error("Login failed", err.message);
      handleOpenModal("error-modal");
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        setConfirmMsg("");
      }, 2000);
    }
  };

  const handleSignOut = () => {
    setIsLoading(true);
    setConfirmMsg("Come back soon ☀️");
    jwt.removeToken();
    setIsLoggedIn(false);
    setCurrentUser({});
    setTimeout(() => {
      setIsLoading(false);
      setConfirmMsg("");
    }, 2000);
  };

  // Why not in a useEffect hook? These are user-triggered actions. They should
  // only happen when the user decides to perform them.
  // Use useEffect for API calls that should happen automatically (side effects).
  // Use event handlers for API calls triggered by user actions.
  const handleAddItemSubmit = (item) => {
    const token = jwt.getToken();
    api
      .addClothingItem(item, token)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => console.error("Failed to add a new item:", error));
  };

  const handleItemDelete = (removeId) => {
    const token = jwt.getToken();
    api
      .removeClothingItem(removeId, token)
      .then((data) => {
        const remainingCards = clothingItems.filter((item) => {
          return item._id !== removeId;
        });
        setClothingItems(remainingCards);
        handleCloseModal();
      })
      .catch((error) => console.error("Failed to remove item:", error));
  };

  const handleEditProfile = async (values) => {
    setIsLoading(true);
    setConfirmMsg("Saving...");
    try {
      const token = jwt.getToken();
      const user = await api.editProfile(values, token);
      setCurrentUser(user);
      handleCloseModal();
      setTimeout(() => setConfirmMsg("Save successful!"), 1000);
    } catch (err) {
      setErrorMessage("We're sorry, failed to save update..");
      console.error(err.message);
      handleOpenModal("error-modal");
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        setConfirmMsg("");
      }, 2000);
    }
  };

  const handleCardLike = ({ _id, isLiked }) => {
    // Get token for the request
    const token = jwt.getToken();
    // Check if the card is or isn't liked..
    !isLiked // If not liked, send a request to add the user's id to the card's likes array in the DB.
      ? api
          .addCardLike(_id, token) // The first parameter is the item id.
          .then((updatedItem) => {
            // WTWR API: returns an updated clothing card with a new Object_id(userId) in it's likes array.
            setClothingItems((clothingItems) => {
              return clothingItems.map((item) => {
                return item._id === _id ? updatedItem : item; // item id match the id passed in the request?
              }); // Return the updated item, otherwise keep the same item.
            });
          })
          .catch(console.error)
      : // if not, send a request to remove the user's id from the card's likes array
        api
          .removeCardLike(_id, token)
          .then((updatedItem) => {
            setClothingItems((clothingItems) => {
              return clothingItems.map((item) => {
                return item._id === _id ? updatedItem : item;
              });
            });
          })
          .catch(console.error);
  };

  // SIDE-EFFECTS

  // We use the token at login and check for it on inital page load to keep users
  // logged in for the life of the token or until they explicitly log out.
  useEffect(() => {
    const token = jwt.getToken();
    if (token) {
      auth
        .getCurrentUser(token)
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
        })
        .catch(() => {
          jwt.removeToken();
          setIsLoggedIn(false);
        });
    }
  }, []);

  // These run automatically when the app starts. They're side effects of the
  // component mounting. Use useEffect.
  // Weather data, loads automatically (side-effect), when component mounts (renders).
  useEffect(() => {
    getWeatherData(coordinates, apiKey)
      .then((data) => {
        if (data) {
          const weatherData = filterWeatherData(data);
          setWeather(weatherData);
          //Somtimes loading happens so fast it creates a jarring flash
          //This smooths out loading
          setTimeout(() => setIsLoading(false), 1000);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Failed to fetch data:", error);
      });
    // Note the empty array dependency. This means the useEffect will run once
    // on page load.
  }, []);

  // Initial clothing items. Loads when component mounts (side-effect). useEffect...
  useEffect(() => {
    api
      .getClothingItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="page">
          <div className="page__loading-overlay">
            <p className="page__loading-message">
              {confirmMsg ? confirmMsg : "Loading...😎"}
            </p>
          </div>
        </div>
      ) : (
        // Global source of truth for authorization state. No prop drilling.
        <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
          <div className="page">
            <CurrentTemperatureUnitContext.Provider
              value={{ currentTemperatureUnit, handleToggleSwitchChange }}
            >
              <Header
                weather={weather}
                onModalOpen={handleOpenModal}
                isMobileMenuOpened={isMobileMenuOpened}
                onMobileMenuToggle={toggleMobileMenu}
              />
              <Routes>
                <Route
                  path="/"
                  element={
                    <Main
                      weather={weather}
                      clothingItems={clothingItems}
                      handleItemCardClick={handleItemCardClick}
                      isMobileMenuOpened={isMobileMenuOpened}
                      handleCardLike={handleCardLike}
                    />
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile
                        clothingItems={clothingItems}
                        handleItemCardClick={handleItemCardClick}
                        onModalOpen={handleOpenModal}
                        handleCardLike={handleCardLike}
                        handleSignOut={handleSignOut}
                      />
                    </ProtectedRoute>
                  }
                />
                {/* Catch all route for non existing endpoints */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </CurrentTemperatureUnitContext.Provider>
            {activeModal === "error-modal" && (
              <ErrorModal
                onClose={handleCloseModal}
                error={errorMessage}
                activeModal={activeModal}
              />
            )}
            {activeModal === "sign-up" && (
              <RegisterModal
                onClose={handleCloseModal}
                handleOpenModal={handleOpenModal}
                handleRegistration={handleRegistration}
                activeModal={activeModal}
              />
            )}
            {activeModal === "log-in" && (
              <LoginModal
                onClose={handleCloseModal}
                handleOpenModal={handleOpenModal}
                handleLogin={handleLogin}
                activeModal={activeModal}
              />
            )}
            {activeModal === "edit-profile" && (
              <EditProfileModal
                onClose={handleCloseModal}
                handleEditProfile={handleEditProfile}
                activeModal={activeModal}
              />
            )}
            {activeModal === "add-garment" && (
              <AddItemModal
                onClose={handleCloseModal}
                onAddItem={handleAddItemSubmit}
                activeModal={activeModal}
              />
            )}
            {activeModal === "item-modal" && (
              <ItemModal
                onClose={handleCloseModal}
                card={selectedItem}
                onModalOpen={handleOpenModal}
                activeModal={activeModal}
              />
            )}
            {activeModal === "delete-modal" && (
              <DeleteConfirmationModal
                card={selectedItem}
                onDelete={handleItemDelete}
                onClose={handleCloseModal}
                activeModal={activeModal}
              />
            )}
            <Footer />
          </div>
        </CurrentUserContext.Provider>
      )}
    </>
  );
}

export default App;
