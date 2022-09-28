import React from "react";
import SuccessModal from "./Success";
import ErrorModal from "./Error";
import ConfirmModal from "./Confirm";
import BlankModal from "./Blank";

export default function Modal() {
  return (
    <React.Fragment>
      <SuccessModal />
      <ErrorModal />
      <ConfirmModal />
      {/* <BlankModal /> */}
    </React.Fragment>
  );
}
