//External library imports
import { useContext } from "react";

//Utility imports
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );
  return (
    <>
      <input
        type="checkbox"
        className="switch"
        id="react-switch-new"
        onChange={handleToggleSwitchChange}
      />
      <label htmlFor="react-switch-new" className="switch__label">
        <span className={`switch__button`}></span>
        <div className="switch__scale">
          <span className="switch__scale_type_f">F</span>
          <span className="switch__scale_type_c">C</span>
        </div>
      </label>
    </>
  );
};

export default ToggleSwitch;
