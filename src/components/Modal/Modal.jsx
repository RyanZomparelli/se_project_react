import { useEffect } from "react";
import "./Modal.css";

// Gennadiy Barsegyan, thanks for the suggestion!

const Modal = ({ modalName, onClose, activeModal, children }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // When interacting with the DOM directly in React, it must be done in a useEffect
  // hook. Here we add a listener to the document only when the activeModal state
  // is truthy. To prevent a build-up of old listeners (memory leaks) remove
  // them with Reacts cleanup pattern. Return a callback to the useEffect hook for
  // deferred execution.
  useEffect(() => {
    if (!activeModal) return;

    function handleEscClose(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscClose);

    return () => document.removeEventListener("keydown", handleEscClose);
    // What is a Dependency Array?
    // The dependency array is the second parameter of useEffect that tells React
    // when to run the effect. Think of it like a "watch list" - React watches these
    // values and re-runs the effect whenever any of them change.
  }, [activeModal, onClose]);

  return (
    <section
      className={`modal modal_type_${modalName}`}
      onClick={handleOverlayClick}
    >
      <div className={`modal__container modal__container_type_${modalName}`}>
        <button
          className={`modal__btn-close modal__btn-close_type_${modalName}`}
          onClick={onClose}
        ></button>
        {children}
      </div>
    </section>
  );
};

export default Modal;
