import React, { useEffect, useRef, useState } from "react";
import HeaderSideBar from "./Header/index";
import BodySideBar from "./Body/index";
import FooterSideBar from "./Footer/index";
import { widthDefaultValue } from "./styles";

import useWindowSize from "../../../hooks/useWindowSize";

import useTheme from "../../../hooks/useTheme";
import Player from "../Audio/Player";
import useAudio from "../../../hooks/useAudio";
import Audio from "../Audio";
import "./styles.css";

export default function SiderBar() {
  const { audio, isShowLyrics }: any = useAudio();
  const { width }: any = useWindowSize();
  const { styles }: any = useTheme();
  const [withDefault, setWithDefault] = useState(widthDefaultValue);

  const [isToggle, setIsToggle] = useState(false);
  const sidebarRef = useRef(null);

  const handleToggleSidebar = () => {
    if (withDefault === widthDefaultValue) {
      setWithDefault("w-60");
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
        className={`h-screen  xl:w-60 lg:w-60 ${withDefault} transition-all`}
        ref={sidebarRef}
      >
        <div
          className={`pt-4 ${styles.sideBar.backgroundColor} h-screen flex-col flex `}
        >
          <HeaderSideBar isToggle={isToggle} />
          <BodySideBar isToggle={isToggle} />
          <div className="flex justify-center  ">
            <FooterSideBar
              handleToggleSidebar={handleToggleSidebar}
              isToggle={isToggle}
            />
          </div>
          {audio != "" ? (
            <div className="">
              <Audio />
              <div
                className={`hid-box  ${
                  isShowLyrics ? "top-0 z-[9999]" : "hidden"
                }`}
              >
                <h1>CSS3 slide up</h1>
                <p>
                  This is a quick demo of slide-up effect using CSS animation
                  when hover the box. No JS required!
                </p>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </aside>
    </>
  );
}
