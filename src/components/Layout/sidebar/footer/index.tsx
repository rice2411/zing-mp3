import React from "react";

import AddPLayList from "./addPLayList";
import { Toggle } from "./toggle";

export default function FooterSideBar({ handleToggleSidebar, isToggle }: any) {
  return (
    <>
      <AddPLayList />
      <Toggle handleToggleSidebar={handleToggleSidebar} isToggle={isToggle} />
    </>
  );
}
