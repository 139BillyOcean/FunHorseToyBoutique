import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar.jsx';
import styles from './Search.styles.css';

const NavBar = () => {
  return (
    <>
    <ul className={styles.navigationContainer}>
      <li className={styles.logo}>LOGO</li>
      <li className={styles.search}>
        <SearchBar/>
      </li>
      <li >
        <div>
        <button>Hi @user</button>
        <br/>
        <button>Cart</button>
        </div>
      </li>
    </ul>
    </>
  )
}

export default NavBar;
