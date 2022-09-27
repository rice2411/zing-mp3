import React from "react";

import useTheme from "../../hooks/useTheme";
import Modal from "../../shared/small_components/Modal";
import SiderBar from "./Sidebar/index";
import Navbar from "./Navbar";
import { Carousel } from "flowbite-react";
import Test from "../Index";

export default function Layout({ route, ...props }: any) {
  const { handleChangeTheme }: any = useTheme();
  const { styles }: any = useTheme();

  return (
    <div className={`${styles.body.backgroundColor}`}>
      <div className="flex">
        <SiderBar />
        <div className="flex flex-col w-full mx-10">
          <Navbar />
          {props.children}
        </div>
      </div>

      <Modal />
    </div>
  );
}
