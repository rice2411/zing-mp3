import { createContext } from "react";
import { useState, useEffect, SetStateAction } from "react";
import { MODE } from "../constant/mode/index";

const ThemeContext = createContext({});
export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState(
    typeof localStorage.getItem("theme") !== "undefined" &&
      localStorage.getItem("theme") !== null
      ? localStorage.getItem("theme")
      : MODE[0].queryName
  );
  const [color, setColor] = useState(
    typeof localStorage.getItem("color") !== "undefined" &&
      localStorage.getItem("color") !== null
      ? localStorage.getItem("color")
      : MODE[0].children[0].queryName
  );
  const [styles, setStyles] = useState(
    typeof localStorage.getItem("styles") !== "undefined" &&
      localStorage.getItem("styles") !== null
      ? JSON.parse(localStorage.getItem("styles"))
      : MODE[0].children[0].components
  );

  const handleChangeTheme = (_theme: string, _color: string) => {
    const themes = [...MODE];
    themes.map((theme) => {
      if (theme.queryName === _theme) {
        setTheme(theme.queryName);
        localStorage.setItem("theme", theme.queryName);
        const colors = [...theme.children];
        colors.map((color) => {
          if (color.queryName == _color) {
            setStyles(color.components);
            setColor(color.queryName);
            localStorage.setItem("color", color.queryName);
            localStorage.setItem("styles", JSON.stringify(color.components));
          }
        });
      }
    });
  };

  return (
    <ThemeContext.Provider value={{ styles, theme, color, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
