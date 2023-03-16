import React, { useEffect } from "react";
import { Button, Modal } from "flowbite-react";

import { BsCheckCircleFill } from "react-icons/bs";
import useModal from "../../../../hooks/useModal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useTheme from "../../../../hooks/useTheme";

function BlankModal({ isShow, handleClose, className, ...props }: any) {
  const { modalBlank, handleModalBlank }: any = useModal();
  const [data, setData] = useState(modalBlank);
  const { styles }: any = useTheme();
  const navigate = useNavigate();

  function onSubmit() {
    if (data.onSubmit) {
      data.onSubmit();
      handleModalBlank({
        isShow: false,
      });
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
    <>
      <div
        aria-hidden="true"
        className={`${
          (data && data.isShow) || isShow ? "" : "hidden"
        } z-[999] flex justify-center items-center bg-gray-900 bg-opacity-50  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0  w-full md:inset-0 h-modal md:h-full`}
      >
        <div className={`relative p-4 w-full max-w-2xl h-full md:h-auto `}>
          {/* Modal content */}
          <div
            className={`${styles.modal.backgroundColor} ${styles.modal.textColor}  ${className}  relative rounded-lg shadow`}
          >
            {/* Modal header */}
            <div className="flex justify-between items-start p-4 rounded-t border-b ">
              <h3 className="text-xl font-semibold ">
                {data && data.text && data.text.title}
              </h3>
              <button
                onClick={() => {
                  onSubmit();
                  handleClose();
                }}
                type="button"
                className=" bg-transparent hover:bg-gray-600 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                data-modal-toggle="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="py-6 px-4"> {props.children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlankModal;
