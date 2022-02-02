import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import styles from './Login.styles.css';
import LoginCSS from './Login.module.css';

const SignUp = () => {
  const [newUser, setNewUser] = useState({});

  const handleChange = (event) => {
    setNewUser(() => {
      const userInfo = { ...newUser };
      userInfo[event.target.name] = event.target.value;
      return userInfo;
    });
  }

  const handleSubmit = () => {
    event.preventDefault();
    axios.post('/users', { newUser })
      .then(() => {
        // redirect to home page using global state
        setNewUser({});
      })
      .catch(err => {
        // stay on sign in page and display error message
        console.error(err);
      });
  }

  return (
    <div>
      <h1 className={LoginCSS.singup_title}>Sign up to Buy and Sell Toys!</h1>
    <form id='signUp' className={LoginCSS.signUp}>
        <label className={LoginCSS.label} id='username'>
          Your Username:
          <br />
          <input
            name="username"
            className = {LoginCSS.input_field}
            type="text"
            value={newUser.username || ''}
            onChange={handleChange} />
        </label>
        <br />
        <label className={LoginCSS.label} id='password'>
          Your Password:
          <br />
          <input
            name="password"
            className = {LoginCSS.input_field}
            type="text"
            value={newUser.password || ''}
            onChange={handleChange} />
        </label>
        <br />
        <label id='firstName' className={LoginCSS.label} >
          Your First Name:
          <br />
          <input
            name="firstName"
            className = {LoginCSS.input_field}
            type="text"
            value={newUser.firstName || ''}
            onChange={handleChange} />
        </label>
        <br />
        <label id='lastName' className={LoginCSS.label} >
          Your Last Name:
          <br />
          <input
            name="lastName"
            className = {LoginCSS.input_field}
            type="text"
            value={newUser.lastName || ''}
            onChange={handleChange} />
        </label>
        <br />
        <label id='email' className={LoginCSS.label} >
          Your Email:
          <br />
          <input
            name="email"
            className = {LoginCSS.input_field}
            type="text"
            value={newUser.email || ''}
            onChange={handleChange} />
        </label>
        <br />
        <label id='address' className={LoginCSS.label} >
          Your Address:
          <br />
          <input
            name="street"
            type="text"
            placeholder="Enter your Street"
            className = {LoginCSS.input_field}
            value={newUser.street || ''}
            onChange={handleChange} />
        </label>
        <br />
        <input
            name="street2"
          type="text"
          placeholder="Enter your house or apartment"
          className = {LoginCSS.input_field}
            value={newUser.street2 || ''}
            onChange={handleChange} />
        <br />
        <input
          name="city"
          type="text"
          placeholder="Enter your city"
          className = {LoginCSS.input_field}
          value={newUser.city || ''}
          onChange={handleChange} />
        <input
          name="state"
          type="text"
          placeholder="Enter your State"
          className = {LoginCSS.input_field}
          value={newUser.state || ''}
          onChange={handleChange} />
        <input
          name="zipcode"
          type="text"
          placeholder="Enter your zipcode"
          className = {LoginCSS.input_field}
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