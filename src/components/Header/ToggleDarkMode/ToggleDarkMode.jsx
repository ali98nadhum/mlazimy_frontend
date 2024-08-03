import React from "react";
import "./ToggleDarkMode.css";
import {useStore} from "../../../store";

const ToggleDarkMode = () => {
  const {isDark , setIsDark} = useStore();
  return (
    <div>
      <div className="checkbox-wrapper-54">
        <label className="switch">
          <input type="checkbox" checked={isDark} onChange={() => setIsDark(!isDark)} />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default ToggleDarkMode;
