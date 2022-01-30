import React, {useState, useEffect} from 'react';
import NavBar from './NavBar.jsx';
import SideBar from './SideBar.jsx';
import Content from './Content.jsx'
import styles from './Search.styles.css';
import faketoys from './fakedata.js';
import axios from 'axios';

const MainPage = () => {
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('/home')
    .then((toys) => {
      console.log("setting toys from main page");
      setToys(toys.data);
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <>
    <NavBar toys={toys} searchTerm={searchTerm} setSearchTerm={setSearchTerm} setToys={setToys} />
    <ul className={styles.mainContainer}>
      <li className={styles.sidebar}><SideBar/></li>
      <li className={styles.content}><Content toys={toys} /></li>
    </ul>
    </>
  )
}

export default MainPage;

