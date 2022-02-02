import React, {useState, useEffect} from 'react';
import axios from 'axios';
import LoginCSS from './Login.module.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [newUser, setNewUser] = useState({});
  let navigate = useNavigate();

  const handleChange = (event) => {
    setNewUser(() => {
      const userInfo = { ...newUser };
      userInfo[event.target.name] = event.target.value;
      return userInfo;
    });
  }

  const handleSubmit = () => {
    event.preventDefault();
    axios.post('/signup', newUser)
      .then(() => {
        axios.post('/users', newUser)
          .then(() => {
            navigate('/');
          })
          .catch(err => {
            alert('Please complete all fields with valid responses.');
          })
      })
      .catch(err => {
        alert('Username is taken. Please try again.');
      });
  }

  return (
    <div>
      <h1 className={LoginCSS.signup_title}>Sign up to Buy and Sell Toys!</h1>
      <form className={LoginCSS.signUp}>
        <label className={LoginCSS.label}>
          Username:
          <br />
          <input
            name="username"
            className = {LoginCSS.input_field}
            type="text"
            value={newUser.username || ''}
            onChange={handleChange} />
        </label>
        <br />
        <label className={LoginCSS.label}>
          Password:
          <br />
          <input
            name="password"
            className = {LoginCSS.input_field}
            type="password"
            value={newUser.password || ''}
            onChange={handleChange} />
        </label>
        <br />
        <label className={LoginCSS.label} >
          First & Last Name:
          <br />
          <input
            name="name"
            className = {LoginCSS.input_field}
            type="text"
            value={newUser.name || ''}
            onChange={handleChange} />
        </label>
        <br />
        <label className={LoginCSS.label} >
          Email:
          <br />
          <input
            name="email"
            className = {LoginCSS.input_field}
            type="text"
            value={newUser.email || ''}
            onChange={handleChange} />
        </label>
        <br />
        <label className={LoginCSS.label} >
          Address:
          <br />
          <input
            name="street"
            type="text"
            placeholder="Street"
            className = {LoginCSS.input_field2}
            value={newUser.street || ''}
            onChange={handleChange} />
        </label>
        <br />
        <input
          name="street2"
          type="text"
          placeholder="House / Apartment #"
          className = {LoginCSS.input_field2}
            value={newUser.street2 || ''}
            onChange={handleChange} />
        <br />
        <input
          name="city"
          type="text"
          placeholder="City"
          className = {LoginCSS.input_field2}
          value={newUser.city || ''}
          onChange={handleChange} />
        <input
          name="state"
          type="text"
          placeholder="State"
          className = {LoginCSS.input_field2}
          value={newUser.state || ''}
          onChange={handleChange} />
        <input
          name="zipcode"
          type="text"
          placeholder="Zipcode"
          className = {LoginCSS.input_field2}
          value={newUser.zipcode || ''}
          onChange={handleChange} />
        <br />
        <br />
        <button className={LoginCSS.signup_button }onClick={handleSubmit}>
          Sign Up!
        </button>
      </form>
  </div>
  )
}

export default SignUp;