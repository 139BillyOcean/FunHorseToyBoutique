import React, { useState, useEffect } from "react";
import axios from 'axios';
import SearchCSS from "./Search.module.css";

const Newsletter = ({ showModal }) => {
  const [input, setInput] = useState({
    name: '',
    email: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [e.name]: e.value,
    });
  }

  const handleSubmit = () => {
    showModal(false)
    //send input to database
 }

  return (
    <div >
      <form id = 'newsletter_signup' className = {SearchCSS.newsletter_signup}>
  <div id="signup" className = {SearchCSS.signup}>
    <label id = "name">Enter your name: </label>
          <input className = {SearchCSS.field} type="text" name="name" id="name" required onChange={handleChange} />
  </div>
  <div id="signup" className = {SearchCSS.signup}>
    <label id = "email">Enter your email: </label>
          <input className = {SearchCSS.field} type="text" name="email" id="email" required onChange={handleChange}/>
  </div>
         <button className = {SearchCSS.modal_button} onClick={(e) => {handleSubmit()}}>Subscribe to received 10% off your order!</button>
          <button className = {SearchCSS.button_subscribe} onClick={(e) => {showModal(false)}}>No, I don't like discounts, procceed to the main page</button>
</form>
  </div>
)


}

export default Newsletter;