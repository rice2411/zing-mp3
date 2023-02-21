import React from "react";

import useTheme from "../../hooks/useTheme";
import Modal from "../../shared/small_components/Modal";
import SiderBar from "./Sidebar/index";
import Navbar from "./Navbar";
import Scrollbar from "../../shared/small_components/Scrollbar";

export default function Layout({ route, ...props }: any) {
  const { handleChangeTheme }: any = useTheme();
  const { styles }: any = useTheme();

  return (
    <div className={`${styles.body.backgroundColor}`}>
      <div className="flex h-screen">
        <SiderBar />
        <div className="flex flex-col w-screen h-[calc(100vh_-_90px)] pl-[calc(100vw - 100%)]">
          <div className="mx-10 px-3">
            <Navbar />
          </div>
          <Scrollbar isHover={false} className="">
            <div className="mx-10">{props.children}</div>
          </Scrollbar>
        </div>
      </div>
      <Modal />
    </div>
  );
}
