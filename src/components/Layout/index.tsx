import React from "react";

import useTheme from "../../hooks/useTheme";
import Modal from "../../shared/small_components/Modal";
import SiderBar from "./Sidebar/index";
import Navbar from "./Navbar";
import Scrollbar from "../../shared/small_components/Scrollbar";
import useAudio from "../../hooks/useAudio";
import ModalVip from "../Shared/ModalVip";
import { useLocation } from "react-router-dom";
import Lyrics from "../Shared/Lyrics";
import Playlist from "../Playlist";

export default function Layout({ route, ...props }: any) {
  const location = useLocation();
  const { audio, modalVip, setModalVip }: any = useAudio();
  const { styles }: any = useTheme();

  return (
    <div className={`${styles.body.backgroundColor}`}>
      <Lyrics />
      <div className="flex h-screen  relative  ">
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
      <Playlist />
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
