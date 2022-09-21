import { useContext } from "react";

import ThemeContext from "../context/mode";

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
