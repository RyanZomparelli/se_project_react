import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );
  return (
    <>
      <input
        value={currentTemperatureUnit}
        type="checkbox"
        className="switch"
        id={`react-switch-new`}
        onChange={handleToggleSwitchChange}
      />
      <label
        htmlFor={`react-switch-new`}
        className="switch__label"
        // style={{
        //   background: isOn && "#06D6A0",
        // }}
      >
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
