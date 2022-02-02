import React, {useState, useEffect} from 'react';
import axios from 'axios';
import LoginCSS from './Login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({})
  let navigate = useNavigate();

  const handleChange = (event) => {
    setUser(() => {
      const newUser = { ...user };
      newUser[event.target.name] = event.target.value;
      return newUser;
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/login', user)
      .then((results) => {
        navigate('/');
      })
      .catch(err => {
        alert('Incorrect username or password');
      });
  }

  return (
    <div>
      <h1 className={LoginCSS.login_title}>Already a member? Sign in!</h1>
    <form id='login' className={LoginCSS.login}>
        <label id='username' className={LoginCSS.label} >
          Username:
          <br />
          <input
            className = {LoginCSS.input_field}
            name="username"
            type="text"
            value={user.username || ''}
            onChange={handleChange} />
        </label>
        <br />
        <label id='password' className={LoginCSS.label} >
          Password:
          <br />
          <input
             className = {LoginCSS.input_field}
            name="password"
            type="password"
            value={user.password || ''}
            onChange={handleChange} />
        </label>
        <br />
        <br />
        <button className = {LoginCSS.signin_button} onClick={(e) => { handleSubmit(e) }}>
          Sign In!
        </button>
      </form>
      </div>
  )
}

export default Login;