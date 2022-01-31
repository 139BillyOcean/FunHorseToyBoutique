import React, { useState, useEffect } from "react";
import Newsletter from './Newsletter.jsx'
import animatedLogo from '../../../dist/images/Animated-Fun-Horse-Logo.gif';

const Modal = ({ modal, showModal }) => {
//  <img src = {animatedLogo} alt = 'animated fun horse logo'/>
  return (
    <div id = 'modal'>
      <div id='animated-logo'>
      <img src = {animatedLogo} alt = 'animated fun horse logo'/>
      </div>
      <Newsletter showModal={showModal} />
    </div>
  )
}

export default Modal;