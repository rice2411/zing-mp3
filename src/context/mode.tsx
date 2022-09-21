import { createContext } from "react";
import { useState, useEffect, SetStateAction } from "react";
import { MODE } from "../constant/mode";

const ThemeContext = createContext({});
export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState(MODE[0].queryName);
  const [styles, setStyles] = useState(MODE[0].children[0].components);

  const handleChangeTheme = (_theme: string, _color: string) => {
    const themes = [...MODE];
    themes.map((theme) => {
      if (theme.queryName === _theme) {
        setTheme(theme.queryName);
        const colors = [...theme.children];
        colors.map((color) => {
          if (color.queryName == _color) {
            setStyles(color.components);
          }
        });
      }
    });
  };

  return (
    <ThemeContext.Provider value={{ styles, theme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
