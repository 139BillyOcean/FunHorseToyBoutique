import React, {useState, useEffect} from 'react';
//import SearchCSS from './Search.styles.css';
import SearchCSS from "./Overview.module.css";
import { useParams, Link } from 'react-router-dom';
import logo from "../../../dist/images/Fun-Horse-Transparent.png";
import nameMotto from "../../../dist/images/Name-Motto.png";
import cart from '../../../dist/images/cart.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NavBar = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('Log In')

  useEffect(() => {
    axios.get('/authenticate')
    .then((results) => {
      if (results.data) {
        setUserName("Hi " + results.data.username)
      }
  }, [])
})

  const handleCart = () => {
    axios.get('/authenticate')
      .then((results) => {
        if (results.data) {
          navigate('/viewcart/')
        } else {
          navigate('/signin/')
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleSignIn = () => {
    axios.get('/authenticate')
    .then((results) => {
      if (results.data) {
        navigate('/accountoverview/')
      } else {
        navigate('/signin/')
      }
    })
  }

  return (
    <div id="navigationContainer" className={SearchCSS.navigationContainer}>
     <Link to={'/'}><img src={logo} alt="main logo" className={SearchCSS.logo} /></Link>
      <img
        src={nameMotto}
        alt="name motto"
        className={SearchCSS.nameMotto}>
       </img>
      <div>
        <button className={SearchCSS.user} onClick={handleSignIn}>{userName}</button>
        <br/>
        <img src={cart} onClick={handleCart} className={SearchCSS.cart}></img>
      </div>
    </div>
  )
}

export default NavBar;
