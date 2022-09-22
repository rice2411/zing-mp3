import React from "react";
import useTheme from "../../../hooks/useTheme";
import Actions from "./Actions";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const { styles }: any = useTheme();
  return (
    <div
      className={`min-h-[70px] max-h-[70px] w-full flex  py-2 items-center ${styles.navbar.textColor} `}
    >
      <Navigation />
      <SearchBar />
      <Actions />
    </div>
  );
};

export default Navbar;
