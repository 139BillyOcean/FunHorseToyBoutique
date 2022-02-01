import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './Login.styles.css';

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
    <form id='login' className={styles.login}>
        <label id='username'>
          Your Username:
          <br />
          <input
            name="username"
            type="text"
            value={user.username || ''}
            onChange={handleChange} />
        </label>
        <br />
        <label id='password'>
          Your Password:
          <br />
          <input
            name="password"
            type="text"
            value={user.password || ''}
            onChange={handleChange} />
        </label>
        <br />
        <br />
        <button onClick={(e) => { handleSubmit(e) }}>
          Sign In!
        </button>
      </form>
  )
}

export default Login;