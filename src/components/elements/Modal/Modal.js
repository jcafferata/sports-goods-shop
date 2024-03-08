import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Modal.css";

const Modal = ({ openModal, closeModal, children }) => {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (openModal) {
      // @ts-ignore
      ref.current.showModal();
    } else {
      // @ts-ignore
      ref.current.close();
    }
  }, [openModal]);

  return (
    <dialog className="modal" ref={ref} onCancel={closeModal}>
      {children}
      <button className="modal-close" onClick={closeModal}>
        <FontAwesomeIcon size="2x" icon={faXmark} />
      </button>
    </dialog>
  );
};

export default Modal;
