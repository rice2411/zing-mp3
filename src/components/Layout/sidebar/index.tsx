import React, { useEffect, useRef, useState } from "react";
import HeaderSideBar from "./header/index";
import BodySideBar from "./body/index";
import FooterSideBar from "./footer/index";
import { widthDefaultValue } from "./styles";

import useWindowSize from "../../../hooks/useWindowSize";
import { Audio } from "../audio";
import useTheme from "../../../hooks/useTheme";

export default function SiderBar() {
  const { width }: any = useWindowSize();
  const { styles }: any = useTheme();
  const [withDefault, setWithDefault] = useState(widthDefaultValue);

  const [isToggle, setIsToggle] = useState(false);
  const sidebarRef = useRef(null);

  const handleToggleSidebar = () => {
    if (withDefault === widthDefaultValue) {
      setWithDefault("w-64");
      setIsToggle(true);
    } else {
      setWithDefault(widthDefaultValue);
      setIsToggle(false);
    }
  };
  const handleFixWidthSidebar = () => {
    if (width < 1024 && !isToggle) {
      // @ts-ignore: Object is possibly 'null'.

      sidebarRef.current.style.width = "80px";
    } else {
      // @ts-ignore: Object is possibly 'null'.
      sidebarRef.current.style.width = "";
    }
  };
  useEffect(() => {
    handleFixWidthSidebar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, isToggle]);
  return (
    <>
      <aside
        className={`h-screen  xl:w-64 lg:w-64 ${withDefault} transition-all `}
        ref={sidebarRef}
      >
        <div
          className={`pt-4 ${styles.sideBar.backgroundColor} h-screen flex-col flex `}
        >
          <HeaderSideBar isToggle={isToggle} />
          <BodySideBar isToggle={isToggle} />
          <div className="flex justify-center mt-auto  ">
            <FooterSideBar
              handleToggleSidebar={handleToggleSidebar}
              isToggle={isToggle}
            />
          </div>
          <Audio />
        </div>
      </aside>
    </>
  );
}
