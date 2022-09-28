import React, { useEffect } from "react";
import { Button, Modal } from "flowbite-react";

import { BsCheckCircleFill } from "react-icons/bs";
import useModal from "../../../../hooks/useModal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function BlankModal({ ...props }: any) {
  const { modalBlank, handleModalBlank }: any = useModal();
  const [data, setData] = useState(modalBlank);
  const navigate = useNavigate();

  function onSubmit() {
    if (data) {
      if (data.url) {
        navigate(data.url);
      } else {
        handleModalBlank({ isShow: false });
      }
    }
    return;
  }

  function onCancel() {
    handleModalBlank({
      isShow: false,
      text: null,
      url: null,
      onAction: null,
      buttonText: null,
      onSubmit: null,
    });
  }
  useEffect(() => {
    setData(modalBlank);
  }, [modalBlank]);
  return (
    <Modal show={data ? data.isShow : false} size="2xl" onClose={onCancel}>
      <Modal.Header>
        <div className="flex items-center justify-center">
          {data && data.text && data.text.title}
        </div>
      </Modal.Header>
      <Modal.Body style={{ padding: "10px 24px" }}>{props.children}</Modal.Body>
    </Modal>
  );
}

export default BlankModal;
