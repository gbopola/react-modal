import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export const Modal = ({ setToggleModal }) => {
  return (
    <div className="ModalBg">
      <div className="ModalContainer">
        <FontAwesomeIcon icon={faXmark} onClick={setToggleModal} />
        <div className="ModalSuccess">
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <h2>Payment successful</h2>
        <p>Your order is on the way :)</p>
      </div>
    </div>
  );
};
