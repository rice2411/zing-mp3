import React, { useEffect, useRef, useState } from "react";
import HeaderSideBar from "./header/index";
import BodySideBar from "./body/index";
import FooterSideBar from "./footer/index";
import { widthDefaultValue } from "./styles";
import { PLayer } from "../player";
import useWindowSize from "../../../hooks/useWindowSize";

export default function SiderBar({ route }: any) {
  const { width }: any = useWindowSize();
  const [withDefault, setWithDefault] = useState(widthDefaultValue);

  const [isToggle, setIsToggle] = useState(false);
  const sidebarRef = useRef(null);

  const handleToggleSidebar = () => {
    if (withDefault == widthDefaultValue) {
      setWithDefault("64");
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
  }, [width, isToggle]);
  return (
    <>
      <aside
        className={`h-screen  xl:w-64 lg:w-64 w-${withDefault} transition-all `}
        ref={sidebarRef}
      >
        <div className=" pt-4 bg-[#2A213A] h-[100vh] flex-col flex">
          <HeaderSideBar isToggle={isToggle} />
          <BodySideBar route={route} isToggle={isToggle} />
          <div className="flex justify-center mt-auto  ">
            <FooterSideBar
              handleToggleSidebar={handleToggleSidebar}
              isToggle={isToggle}
            />
          </div>
          <PLayer />
        </div>
      </aside>
    </>
  );
}
