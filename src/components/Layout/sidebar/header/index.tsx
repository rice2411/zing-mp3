import React from "react";

import Logo from "./logo";

export default function HeaderSideBar({ isToggle }: any) {
  return (
    <>
      <Logo isToggle={isToggle} />
    </>
  );
}
