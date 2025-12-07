//Save coordinates to localStorage for persistant location even when logged out.
export const saveUserCoordinates = (coordinates) => {
  localStorage.setItem("userCoordinates", JSON.stringify(coordinates));
};

export const getUserCoordinates = () => {
  const stored = localStorage.getItem("userCoordinates");
  return stored ? JSON.parse(stored) : null;
};

// To reiterate, the city name that is returned from the zipcode api is better than
// the city name that is returned from the weather api using the coordinates from
// the zipcode api. So, in cases where the user in not logged in the locationName state is lost
// and the city name from the weather api is used. So to prevent that I save the
// location name in localStorage.

export const saveLocation = (locationName) => {
  localStorage.setItem("location", locationName);
};

export const getLocation = () => {
  const stored = localStorage.getItem("location");
  return stored ? stored : null;
};
