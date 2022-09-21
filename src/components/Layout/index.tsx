import React from "react";

import useTheme from "../../hooks/useTheme";
import Modal from "../../shared/small_components/Modal";
import SiderBar from "../Layout/sidebar/index";

export default function Layout({ route, ...props }: any) {
  const { handleChangeTheme }: any = useTheme();
  const { styles }: any = useTheme();

  const handle = () => {
    handleChangeTheme("dark", "red");
  };
  const handle2 = () => {
    handleChangeTheme("dark", "purple");
  };
  return (
    <div className={`${styles.body.backgroundColor}`}>
      <div className="flex">
        <SiderBar />
        {props.children}
        <button onClick={handle}>tâm linh vãi cả bìu</button>
        <button onClick={handle2}>tâm linh vãi cả bìu2</button>
      </div>

      <Modal />
    </div>
  );
}
