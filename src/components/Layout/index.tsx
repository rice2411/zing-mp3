import React from "react";
import useModal from "../../hooks/useModal";
import Modal from "../../shared/small_components/Modal";
import SiderBar from "../Layout/sidebar/index";

export default function Layout({ route, ...props }: any) {
  const { handleModalSuccess }: any = useModal();
  const handle = () => {
    handleModalSuccess({
      isShow: true,
      text: {
        title: "Tâm lin",
        description: "vãi cả bìu",
      },
    });
  };
  return (
    <div className="">
      <div className="flex">
        <SiderBar route={route} />
        {props.children}
        <button onClick={handle}>tâm linh vãi cả bìu</button>
      </div>

      <Modal />
    </div>
  );
}
