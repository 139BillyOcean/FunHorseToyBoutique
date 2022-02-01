import React, {useState, useEffect} from 'react';
import styles from './Overview.styles.css';

const Modal = ({ photo, handleModal }) => {
  return (
    <div className={styles.modal} id='modal'>
      <div className={styles.close} id='close' onClick={() => { handleModal() }}>&times;</div>
      <img className={styles.modalContent} id='modalContent' src={photo}/>
    </div>
  );
}

export default Modal;