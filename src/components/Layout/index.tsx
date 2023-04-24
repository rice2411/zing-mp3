import React from "react";

import useTheme from "../../hooks/useTheme";
import Modal from "../../shared/small_components/Modal";
import SiderBar from "./Sidebar/index";
import Navbar from "./Navbar";
import Scrollbar from "../../shared/small_components/Scrollbar";
import useAudio from "../../hooks/useAudio";
import ModalVip from "../Shared/ModalVip";
import { useLocation } from "react-router-dom";

export default function Layout({ route, ...props }: any) {
  const location = useLocation();
  const { audio, modalVip, setModalVip }: any = useAudio();
  const { styles }: any = useTheme();

  return (
    <div className={`${styles.body.backgroundColor}`}>
      <div className="flex h-screen">
        <SiderBar />
        <div
          className={`flex flex-col w-screen  ${
            audio ? "h-[calc(100vh_-_90px)]" : ""
          }  pl-[calc(100vw - 100%)]`}
        >
          <div className="">
            <Navbar />
          </div>
          <Scrollbar isHover={true} className="">
            <div
              className={`${
                location.pathname.includes("hub/detail") ? "" : "mx-10"
              }`}
            >
              {props.children}
            </div>
          </Scrollbar>
        </div>
      </div>
      <Modal />
      <ModalVip
        isShow={modalVip}
        handleClose={() => {
          setModalVip(false);
        }}
      />
    </div>
  );
}
