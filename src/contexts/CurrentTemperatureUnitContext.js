import { createContext } from "react";

// Temperature context needs defaults because the app always has a temperature unit (F or C).
const CurrentTemperatureUnitContext = createContext({
  currentTemperatureUnit: "F",
  handleToggleSwitchChange: () => {},
});

export default CurrentTemperatureUnitContext;
