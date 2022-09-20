import { createContext } from "react";
import { useState, useEffect, SetStateAction } from "react";

const ModeContext = createContext({});
export const ModeProvider = ({ children }: any) => {
  const [mode, setMode] = useState("dark");

  const initMode = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleMode = () => {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      setMode("light");
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      setMode("dark");
    }
  };
  return (
    <ModeContext.Provider
      value={{
        mode,
        initMode,
        setMode,
        toggleMode,
      }}
    >
      {children}
    </ModeContext.Provider>
  );
};
export default ModeContext;
