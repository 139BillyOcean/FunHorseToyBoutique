import React, { useState, useEffect } from "react";
import Newsletter from './Newsletter.jsx'
// import animatedLogo from '../../../dist/images/Animated-Fun-Horse-Logo.gif';
import SearchCSS from "./Search.module.css";

const Modal = ({ modal, showModal }) => {
//  <img src = {animatedLogo} alt = 'animated fun horse logo'/>
  return (
    <div id = 'modal' className = {SearchCSS.modal}>
      <img src = {animatedLogo} alt = 'animated fun horse logo'/>
      <Newsletter showModal={showModal} />
    </div>
  )
}

export default Modal;