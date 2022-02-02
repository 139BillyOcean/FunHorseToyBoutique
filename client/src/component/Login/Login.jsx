import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import styles from './Login.styles.css';
import LoginCSS from './Login.module.css';

const Login = () => {
  const [user, setUser] = useState({})

  const handleChange = (event) => {
    setUser(() => {
      const newUser = { ...user };
      newUser[event.target.name] = event.target.value;
      return newUser;
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({});
    // authenticate user signin
    axios.post('/signIn', user)
      .then(() => {
        // redirect to home page using global state
      })
      .catch(err => {
        // stay on sign in page and display error message
        console.error(err);
      });
  }

  return (
    <div>
      <h1 className={LoginCSS.login_title}>Already a member? Sign in!</h1>
    <form id='login' className={LoginCSS.login}>
        <label id='username' className={LoginCSS.label} >
          Your Username:
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
          Your Password:
          <br />
          <input
             className = {LoginCSS.input_field}
            name="password"
            type="text"
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