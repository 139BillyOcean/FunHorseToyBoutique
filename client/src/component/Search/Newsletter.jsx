import React, { useState, useEffect } from "react";
import axios from 'axios';


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
    <div id = 'newsletter-signup'>
      <form id="form-example">
  <div id="form-example">
    <label id = "name">Enter your name: </label>
          <input type="text" name="name" id="name" required onChange={handleChange} />
  </div>
  <div id="form-example">
    <label id = "email">Enter your email: </label>
          <input type="email" name="email" id="email" required onChange={handleChange}/>
  </div>
  <div id="form-example">
          <input type="submit" value="Subscribe to received 10% off your order!" onClick={handleSubmit}/>
          <button onClick={(e) => {showModal(false)}}>No, I don't like discounts, procceed to the main page</button>
  </div>
</form>
  </div>
)


}

export default Newsletter;