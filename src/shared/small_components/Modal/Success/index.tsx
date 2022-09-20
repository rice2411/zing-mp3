import React, { useEffect } from "react";
import { Button, Modal } from "flowbite-react";

import { BsCheckCircleFill } from "react-icons/bs";
import useModal from "../../../../hooks/useModal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SuccessModal() {
  const { modalSuccess, handleModalSuccess }: any = useModal();
  const [data, setData] = useState(modalSuccess);
  const navigate = useNavigate();

  function onSubmit() {
    if (data) {
      if (data.url) {
        navigate(data.url);
      } else {
        handleModalSuccess({ isShow: false });
      }
    }
    return;
  }
  function onCancel() {
    handleModalSuccess({
      isShow: false,
      text: null,
      url: null,
      onAction: null,
      buttonText: null,
      onSubmit: null,
    });
  }
  useEffect(() => {
    setData(modalSuccess);
  }, [modalSuccess]);
  return (
    <Modal show={data ? data.isShow : false} size="lg" onClose={onCancel}>
      <Modal.Header>
        <div className="flex items-center justify-center">
          <BsCheckCircleFill className="mr-2 text-green-500" />
          {data && data.text && data.text.title}
        </div>
      </Modal.Header>
      <Modal.Body style={{ padding: "10px 24px" }}>
        <div className="text-start">
          <h3 className="mb-5 text-lg font-normal text-gray-500  ">
            {data && data.text && data.text.description}
          </h3>

          <div className="flex justify-end gap-4">
            <Button
              color="success"
              onClick={data && (data.onAction ? data.onAction : onSubmit)}
            >
              {data && (data.buttonText ? data.buttonText : "Hoàn Tất")}
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default SuccessModal;
