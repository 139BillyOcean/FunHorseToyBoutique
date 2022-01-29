import React, {useState, useEffect} from 'react';
import NavBar from './NavBar.jsx';
import SideBar from './SideBar.jsx';
import Content from './Content.jsx'
import styles from './Search.styles.css';

const MainPage = () => {
  return (
    <>
    <NavBar/>
    <ul className={styles.mainContainer}>
      <li className={styles.sidebar}><SideBar/></li>
      <li className={styles.content}><Content/></li>
    </ul>
    </>
  )
}

export default MainPage;

