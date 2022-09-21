import React, { useEffect, useState } from "react";
import { Button, Modal } from "flowbite-react";

import { HiOutlineExclamationCircle } from "react-icons/hi";
import useModal from "../../../../hooks/useModal";
import { useNavigate } from "react-router-dom";

function ConfirmModal() {
  const { modalConfirm, handleModalConfirm }: any = useModal();
  const navigate = useNavigate();

  const [data, setData] = useState(modalConfirm);
  function onSubmit() {
    if (data) {
      if (data.url) {
        navigate(data.url);
      } else {
        handleModalConfirm({ isShow: false });
      }
    }
    return;
  }
  function onCancel() {
    handleModalConfirm({
      isShow: false,
      text: null,
      url: null,
      onAction: null,
      buttonText: null,
      onSubmit: null,
    });
  }
  useEffect(() => {
    setData(modalConfirm);
  }, [modalConfirm]);
  return (
    <Modal show={data ? data.isShow : false} size="lg" onClose={onCancel}>
      <Modal.Header>
        <div className="flex items-center justify-center">
          <HiOutlineExclamationCircle className="mr-2 " />
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
              color="failure"
              onClick={data && (data.onAction ? data.onAction : onSubmit)}
            >
              {data && (data.buttonText ? data.buttonText : "Đồng ý")}
            </Button>
            <Button color="gray" onClick={onCancel}>
              Huỷ
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ConfirmModal;
