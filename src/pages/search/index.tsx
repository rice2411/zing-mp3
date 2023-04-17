import React from "react";
import Search from "../../components/Search";
import { Outlet } from "react-router-dom";

const SearchPage = () => {
  return (
    <Search>
      <Outlet></Outlet>
    </Search>
  );
};

export default SearchPage;
