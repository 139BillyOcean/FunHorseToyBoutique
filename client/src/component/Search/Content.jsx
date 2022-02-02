import React from 'react';
import ListEntry from './ListEntry.jsx';
//import styles from './Search.styles.css';
import SearchCSS from "./Search.module.css";


const Content = ({toys, handleCurrentCart, cart}) => {
  return (
  <div>
     <ul>
      {
        toys.map((item, index) => (
          <li key={index}><ListEntry toy={item} cart={cart} handleCurrentCart={handleCurrentCart}/></li>
          )
        )
      }
    </ul>
    </div>
  )
}

export default Content;