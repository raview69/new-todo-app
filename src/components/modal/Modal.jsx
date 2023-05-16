import React from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "./ModalContext";

const Modal = () => {
  let { modalContent, modal, handleModal } = React.useContext(ModalContext);
  if (modal) {
    return ReactDOM.createPortal(
      <>
        <div
          onClick={() => handleModal()}
          className="fixed top-0 left-0 h-screen w-full flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.8)" }}
        >
          {modalContent}
        </div>
      </>,
      document.querySelector("#modal-root")
    );
  } else return null;
};

export default Modal;
