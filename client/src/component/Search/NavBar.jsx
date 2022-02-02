import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar.jsx';
//import SearchCSS from './Search.styles.css';
import SearchCSS from "./Search.module.css";
import { useParams, Link } from 'react-router-dom';

const NavBar = ({searchTerm, setSearchTerm, searchForItem}) => {
  return (
    <>
    <ul id = "navigationContainer" className={SearchCSS.navigationContainer}>
      <li id = 'logo' className={SearchCSS.logo}>LOGO</li>
      <li className={SearchCSS.search}>
        <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} searchForItem={searchForItem}/>
      </li>
      <li >
        <div>
        <button>Hi @user</button>
        <br/>
        <Link to={'/viewcart/'}>
        <button>Cart</button>
      </Link>
        </div>
      </li>
    </ul>
    </>
  )
}

export default NavBar;
