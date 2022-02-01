import React, {useState, useEffect} from 'react';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import styles from './Login.styles.css';

const LoginSignUp = () => {
  return (
    <div className={styles.loginSignUp} id='loginSignUp'>
      <Login />
      <SignUp />
    </div>
  );
};

export default LoginSignUp;