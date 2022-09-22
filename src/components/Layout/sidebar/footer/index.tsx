import React from "react";

import AddPLayList from "./AddPLayList";
import { Toggle } from "./Toggle";

export default function FooterSideBar({ handleToggleSidebar, isToggle }: any) {
  return (
    <>
      <AddPLayList />
      <Toggle handleToggleSidebar={handleToggleSidebar} isToggle={isToggle} />
    </>
  );
}
