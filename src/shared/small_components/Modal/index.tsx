import React from "react";
import SuccessModal from "./Success";
import ErrorModal from "./Error";
import ConfirmModal from "./Confirm";

export default function Modal() {
  return (
    <React.Fragment>
      <SuccessModal />
      <ErrorModal />
      <ConfirmModal />
    </React.Fragment>
  );
}
