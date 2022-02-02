import React, {useState, useEffect} from 'react';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import LoginCSS from './Login.module.css';
import arrow from '../../../dist/images/arrow-left.png';
import logo from '../../../dist/images/Fun-Horse-Transparent.png';
import { useNavigate } from 'react-router-dom';

const LoginSignUp = ({ user, handleCurrentUser }) => {
  let navigate = useNavigate();

  return (
    <div className={LoginCSS.loginSignUp}>
      <img src={logo} className = {LoginCSS.logo}></img>
      <button className={LoginCSS.home_button} onClick={() => { navigate('/'); }}>
        Home
      </button>
      <img src={arrow} className={LoginCSS.arrow}></img>
      <SignUp handleCurrentUser={handleCurrentUser}/>
      <Login handleCurrentUser={handleCurrentUser}/>
    </div>
  );
};

export default LoginSignUp;