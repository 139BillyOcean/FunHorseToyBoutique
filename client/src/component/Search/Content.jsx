import React from 'react';
import ListEntry from './ListEntry.jsx';
//import styles from './Search.styles.css';
import SearchCSS from "./Search.module.css";

const Content = ({toys}) => {
  return (
  <div>
     <ul>
      {
        toys.map(item => (
          <li key={item.id}><ListEntry toy={item}/></li>
          )
        )
      }
    </ul>
    </div>
  )
}

export default Content;