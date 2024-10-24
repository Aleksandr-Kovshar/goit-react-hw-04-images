import css from "./Modal.module.css";
import React, { Component } from "react";

const Modal = ({handleBackdropClick, largeImageURL}) => {
  return (
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt="Large" />
      </div>
    </div>
  );
};


export default Modal;
