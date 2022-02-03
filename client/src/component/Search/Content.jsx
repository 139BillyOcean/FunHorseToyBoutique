import React from 'react';
import ListEntry from './ListEntry.jsx';
//import styles from './Search.styles.css';
import SearchCSS from "./Search.module.css";


const Content = ({toys, handleCurrentCart, cart}) => {
  return (
  <div>
     <div className = {SearchCSS.content_container}>
      {
        toys.map((item, index) => (
          <li key={index}><ListEntry toy={item} cart={cart} handleCurrentCart={handleCurrentCart}/></li>
          )
        )
      }
    </div>
    </div>
  )
}

export default Content;