import { useContext } from "react";
import ModalContext from "../context/modal";

const useModal = () => {
  return useContext(ModalContext);
};

export default useModal;
