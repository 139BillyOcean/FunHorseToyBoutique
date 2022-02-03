import React, {useState, useEffect} from 'react';
// import styles from './Overview.styles.css';
import OverviewCSS from './Overview.module.css';

const Modal = ({ photo, handleModal }) => {
  return (
    <div className={OverviewCSS.modal} id='modal'>
      <div className={OverviewCSS.close} id='close' onClick={() => { handleModal() }}>&times;</div>
      <img className={OverviewCSS.modalContent} id='modalContent' src={photo}/>
    </div>
  );
}

export default Modal;