import React, { useEffect, useState } from "react";

import { Button, Modal } from "flowbite-react";

import { IoIosWarning } from "react-icons/io";
import useModal from "../../../../hooks/useModal";
import { useNavigate } from "react-router-dom";

function ErrorModal() {
  const { modalError, handleModalError }: any = useModal();

  const navigate = useNavigate();
  const [data, setData] = useState(modalError);
  function onSubmit() {
    if (data) {
      if (data.url) {
        navigate(data.url);
      } else {
        handleModalError({ isShow: false });
      }
    }
    return;
  }
  useEffect(() => {
    setData(modalError);
  }, [modalError]);
  return (
    <Modal show={data ? data.isShow : false} size="lg">
      <Modal.Header>
        <div className="flex items-center justify-center">
          <IoIosWarning className="mr-2 text-red-500" />
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
              {data && (data.buttonText ? data.buttonText : "Hoàn Tất")}
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ErrorModal;
