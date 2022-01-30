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
  const [searchResults, setSearchResults] = useState([]);
  const [condition, setCondition] = useState([]);

  useEffect(() => {
    axios.get('/home')
    .then((toys) => {
      setToys(toys.data);
    })
    .catch((err) => console.log(err))
  }, [])

  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  }

  const searchForItem = (searchTerm) => {
    axios.get(`home/search/${searchTerm}`)
    .then((response) => {
      setSearchResults(response.data)
      setToys(response.data)
    })
    .catch((err) => console.log(err))
  }

  return (
    <>
    <NavBar toys={toys} searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchForItem={searchForItem} />
    <ul className={styles.mainContainer}>
      <li className={styles.sidebar} condition={condition} setCondition={setCondition} ><SideBar/></li>
      <li className={styles.content}><Content toys={toys} /></li>
    </ul>
    </>
  )
}

export default MainPage;

