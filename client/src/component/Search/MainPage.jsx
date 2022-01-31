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
  const [searchTerm, setSearchTerm] = useState("");
  const [modal, showModal] = useState(true);

  useEffect(() => {
    axios
      .get("/home")
      .then((toys) => {
        setToys(toys.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="landing-page" >
      {modal ? <Modal modal={modal} showModal={showModal} /> : null}
      <NavBar
        toys={toys}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setToys={setToys}
      />
      <ul className={styles.mainContainer}>
        <li className={styles.sidebar}>
          <SideBar />
        </li>
        <li className={styles.content}>
          <Content toys={toys} />
        </li>
      </ul>
    </div>
  );
};

export default MainPage;
