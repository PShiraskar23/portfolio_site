import { useState } from "react";
import { useTheme } from "../../Context/themeContext";

import "./style.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import Brightness2Icon from "@mui/icons-material/Brightness2";

const ToggleBtn = () => {
  const [selected, setSelected] = useState(false);
  const { theme, toggleTheme } = useTheme();
  // console.log("ToggleBtn", theme);

  const handleClick = () => {
    setSelected(!selected);
    toggleTheme();
    // localStorage.setItem("theme",theme === "light" ? "dark" : "light");
  };
  console.log(localStorage.getItem("theme"));
  return (
    <div
      className={`container ${!selected ? "on" : "off"}`}
      onClick={handleClick}
    >
      <div className="tube">
        <div className="circle">
          {selected ? (
            <LightModeIcon className="icon sun" />
          ) : (
            <Brightness2Icon className="icon moon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ToggleBtn;
