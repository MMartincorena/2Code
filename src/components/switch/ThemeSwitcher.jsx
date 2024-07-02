import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, FormControlLabel } from "@mui/material";
import { toggleTheme } from "../../slices/sliceMUI";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const modeApp = useSelector((state) => state.reducerMui.modeApp);

  const handleChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <FormControlLabel
      control={<Switch checked={modeApp === "dark"} onChange={handleChange} />}
      label={modeApp === "dark" ? "Dark Mode" : "Light Mode"}
    />
  );
};

export default ThemeSwitcher;
