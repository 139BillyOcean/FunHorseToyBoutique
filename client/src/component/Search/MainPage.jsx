import React, { useState, useEffect } from "react";
import NavBar from "./NavBar.jsx";
import SideBar from "./SideBar.jsx";
import Content from "./Content.jsx";
import styles from "./Search.styles.css";
import faketoys from "./fakedata.js";
import axios from "axios";
import Modal from './Modal.jsx';

const MainPage = () => {
  const [toys, setToys] = useState([]);
  //const [searchTerm, setSearchTerm] = useState("");
  const [modal, showModal] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  //const [conditionFilter, setConditionFilter] = useState([]);
  const [newFilter, setNewFilter] = useState(false);
  const [usedFilter, setUsedFilter] = useState(false);
  const [maxPrice, setMaxPrice] = useState(1000);

  useEffect(() => {
    axios
      .get("/home")
      .then((toys) => {
        setToys(toys.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  }

  const searchForItem = () => {
    var conditionFilter = [];

    if (usedFilter) {
      conditionFilter.push('used')
    }
    if (newFilter) {
      conditionFilter.push('new')
    }
    // var targetConditionFilter = conditionFilterParam ? conditionFilterParam : conditionFilter;
    var searchParam = searchTerm && searchTerm.length > 0 ? `/${searchTerm}` : '';
    axios.get(`home/search${searchParam}`, {params: {conditionFilter: conditionFilter, maxPrice: maxPrice}})
    .then((response) => {
      setToys(response.data)
    })
    .catch((err) => console.log(err))
  }

  return (
    <div id="landing-page" >
       {modal ? <Modal modal={modal} showModal={showModal} /> : null}
    <NavBar toys={toys} searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchForItem={searchForItem} />
    <ul className={styles.mainContainer}>
      <li className={styles.sidebar}>
        <SideBar
          newFilter={newFilter} setNewFilter={setNewFilter}
          usedFilter={usedFilter} setUsedFilter={setUsedFilter}
          maxPrice={maxPrice} setMaxPrice={setMaxPrice}
          searchForItem={searchForItem}
        />
      </li>
      <li className={styles.content}><Content toys={toys} /></li>
    </ul>
    </div>
  )
}

export default MainPage;
