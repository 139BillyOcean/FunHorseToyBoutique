import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar.jsx';
//import SearchCSS from './Search.styles.css';
import SearchCSS from "./Search.module.css";
import { useParams, Link } from 'react-router-dom';
import logo from "../../../dist/images/Fun-Horse-Transparent.png";
import nameMotto from "../../../dist/images/Name-Motto.png";
import cart from '../../../dist/images/cart.png';

const NavBar = ({searchTerm, setSearchTerm, searchForItem}) => {
  return (
    <div id = "navigationContainer" className={SearchCSS.navigationContainer}>
     <Link to={'/'}><img src={logo} alt="main logo" className={SearchCSS.logo.image}></img></Link>
      <img
       src={nameMotto}
       alt="name motto"
       className={SearchCSS.nameMotto}>
         
       </img>
        <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} searchForItem={searchForItem}/>
        <div>
        <button className = {SearchCSS.user}>Hi @user</button>
        <br/>
        <Link to={'/viewcart/'}>
        <img src = {cart} className = {SearchCSS.cart}></img>
      </Link>
        </div>
    </div>
  )
}

export default NavBar;
