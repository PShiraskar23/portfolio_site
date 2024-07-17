import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem("theme");
  // const [theme, setTheme] = useState(storedTheme || 'light');
  // const [isDarkMode, setIsDarkMode] = useState(storedTheme || false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // const toggleTheme = () => {
  //   setIsDarkMode((prevState) => (prevState ? false : true));
  // };

  const toggleTheme = () => {
    // Toggle between 'light' and 'dark' themes
    // setIsDarkMode((prevTheme) => (prevTheme === true ? true : false));
    setIsDarkMode((prevTheme) => (!prevTheme));
  };

  const theme = isDarkMode ? "dark" : "light";
  // const theme = isDarkMode

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDarkMode]);

  useEffect(() => {
    // Save the current theme preference to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
