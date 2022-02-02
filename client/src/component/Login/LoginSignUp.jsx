import React, {useState, useEffect} from 'react';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
// import styles from './Login.styles.css';
import LoginCSS from './Login.module.css';
//login arrow: client/dist/images/chevron-left-solid 1.png
import arrow from '../../../dist/images/arrow-left.png';
import logo from '../../../dist/images/Fun-Horse-Transparent.png';
import { LoaderOptionsPlugin } from 'webpack';

const LoginSignUp = () => {
  return (
    <div className={LoginCSS.loginSignUp} id='loginSignUp'>
      <img src={logo} className = {LoginCSS.logo}></img>
      <button className={LoginCSS.home_button}>Home
      </button>
      <img src={arrow} className={LoginCSS.arrow}></img>
      <SignUp />
      <Login />
    </div>
  );
};

export default LoginSignUp;