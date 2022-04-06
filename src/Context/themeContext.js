import { createContext, useContext } from "react";
import { useState } from "react";
import { initialThemeValue } from "../helper";

const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(initialThemeValue);
  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
