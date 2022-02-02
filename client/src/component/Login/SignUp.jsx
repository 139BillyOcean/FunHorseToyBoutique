import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './Login.styles.css';

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
    axios.post('/signup', newUser)
      .then(() => {
        console.log('Signed up!');
        axios.post('/users', newUser)
          .then(() => {
            console.log('Added to local DB!');
            setNewUser({});
          })
          .catch(err => {
            console.error(err);
          })
        // redirect to home page
      })
      .catch(err => {
        // stay on sign in page and display error message
        console.error(err);
      });
  }

  return (
    <form id='signUp' className={styles.signUp}>
        <label id='username'>
          Your Username:
          <br />
          <input
            name="username"
            type="text"
            value={newUser.username || ''}
            onChange={handleChange} />
        </label>
        <br />
        <label id='password'>
          Your Password:
          <br />
          <input
            name="password"
            type="password"
            value={newUser.password || ''}
            onChange={handleChange} />
        </label>
        <br />
        <label id='firstName'>
          Your First Name:
          <br />
          <input
            name="firstName"
            type="text"
            value={newUser.firstName || ''}
            onChange={handleChange} />
        </label>
        <br />
        <label id='lastName'>
          Your Last Name:
          <br />
          <input
            name="lastName"
            type="text"
            value={newUser.lastName || ''}
            onChange={handleChange} />
        </label>
        <br />
        <label id='email'>
          Your Email:
          <br />
          <input
            name="email"
            type="text"
            value={newUser.email || ''}
            onChange={handleChange} />
        </label>
        <br />
        <label id='address'>
          Your Address:
          <br />
          <input
            name="street"
            type="text"
            value={newUser.street || ''}
            onChange={handleChange} />
        </label>
        <br />
        <input
            name="street2"
            type="text"
            value={newUser.street2 || ''}
            onChange={handleChange} />
        <br />
        <input
          name="city"
          type="text"
          value={newUser.city || ''}
          onChange={handleChange} />
        <input
          name="state"
          type="text"
          value={newUser.state || ''}
          onChange={handleChange} />
        <input
          name="zipcode"
          type="text"
          value={newUser.zipcode || ''}
          onChange={handleChange} />
        <br />
        <br />
        <button onClick={handleSubmit}>
          Sign Up!
        </button>
      </form>
  )
}

export default SignUp;