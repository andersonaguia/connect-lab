import PropTypes from "prop-types";
import { CustomThemeContext } from "./CustomThemeContext";
import { useEffect, useState } from "react";
import { getTheme, setTheme } from "../../utils/localStorage/localStorage";
import { themeLight } from "../../themes/themeLight";
import { themeDark } from "../../themes/themeDark";

export const CustomThemeProvider = ({ children }) => {
  const [atualTheme, setAtualTheme] = useState("dark");

  useEffect(() => {
    const themeDefault = getTheme();
    if (themeDefault) {
      setTheme(themeDefault);
    }
  }, []);

  const handleTheme = () => {
    setAtualTheme((prev) => {
      const newValue = prev === "dark" ? "light" : "dark";
      setTheme(newValue);
      return newValue;
    });
  };

  const customTheme = atualTheme === "dark" ? themeDark : themeLight;

  return (
    <CustomThemeContext.Provider value={{ theme: customTheme, themeName: atualTheme, handleTheme }}>
      {children}
    </CustomThemeContext.Provider>
  );
};

CustomThemeProvider.propTypes = {
  children: PropTypes.node,
};