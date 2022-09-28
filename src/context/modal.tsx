import { useState, useEffect, SetStateAction, createContext } from "react";

const ModalContext = createContext({});

export const ModalProvider = ({ children }: any) => {
  const defaultValue: any = {
    isShow: false,
    text: null,
    url: null,
    onAction: null,
    buttonText: null,
    onSubmit: null,
  };

  const [modalSuccess, setModalSuccess] = useState(defaultValue);
  const [modalError, setModalError] = useState(defaultValue);
  const [modalConfirm, setModalConfirm] = useState(defaultValue);
  const [modalBlank, setModalBlank] = useState(defaultValue);
  function handleModalBlank(modalSuccess: any) {
    setModalBlank(modalSuccess);
  }
  function handleModalSuccess(modalSuccess: any) {
    setModalSuccess(modalSuccess);
  }

  function handleModalError(modalError: any) {
    setModalError(modalError);
  }

  function handleModalConfirm(modalConfirm: any) {
    setModalConfirm(modalConfirm);
  }
  return (
    <ModalContext.Provider
      value={{
        modalSuccess,
        modalError,
        modalConfirm,
        modalBlank,
        setModalBlank,
        setModalSuccess,
        setModalError,
        setModalConfirm,
        handleModalSuccess,
        handleModalError,
        handleModalConfirm,
        handleModalBlank,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export default ModalContext;
